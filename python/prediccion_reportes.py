import pandas as pd
from pymongo import MongoClient
from sklearn.preprocessing import MinMaxScaler
from tensorflow import keras
import matplotlib.pyplot as plt
from PIL import Image, ImageDraw
import io
from io import BytesIO
from keras.models import load_model

def reporte_predicciones_ingresos(data_cache):
    # Usar datos del data_cache
    df_boletos = data_cache['boletos']
    df_facturadetalles = data_cache['facturadetalles']
    df_facturas = data_cache['facturas']
    df_rutas = data_cache['rutas']
    df_servicios = data_cache['servicios']
    df_horarios = data_cache['horarios']

    # Unión de tablas con merge
    df = df_boletos.merge(df_facturadetalles, on='id_boleto', how='left')
    df = df.merge(df_facturas, on='id_factura', how='left')
    df = df.merge(df_rutas, on='id_ruta', how='left', suffixes=('', '_rutas'))
    df = df.merge(df_servicios, on='id_servicio', how='left', suffixes=('', '_servicios'))
    df = df.merge(df_horarios, on='id_horario', how='left', suffixes=('', '_horarios'))

    # Procesamiento de fechas
    for column in df.columns:
        if "fecha" in column:
            df['fecha'] = pd.to_datetime(df[column])
            df['year'] = df['fecha'].dt.year
            df['month'] = df['fecha'].dt.month
            break

    # Agrupar por año y mes, sumando el total de ingresos
    df_grouped = df.groupby(['year', 'month']).agg({'total': 'sum'}).reset_index()

    # Preparación de datos para el modelo
    X = df_grouped[['year', 'month']]
    y = df_grouped['total']

    scaler_X = MinMaxScaler()
    X_scaled = scaler_X.fit_transform(X)

    scaler_y = MinMaxScaler()
    y_scaled = scaler_y.fit_transform(y.values.reshape(-1, 1))

    # Remodelar los datos para que coincidan con la forma esperada por el modelo LSTM
    X_scaled = X_scaled.reshape(X_scaled.shape[0], 1, X_scaled.shape[1])

    # Cargar el modelo previamente entrenado
    model_path = "./modelo_ingresos_lstm.h5"
    model = keras.models.load_model(model_path)

    # Hacer predicciones sobre los meses históricos
    predictions_scaled = model.predict(X_scaled)

    # Revertir la escala de las predicciones
    predictions = scaler_y.inverse_transform(predictions_scaled)

    # Mostrar las predicciones para los meses históricos
    df_grouped['predicciones'] = predictions

    # Visualización de los datos históricos y las predicciones
    plt.figure(figsize=(15, 6))
    plt.plot(df_grouped['year'].astype(str) + '-' + df_grouped['month'].astype(str), df_grouped['total'], label='Datos Históricos', marker='o')
    plt.plot(df_grouped['year'].astype(str) + '-' + df_grouped['month'].astype(str), df_grouped['predicciones'], label='Predicciones', marker='x', color='red')
    plt.xticks(rotation=45)
    plt.ylabel('Total de Ingresos')
    plt.title('Comparación de Datos Históricos vs Predicciones')
    plt.legend()
    plt.grid(True)
    plt.tight_layout()

    buf = io.BytesIO()
    plt.savefig(buf, format="png")
    buf.seek(0)

    return buf


def reporte_predicciones_futuras(data_cache):
    # Usar datos del data_cache
    df_boletos = data_cache['boletos']
    df_facturadetalles = data_cache['facturadetalles']
    df_facturas = data_cache['facturas']
    df_rutas = data_cache['rutas']
    df_servicios = data_cache['servicios']
    df_horarios = data_cache['horarios']

    # Unión de tablas con merge
    df = df_boletos.merge(df_facturadetalles, on='id_boleto', how='left')
    df = df.merge(df_facturas, on='id_factura', how='left')
    df = df.merge(df_rutas, on='id_ruta', how='left', suffixes=('', '_rutas'))
    df = df.merge(df_servicios, on='id_servicio', how='left', suffixes=('', '_servicios'))
    df = df.merge(df_horarios, on='id_horario', how='left', suffixes=('', '_horarios'))

    # Procesamiento de fechas
    for column in df.columns:
        if "fecha" in column:
            df['fecha'] = pd.to_datetime(df[column])
            df['year'] = df['fecha'].dt.year
            df['month'] = df['fecha'].dt.month
            break

    # Agrupar por año y mes, sumando el total de ventas
    df_grouped = df.groupby(['year', 'month']).agg({'total': 'sum'}).reset_index()

    # Preparación de datos para el modelo
    X = df_grouped[['year', 'month']]
    y = df_grouped['total']

    scaler_X = MinMaxScaler()
    X_scaled = scaler_X.fit_transform(X)

    scaler_y = MinMaxScaler()
    y_scaled = scaler_y.fit_transform(y.values.reshape(-1, 1))
    X_scaled = X_scaled.reshape(X_scaled.shape[0], 1, X_scaled.shape[1])

    # Cargar el modelo previamente entrenado
    model_path = "./modelo_ingresos_lstm.h5"
    model = keras.models.load_model(model_path)

    # Hacer predicciones para los años 2023, 2024 y 2025
    months_future = [[year, i] for year in range(2023, 2026) for i in range(1, 13)]
    months_future_scaled = scaler_X.transform(months_future)
    months_future_scaled = months_future_scaled.reshape(months_future_scaled.shape[0], 1, months_future_scaled.shape[1])
    predictions_future_scaled = model.predict(months_future_scaled)
    predictions_future = scaler_y.inverse_transform(predictions_future_scaled)

    # Crear DataFrame con las predicciones
    df_pred_future = pd.DataFrame(months_future, columns=['year', 'month'])
    df_pred_future['predicciones'] = predictions_future

    # Visualización de los datos históricos y las predicciones
    plt.figure(figsize=(20, 6))
    plt.plot(df_grouped['year'].astype(str) + '-' + df_grouped['month'].astype(str), df_grouped['total'], label='Datos Históricos', marker='o')
    plt.plot(df_pred_future['year'].astype(str) + '-' + df_pred_future['month'].astype(str), df_pred_future['predicciones'], label='Predicciones 2023-2025', marker='x', color='red')

    plt.xticks(rotation=45)
    plt.ylabel('Total de Ventas')
    plt.title('Comparación de Datos Históricos vs Predicciones 2023-2025')
    plt.legend()
    plt.grid(True)
    plt.tight_layout()

    buf = io.BytesIO()
    plt.savefig(buf, format="png")
    buf.seek(0)

    return buf


def reporte_predicciones_boletos(data_cache):
    # Usar datos del data_cache
    df_boletos = data_cache['boletos']
    df_facturadetalles = data_cache['facturadetalles']
    df_facturas = data_cache['facturas']
    df_rutas = data_cache['rutas']
    df_servicios = data_cache['servicios']
    df_horarios = data_cache['horarios']

    # Unión de tablas con merge
    df = df_boletos.merge(df_facturadetalles, on='id_boleto', how='left')
    df = df.merge(df_facturas, on='id_factura', how='left')
    df = df.merge(df_rutas, on='id_ruta', how='left', suffixes=('', '_rutas'))
    df = df.merge(df_servicios, on='id_servicio', how='left', suffixes=('', '_servicios'))
    df = df.merge(df_horarios, on='id_horario', how='left', suffixes=('', '_horarios'))

    # Procesamiento de fechas
    for column in df.columns:
        if "fecha" in column:
            df['fecha'] = pd.to_datetime(df[column])
            df['year'] = df['fecha'].dt.year
            df['month'] = df['fecha'].dt.month
            break

    # Agrupar por año y mes, contando la cantidad de boletos vendidos
    df_grouped = df.groupby(['year', 'month']).size().reset_index(name='count_boletos')

    # Preparación de datos para el modelo
    X = df_grouped[['year', 'month']]
    y = df_grouped['count_boletos']

    scaler_X = MinMaxScaler()
    X_scaled = scaler_X.fit_transform(X)

    scaler_y = MinMaxScaler()
    y_scaled = scaler_y.fit_transform(y.values.reshape(-1, 1))
    X_scaled = X_scaled.reshape(X_scaled.shape[0], 1, X_scaled.shape[1])

    # Cargar el modelo previamente entrenado
    model_path = "./modelo_boletos_lstm.h5"
    model = keras.models.load_model(model_path)

    # Hacer predicciones sobre los meses históricos
    predictions_scaled = model.predict(X_scaled)
    predictions = scaler_y.inverse_transform(predictions_scaled)

    # Asignar las predicciones al DataFrame
    df_grouped['predicciones'] = predictions

    # Visualización de los datos históricos y las predicciones
    plt.figure(figsize=(20, 6))
    plt.plot(df_grouped['year'].astype(str) + '-' + df_grouped['month'].astype(str), df_grouped['count_boletos'], label='Datos Históricos', marker='o')
    plt.plot(df_grouped['year'].astype(str) + '-' + df_grouped['month'].astype(str), df_grouped['predicciones'], label='Predicciones', marker='x', color='red')

    plt.xticks(rotation=45)
    plt.ylabel('Cantidad de Boletos Vendidos')
    plt.title('Comparación de Datos Históricos vs Predicciones')
    plt.legend()
    plt.grid(True)
    plt.tight_layout()

    buf = io.BytesIO()
    plt.savefig(buf, format="png")
    buf.seek(0)

    return buf



def reporte_predicciones_por_periodo(data_cache, start_year=2023, end_year=2025):
    # Usar datos del data_cache
    df_boletos = data_cache['boletos']
    df_facturadetalles = data_cache['facturadetalles']
    df_facturas = data_cache['facturas']
    df_rutas = data_cache['rutas']
    df_servicios = data_cache['servicios']
    df_horarios = data_cache['horarios']

    # Unión de tablas con merge
    df = df_boletos.merge(df_facturadetalles, on='id_boleto', how='left')
    df = df.merge(df_facturas, on='id_factura', how='left')
    df = df.merge(df_rutas, on='id_ruta', how='left', suffixes=('', '_rutas'))
    df = df.merge(df_servicios, on='id_servicio', how='left', suffixes=('', '_servicios'))
    df = df.merge(df_horarios, on='id_horario', how='left', suffixes=('', '_horarios'))

    # Procesamiento de fechas y agrupación por año y mes
    for column in df.columns:
        if "fecha" in column:
            df['fecha'] = pd.to_datetime(df[column])
            df['year'] = df['fecha'].dt.year
            df['month'] = df['fecha'].dt.month
            break
    df_grouped = df.groupby(['year', 'month']).size().reset_index(name='count_boletos')

    # Preparación de datos para el modelo
    X = df_grouped[['year', 'month']]
    y = df_grouped['count_boletos']
    scaler_X = MinMaxScaler()
    X_scaled = scaler_X.fit_transform(X)
    scaler_y = MinMaxScaler()
    y_scaled = scaler_y.fit_transform(y.values.reshape(-1, 1))

    # Cargar el modelo
    model_path = "./modelo_boletos_lstm.h5"
    model = keras.models.load_model(model_path)

    # Hacer predicciones para el rango de años especificado
    months_future = [[year, i] for year in range(start_year, end_year+1) for i in range(1, 13)]
    months_future_scaled = scaler_X.transform(months_future)
    months_future_scaled = months_future_scaled.reshape(months_future_scaled.shape[0], 1, months_future_scaled.shape[1])
    predictions_future_scaled = model.predict(months_future_scaled)
    predictions_future = scaler_y.inverse_transform(predictions_future_scaled)

    # Preparar y mostrar el gráfico
    buf = io.BytesIO()
    plt.figure(figsize=(20, 6))
    plt.plot(df_grouped['year'].astype(str) + '-' + df_grouped['month'].astype(str), df_grouped['count_boletos'], label='Datos Históricos', marker='o')
    plt.plot([f"{year}-{month}" for year, month in months_future], predictions_future, label=f'Predicciones {start_year}-{end_year}', marker='x', color='red')
    plt.xticks(rotation=45)
    plt.ylabel('Cantidad de Boletos Vendidos')
    plt.title(f'Comparación de Datos Históricos vs Predicciones {start_year}-{end_year}')
    plt.legend()
    plt.grid(True)
    plt.tight_layout()
    plt.savefig(buf, format="png")
    plt.close()
    buf.seek(0)
    return buf


def generar_reporte_predicciones_por_ruta(data_cache):
    # Usar datos del data_cache
    df_boletos = data_cache['boletos']
    df_facturadetalles = data_cache['facturadetalles']
    df_facturas = data_cache['facturas']
    df_rutas = data_cache['rutas']
    df_servicios = data_cache['servicios']
    df_horarios = data_cache['horarios']

    # Unión de tablas con merge especificando sufijos personalizados
    df = df_boletos.merge(df_facturadetalles, on='id_boleto', how='left', suffixes=('_boletos', '_facturadetalles'))
    df = df.merge(df_facturas, on='id_factura', how='left', suffixes=('_boletos', '_facturas'))
    df = df.merge(df_rutas, on='id_ruta', how='left', suffixes=('_boletos', '_rutas'))
    df = df.merge(df_servicios, on='id_servicio', how='left', suffixes=('_boletos', '_servicios'))
    df = df.merge(df_horarios, on='id_horario', how='left', suffixes=('_boletos', '_horarios'))

    # Procesamiento de fechas
    df['fecha'] = pd.to_datetime(df['fecha_doc'])
    df['year'] = df['fecha'].dt.year
    df['month'] = df['fecha'].dt.month

    # Agrupar por año, mes y ruta, contando la cantidad de boletos vendidos
    df_grouped = df.groupby(['year', 'month', 'nombre']).size().reset_index(name='count_boletos')

    # Preparación de datos para el modelo
    X = df_grouped[['year', 'month']]
    X['nombre'] = df_grouped['nombre'].astype('category').cat.codes
    y = df_grouped['count_boletos']

    scaler_X = MinMaxScaler()
    X_scaled = scaler_X.fit_transform(X)

    scaler_y = MinMaxScaler()
    y_scaled = scaler_y.fit_transform(y.values.reshape(-1, 1))

    # Remodelar los datos para que coincidan con la forma esperada por el modelo LSTM
    X_scaled = X_scaled.reshape(X_scaled.shape[0], 1, X_scaled.shape[1])

    # Cargar el modelo previamente entrenado
    model_path = "./modelo_boletos_por_ruta_lstm.h5"
    model = load_model(model_path)

    # Hacer predicciones sobre los meses históricos
    predictions_scaled = model.predict(X_scaled)

    # Revertir la escala de las predicciones
    predictions = scaler_y.inverse_transform(predictions_scaled)

    # Agregar las predicciones al dataframe agrupado
    df_grouped['predicciones'] = predictions

    # Número de rutas únicas para determinar el número de subplots
    num_rutas = df_grouped['nombre'].unique().shape[0]

    # Crear una figura que contendrá todos los subplots
    fig, axes = plt.subplots(num_rutas, 1, figsize=(15, 6 * num_rutas))

    # En caso de que haya una sola ruta, axes no será un iterable
    if num_rutas == 1:
        axes = [axes]

    # Generar un gráfico para cada ruta
    for ax, (ruta, df_ruta) in zip(axes, df_grouped.groupby('nombre')):
        ax.plot(df_ruta['year'].astype(str) + '-' + df_ruta['month'].astype(str), df_ruta['count_boletos'], label='Datos Históricos', marker='o')
        ax.plot(df_ruta['year'].astype(str) + '-' + df_ruta['month'].astype(str), df_ruta['predicciones'], label='Predicciones', marker='x', linestyle='--', color='red')
        ax.set_xticks(range(len(df_ruta)))
        ax.set_xticklabels(df_ruta['year'].astype(str) + '-' + df_ruta['month'].astype(str), rotation=45)
        ax.set_ylabel('Cantidad de Boletos Vendidos')
        ax.set_title(f'Ruta: {ruta}')
        ax.legend()
        ax.grid(True)

    plt.tight_layout()

    # Guardar la figura completa con todos los gráficos en un buffer de bytes
    buf = io.BytesIO()
    plt.savefig(buf, format="png")
    buf.seek(0)

    # Cerrar la figura para liberar memoria
    plt.close(fig)

    return buf


def generar_reporte_predicciones_futuras(data_cache, start_year, end_year):
    # Usar datos del data_cache
    df_boletos = data_cache['boletos']
    df_facturadetalles = data_cache['facturadetalles']
    df_facturas = data_cache['facturas']
    df_rutas = data_cache['rutas']

    # Unión de tablas con merge
    df = df_boletos.merge(df_facturadetalles, on='id_boleto', how='left')
    df = df.merge(df_facturas, on='id_factura', how='left')
    df = df.merge(df_rutas, on='id_ruta', how='left')

    # Procesamiento de fechas
    df['fecha'] = pd.to_datetime(df['fecha_doc'])
    df['year'] = df['fecha'].dt.year
    df['month'] = df['fecha'].dt.month

    # Agrupar por año, mes y ruta, contando la cantidad de boletos vendidos
    df_grouped = df.groupby(['year', 'month', 'nombre']).size().reset_index(name='count_boletos')

    # Preparación de datos para el modelo
    X = df_grouped[['year', 'month']]
    X['nombre'] = df_grouped['nombre'].astype('category').cat.codes
    y = df_grouped['count_boletos']

    scaler_X = MinMaxScaler()
    X_scaled = scaler_X.fit_transform(X)

    scaler_y = MinMaxScaler()
    y_scaled = scaler_y.fit_transform(y.values.reshape(-1, 1))

    # Cargar el modelo previamente entrenado
    model_path = "./modelo_boletos_por_ruta_lstm.h5"
    model = keras.models.load_model(model_path)

    # Hacer predicciones para los años especificados
    months_future = [[year, i, X['nombre'].iloc[j]] for year in range(start_year, end_year+1) for i in range(1, 13) for j in range(len(X['nombre'].unique()))]
    months_future_scaled = scaler_X.transform(months_future)
    months_future_scaled = months_future_scaled.reshape(months_future_scaled.shape[0], 1, months_future_scaled.shape[1])
    predictions_future_scaled = model.predict(months_future_scaled)

    # Revertir la escala de las predicciones
    predictions_future = scaler_y.inverse_transform(predictions_future_scaled)

    # Mostrar las predicciones para los años especificados
    df_pred_future = pd.DataFrame(months_future, columns=['year', 'month', 'nombre'])
    df_pred_future['nombre'] = df_grouped['nombre'].astype('category').cat.categories[df_pred_future['nombre']]
    df_pred_future['predicciones'] = predictions_future

    # Combinar datos históricos y predicciones
    df_combined = pd.concat([df_grouped, df_pred_future], ignore_index=True)

    # Número de rutas únicas para determinar el número de subplots
    num_rutas = df_combined['nombre'].unique().shape[0]

    # Crear una figura que contendrá todos los subplots
    fig, axes = plt.subplots(num_rutas, 1, figsize=(15, 6 * num_rutas))

    # En caso de que haya una sola ruta, axes no será un iterable
    if num_rutas == 1:
        axes = [axes]

    # Generar un gráfico para cada ruta
    for ax, (ruta, df_ruta) in zip(axes, df_combined.groupby('nombre')):
        ax.plot(df_ruta['year'].astype(str) + '-' + df_ruta['month'].astype(str), df_ruta['count_boletos'], label='Datos Históricos', marker='o')
        ax.plot(df_ruta['year'].astype(str) + '-' + df_ruta['month'].astype(str), df_ruta['predicciones'], label=f'Predicciones {start_year}-{end_year}', marker='x', color='red')
        ax.set_xticks(range(len(df_ruta)))
        ax.set_xticklabels(df_ruta['year'].astype(str) + '-' + df_ruta['month'].astype(str), rotation=45)
        ax.set_ylabel('Cantidad de Boletos Vendidos')
        ax.set_title(f'Ruta: {ruta}')
        ax.legend()
        ax.grid(True)

    plt.tight_layout()

    # Guardar la figura completa con todos los gráficos en un buffer de bytes
    buf = io.BytesIO()
    plt.savefig(buf, format="png")
    buf.seek(0)

    # Cerrar la figura para liberar memoria
    plt.close(fig)

    return buf


def generar_predicciones_ingresos_por_ruta(data_cache):
    # Usar datos del data_cache
    df_boletos = data_cache['boletos']
    df_facturadetalles = data_cache['facturadetalles']
    df_facturas = data_cache['facturas']
    df_rutas = data_cache['rutas']
    df_servicios = data_cache['servicios']
    df_horarios = data_cache['horarios']

    # Unión de tablas con merge especificando sufijos personalizados
    df = df_boletos.merge(df_facturadetalles, on='id_boleto', how='left', suffixes=('_boletos', '_facturadetalles'))
    df = df.merge(df_facturas, on='id_factura', how='left', suffixes=('_boletos', '_facturas'))
    df = df.merge(df_rutas, on='id_ruta', how='left', suffixes=('_boletos', '_rutas'))
    df = df.merge(df_servicios, on='id_servicio', how='left', suffixes=('_boletos', '_servicios'))
    df = df.merge(df_horarios, on='id_horario', how='left', suffixes=('_boletos', '_horarios'))

    # Procesamiento de fechas
    df['fecha'] = pd.to_datetime(df['fecha_doc'])
    df['year'] = df['fecha'].dt.year
    df['month'] = df['fecha'].dt.month

    # Agrupar por año, mes y ruta, sumando el total de ventas
    df_grouped = df.groupby(['year', 'month', 'nombre']).agg({'total': 'sum'}).reset_index()

    # Convertir la columna 'nombre' (ruta) a códigos numéricos
    df_grouped['nombre_code'] = df_grouped['nombre'].astype('category').cat.codes

    # Preparación de datos para el modelo
    X = df_grouped[['year', 'month', 'nombre_code']]
    y = df_grouped['total']

    scaler_X = MinMaxScaler()
    X_scaled = scaler_X.fit_transform(X)

    scaler_y = MinMaxScaler()
    y_scaled = scaler_y.fit_transform(y.values.reshape(-1, 1))

    # Remodelar los datos para que coincidan con la forma esperada por el modelo LSTM
    X_scaled = X_scaled.reshape(X_scaled.shape[0], 1, X_scaled.shape[1])

    # Cargar el modelo previamente entrenado
    model_path = "./modelo_ingresos_por_ruta_lstm.h5"
    model = keras.models.load_model(model_path)

    # Hacer predicciones sobre los meses históricos
    predictions_scaled = model.predict(X_scaled)

    # Revertir la escala de las predicciones
    predictions = scaler_y.inverse_transform(predictions_scaled)

    # Agregar las predicciones al dataframe agrupado
    df_grouped['predicciones'] = predictions

    # Número de rutas únicas para determinar el número de subplots
    num_rutas = df_grouped['nombre'].unique().shape[0]

    # Crear una figura que contendrá todos los subplots
    fig, axes = plt.subplots(num_rutas, 1, figsize=(15, 6 * num_rutas))

    # En caso de que haya una sola ruta, axes no será un iterable
    if num_rutas == 1:
        axes = [axes]

    # Generar un gráfico para cada ruta
    for ax, (ruta, df_ruta) in zip(axes, df_grouped.groupby('nombre')):
        ax.plot(df_ruta['year'].astype(str) + '-' + df_ruta['month'].astype(str), df_ruta['total'], label='Datos Históricos', marker='o')
        ax.plot(df_ruta['year'].astype(str) + '-' + df_ruta['month'].astype(str), df_ruta['predicciones'], label='Predicciones', marker='x', color='red')
        ax.set_xticks(range(len(df_ruta)))
        ax.set_xticklabels(df_ruta['year'].astype(str) + '-' + df_ruta['month'].astype(str), rotation=45)
        ax.set_ylabel('Total de Ingresos')
        ax.set_title(f'Ruta: {ruta}')
        ax.legend()
        ax.grid(True)

    plt.tight_layout()

    # Guardar la figura completa con todos los gráficos en un buffer de bytes
    buf = io.BytesIO()
    plt.savefig(buf, format="png")
    buf.seek(0)

    # Cerrar la figura para liberar memoria
    plt.close(fig)

    return buf


def generar_predicciones_ingresos_por_ruta_periodo(data_cache, start_year, end_year):
    # Usar datos del data_cache
    df_boletos = data_cache['boletos']
    df_facturadetalles = data_cache['facturadetalles']
    df_facturas = data_cache['facturas']
    df_rutas = data_cache['rutas']

    # Unión de tablas con merge
    df = df_boletos.merge(df_facturadetalles, on='id_boleto', how='left')
    df = df.merge(df_facturas, on='id_factura', how='left')
    df = df.merge(df_rutas, on='id_ruta', how='left')

    # Procesamiento de fechas
    df['fecha'] = pd.to_datetime(df['fecha_doc'])
    df['year'] = df['fecha'].dt.year
    df['month'] = df['fecha'].dt.month

    # Agrupar por año, mes y ruta, sumando los ingresos
    df_grouped = df.groupby(['year', 'month', 'nombre']).agg({'total': 'sum'}).reset_index()

    # Convertir la columna 'nombre' (ruta) a códigos numéricos
    df_grouped['nombre_code'] = df_grouped['nombre'].astype('category').cat.codes

    # Preparación de datos para el modelo
    X = df_grouped[['year', 'month', 'nombre_code']]
    y = df_grouped['total']

    scaler_X = MinMaxScaler()
    X_scaled = scaler_X.fit_transform(X)

    scaler_y = MinMaxScaler()
    y_scaled = scaler_y.fit_transform(y.values.reshape(-1, 1))

    # Cargar el modelo previamente entrenado
    model_path = "./modelo_ingresos_por_ruta_lstm.h5"
    model = keras.models.load_model(model_path)

    # Hacer predicciones para los años especificados
    months_future = [[year, i, X['nombre_code'].iloc[j]] for year in range(start_year, end_year+1) for i in range(1, 13) for j in range(len(X['nombre_code'].unique()))]
    months_future_scaled = scaler_X.transform(months_future)
    months_future_scaled = months_future_scaled.reshape(months_future_scaled.shape[0], 1, months_future_scaled.shape[1])
    predictions_future_scaled = model.predict(months_future_scaled)

    # Revertir la escala de las predicciones
    predictions_future = scaler_y.inverse_transform(predictions_future_scaled)

    # Mostrar las predicciones para los años especificados
    df_pred_future = pd.DataFrame(months_future, columns=['year', 'month', 'nombre_code'])
    df_pred_future['nombre'] = df_grouped['nombre'].astype('category').cat.categories[df_pred_future['nombre_code']]
    df_pred_future['predicciones'] = predictions_future

    # Combinar datos históricos y predicciones
    df_combined = pd.concat([df_grouped, df_pred_future], ignore_index=True)

    # Número de rutas únicas para determinar el número de subplots
    num_rutas = df_combined['nombre'].unique().shape[0]

    # Crear una figura que contendrá todos los subplots
    fig, axes = plt.subplots(num_rutas, 1, figsize=(15, 6 * num_rutas))

    # En caso de que haya una sola ruta, axes no será un iterable
    if num_rutas == 1:
        axes = [axes]

    # Generar un gráfico para cada ruta
    for ax, (ruta, df_ruta) in zip(axes, df_combined.groupby('nombre')):
        ax.plot(df_ruta['year'].astype(str) + '-' + df_ruta['month'].astype(str), df_ruta['total'], label='Datos Históricos', marker='o')
        ax.plot(df_ruta['year'].astype(str) + '-' + df_ruta['month'].astype(str), df_ruta['predicciones'], label=f'Predicciones {start_year}-{end_year}', marker='x', color='red')
        ax.set_xticks(range(len(df_ruta)))
        ax.set_xticklabels(df_ruta['year'].astype(str) + '-' + df_ruta['month'].astype(str), rotation=45)
        ax.set_ylabel('Total de Ingresos')
        ax.set_title(f'Ruta: {ruta}')
        ax.legend()
        ax.grid(True)

    plt.tight_layout()

    # Guardar la figura completa con todos los gráficos en un buffer de bytes
    buf = io.BytesIO()
    plt.savefig(buf, format="png")
    buf.seek(0)

    # Cerrar la figura para liberar memoria
    plt.close(fig)

    return buf

