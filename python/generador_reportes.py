import pandas as pd
import seaborn as sns
import calendar
import matplotlib.pyplot as plt
import io
from io import BytesIO
from PIL import Image, ImageDraw
from matplotlib.ticker import FuncFormatter


def reporte_ventas_mensuales_anuales(data_cache):
    # Usar datos del data_cache
    df_facturas = data_cache['facturas']
    df_facturadetalles = data_cache['facturadetalles']
    df_boletos = data_cache['boletos']

    df = df_facturas.merge(df_facturadetalles, on='id_factura', how='left')
    df = df.merge(df_boletos, on='id_boleto', how='left')

    df['fecha_doc'] = pd.to_datetime(df['fecha_doc'])
    df['year'] = df['fecha_doc'].dt.year
    df['month'] = df['fecha_doc'].dt.month

    df_grouped = df.groupby(['year', 'month']).agg({'total': 'sum'}).reset_index()
    df_grouped['año-mes'] = df_grouped['year'].astype(str) + '-' + df_grouped['month'].astype(str).str.zfill(2)

    plt.figure(figsize=(12, 6))
    sns.lineplot(x='año-mes', y='total', data=df_grouped)
    plt.title("Ventas Mensuales Anuales")
    plt.xlabel('Año-Mes')
    plt.ylabel('Total de Venta (Q)')
    plt.xticks(rotation=45)
    plt.tight_layout()

    buf = io.BytesIO()
    plt.savefig(buf, format="png")
    buf.seek(0)
    
    return buf

def reporte_cantidad_boletos_mensuales_anuales(data_cache):
    # Usar datos del data_cache
    df_facturadetalles = data_cache['facturadetalles']
    df_facturas = data_cache['facturas']
    df_boletos = data_cache['boletos']

    df = df_facturas.merge(df_facturadetalles, on='id_factura', how='left')
    df = df.merge(df_boletos, on='id_boleto', how='left')

    # Asegurarse de que 'fecha_doc' es de tipo datetime
    df['fecha_doc'] = pd.to_datetime(df['fecha_doc'])
    df['year'] = df['fecha_doc'].dt.year
    df['month'] = df['fecha_doc'].dt.month

    df_grouped = df.groupby(['year', 'month']).agg({'cantidad': 'sum'}).reset_index()
    df_grouped = df_grouped.sort_values(by=['year', 'month'])
    df_grouped['año-mes'] = df_grouped['year'].astype(str) + '-' + df_grouped['month'].astype(str).str.zfill(2)

    plt.figure(figsize=(12, 6))
    sns.lineplot(x='año-mes', y='cantidad', data=df_grouped)
    plt.title("Cantidad de Boletos Mensuales por Año")
    plt.xlabel('Año-Mes')
    plt.ylabel('Cantidad de Boletos')
    plt.xticks(rotation=45)
    plt.tight_layout()

    buf = io.BytesIO()
    plt.savefig(buf, format="png")
    buf.seek(0)
    
    return buf

def reporte_ventas_mensuales_por_ruta(data_cache):
    # Usar datos del data_cache
    df_boletos = data_cache['boletos']
    df_facturadetalles = data_cache['facturadetalles']
    df_facturas = data_cache['facturas']
    df_rutas = data_cache['rutas']

    df = df_boletos.merge(df_facturadetalles, on='id_boleto', how='left')
    df = df.merge(df_facturas, on='id_factura', how='left')
    df = df.merge(df_rutas, on='id_ruta', how='left')

    # Asegurarse de que 'fecha_doc' es de tipo datetime
    df['fecha_doc'] = pd.to_datetime(df['fecha_doc'])
    df['year'] = df['fecha_doc'].dt.year
    df['month'] = df['fecha_doc'].dt.month

    df_grouped = df.groupby(['year', 'month', 'nombre']).size().reset_index(name='cantidad_boletos')
    df_grouped = df_grouped.sort_values(by=['year', 'month', 'cantidad_boletos'], ascending=[True, True, False])
    df_grouped['año-mes'] = df_grouped['year'].astype(str) + '-' + df_grouped['month'].astype(str).str.zfill(2)

    plt.figure(figsize=(15, 7))
    sns.lineplot(x='año-mes', y='cantidad_boletos', hue='nombre', data=df_grouped, marker='o')
    plt.title("Ventas Mensuales de Boletos por Ruta")
    plt.xlabel('Año-Mes')
    plt.ylabel('Cantidad de Boletos Vendidos')
    plt.xticks(rotation=45)
    plt.legend(title='Ruta')
    plt.tight_layout()

    buf = io.BytesIO()
    plt.savefig(buf, format="png")
    buf.seek(0)
    
    return buf

def reporte_ingresos_mensuales_por_ruta(data_cache):
    # Usar datos del data_cache
    df_boletos = data_cache['boletos']
    df_facturadetalles = data_cache['facturadetalles']
    df_facturas = data_cache['facturas']
    df_rutas = data_cache['rutas']

    df = df_boletos.merge(df_facturadetalles, on='id_boleto', how='left')
    df = df.merge(df_facturas, on='id_factura', how='left')
    df = df.merge(df_rutas, on='id_ruta', how='left')

    # Asegurarse de que 'fecha_doc' es de tipo datetime
    df['fecha_doc'] = pd.to_datetime(df['fecha_doc'])
    df['year'] = df['fecha_doc'].dt.year
    df['month'] = df['fecha_doc'].dt.month

    df_grouped = df.groupby(['year', 'month', 'nombre'])['total'].sum().reset_index()
    df_grouped = df_grouped.sort_values(by=['year', 'month', 'total'], ascending=[True, True, False])
    df_grouped['año-mes'] = df_grouped['year'].astype(str) + '-' + df_grouped['month'].astype(str).str.zfill(2)

    # Formato para el eje y
    def currency_formatter(x, pos):
        return 'Q{:,.0f}'.format(x)

    formatter = FuncFormatter(currency_formatter)

    plt.figure(figsize=(15, 7))
    sns.lineplot(x='año-mes', y='total', hue='nombre', data=df_grouped, marker='o')
    plt.title("Ingresos Mensuales por Ruta")
    plt.xlabel('Año-Mes')
    plt.ylabel('Ingresos Totales en Q')
    plt.gca().yaxis.set_major_formatter(formatter) # Ajustar formato del eje y
    plt.xticks(rotation=45)
    plt.legend(title='Ruta')
    plt.tight_layout()

    buf = io.BytesIO()
    plt.savefig(buf, format="png")
    buf.seek(0)
    
    return buf


def reporte_ventas_por_dia_semana(data_cache):
    df_boletos = data_cache['boletos']
    df_facturadetalles = data_cache['facturadetalles']
    df_facturas = data_cache['facturas']

    df = df_boletos.merge(df_facturadetalles, on='id_boleto', how='left')
    df = df.merge(df_facturas, on='id_factura', how='left')

    df['dayOfWeek'] = pd.to_datetime(df['fecha_doc']).dt.dayofweek + 1

    days_of_week = {
        1: "Domingo",
        2: "Lunes",
        3: "Martes",
        4: "Miércoles",
        5: "Jueves",
        6: "Viernes",
        7: "Sábado"
    }

    grouped_count = df.groupby('dayOfWeek').size().reset_index(name='cantidad_boletos')
    grouped_count['dia_semana'] = grouped_count['dayOfWeek'].map(days_of_week)

    plt.figure(figsize=(10, 6))
    sns.barplot(x='dia_semana', y='cantidad_boletos', data=grouped_count, palette="viridis")
    plt.title("Ventas de Boletos por Día de la Semana")
    plt.xlabel('Día de la Semana')
    plt.ylabel('Cantidad de Boletos Vendidos')
    plt.tight_layout()

    buf = io.BytesIO()
    plt.savefig(buf, format="png")
    buf.seek(0)
    
    return buf

def reporte_promedio_ventas_por_dia_semana(data_cache):
    df_boletos = data_cache['boletos']
    df_facturadetalles = data_cache['facturadetalles']
    df_facturas = data_cache['facturas']

    df = df_boletos.merge(df_facturadetalles, on='id_boleto', how='left')
    df = df.merge(df_facturas, on='id_factura', how='left')

    df['dayOfWeek'] = pd.to_datetime(df['fecha_doc']).dt.dayofweek + 1

    days_of_week = {
        1: "Domingo",
        2: "Lunes",
        3: "Martes",
        4: "Miércoles",
        5: "Jueves",
        6: "Viernes",
        7: "Sábado"
    }

    grouped_day_date = df.groupby(['dayOfWeek', 'fecha_doc']).size().reset_index(name='cantidad_boletos')
    grouped_avg = grouped_day_date.groupby('dayOfWeek')['cantidad_boletos'].mean().reset_index()
    grouped_avg['dia_semana'] = grouped_avg['dayOfWeek'].map(days_of_week)

    plt.figure(figsize=(10, 6))
    sns.barplot(x='dia_semana', y='cantidad_boletos', data=grouped_avg, palette="viridis")
    plt.title("Promedio de Boletos Vendidos por Día de la Semana")
    plt.xlabel('Día de la Semana')
    plt.ylabel('Promedio de Boletos Vendidos')
    plt.tight_layout()

    buf = io.BytesIO()
    plt.savefig(buf, format="png")
    buf.seek(0)
    
    return buf

def reporte_top25_ventas_por_horario(data_cache):
    df_boletos = data_cache['boletos']
    df_horarios = data_cache['horarios']

    df = df_boletos.merge(df_horarios, on='id_horario', how='left')
    df_grouped = df.groupby('hora').agg({'id_boleto': 'count'}).reset_index()
    df_grouped = df_grouped.rename(columns={'id_boleto': 'cantidad_boletos'})
    df_grouped = df_grouped.sort_values(by='cantidad_boletos', ascending=False)
    df_top25 = df_grouped.head(25)

    plt.figure(figsize=(12, 7))
    sns.barplot(x='hora', y='cantidad_boletos', data=df_top25, palette="magma")
    plt.title("Top 25 Horarios con Mayor Venta de Boletos")
    plt.xlabel('Horario')
    plt.ylabel('Cantidad de Boletos Vendidos')
    plt.xticks(rotation=45)
    plt.tight_layout()

    buf = io.BytesIO()
    plt.savefig(buf, format="png")
    buf.seek(0)
    
    return buf

def reporte_top25_ingresos_por_horario(data_cache):
    df_boletos = data_cache['boletos']
    df_horarios = data_cache['horarios']
    df_facturadetalles = data_cache['facturadetalles']

    df = df_boletos.merge(df_horarios, on='id_horario', how='left')
    df = df.merge(df_facturadetalles, on='id_boleto', how='left')

    df_grouped = df.groupby('hora').agg({'subtotal': 'sum'}).reset_index()
    df_grouped = df_grouped.sort_values(by='subtotal', ascending=False)
    df_top25 = df_grouped.head(25)

    plt.figure(figsize=(12, 7))
    sns.barplot(x='hora', y='subtotal', data=df_top25, palette="magma")
    plt.title("Top 25 Horarios con Mayor Ingresos en Quetzales")
    plt.xlabel('Horario')
    plt.ylabel('Ingresos Totales (Q.)')
    plt.xticks(rotation=45)
    plt.tight_layout()

    buf = io.BytesIO()
    plt.savefig(buf, format="png")
    buf.seek(0)
    
    return buf

def reporte_top25_horarios_promedio_diario(data_cache):
    df_boletos = data_cache['boletos']
    df_horarios = data_cache['horarios']

    df = df_boletos.merge(df_horarios, on='id_horario', how='left')

    df['fecha'] = pd.to_datetime(df['fecha_viaje'])
    df['year'] = df['fecha'].dt.year
    df['month'] = df['fecha'].dt.month
    df['day'] = df['fecha'].dt.day

    df_grouped = df.groupby(['year', 'month', 'day', 'hora']).size().reset_index(name='cantidad_boletos')
    df_grouped_avg = df_grouped.groupby('hora').agg({'cantidad_boletos': 'mean'}).reset_index()
    df_top25 = df_grouped_avg.nlargest(25, 'cantidad_boletos')

    plt.figure(figsize=(15, 7))
    sns.barplot(x='hora', y='cantidad_boletos', data=df_top25, palette="magma")
    plt.title("Top 25 Horarios Más Vendidos (Promedio Diario)")
    plt.xlabel('Horario')
    plt.ylabel('Promedio Diario de Boletos Vendidos')
    plt.xticks(rotation=45)
    plt.tight_layout()

    buf = io.BytesIO()
    plt.savefig(buf, format="png")
    buf.seek(0)
    
    return buf

def reporte_top25_horarios_promedio_diario_ingresos(data_cache):
    df_boletos = data_cache['boletos']
    df_horarios = data_cache['horarios']
    df_facturadetalles = data_cache['facturadetalles']

    df = df_boletos.merge(df_horarios, on='id_horario', how='left').merge(df_facturadetalles, on='id_boleto', how='left')

    df['fecha'] = pd.to_datetime(df['fecha_viaje'])
    df['year'] = df['fecha'].dt.year
    df['month'] = df['fecha'].dt.month
    df['day'] = df['fecha'].dt.day

    df_grouped = df.groupby(['year', 'month', 'day', 'hora']).agg({'subtotal': 'sum'}).reset_index()
    df_grouped_avg = df_grouped.groupby('hora').agg({'subtotal': 'mean'}).reset_index()
    df_top25 = df_grouped_avg.nlargest(25, 'subtotal')

    plt.figure(figsize=(15, 7))
    sns.barplot(x='hora', y='subtotal', data=df_top25, palette="magma")
    plt.title("Top 25 Horarios con Mayor Ingreso (Promedio Diario en Q.)")
    plt.xlabel('Horario')
    plt.ylabel('Promedio Diario de Ingresos en Quetzales')
    plt.xticks(rotation=45)
    plt.tight_layout()

    buf = io.BytesIO()
    plt.savefig(buf, format="png")
    buf.seek(0)
    
    return buf

def reporte_ventas_trimestrales(data_cache):
    df_boletos = data_cache['boletos']

    # Función para determinar el trimestre basado en el mes
    def get_trimester(month):
        if month <= 3:
            return 1
        elif month <= 6:
            return 2
        elif month <= 9:
            return 3
        else:
            return 4

    # Procesamiento de datos con pandas
    df_boletos['fecha'] = pd.to_datetime(df_boletos['fecha_viaje'])
    df_boletos['year'] = df_boletos['fecha'].dt.year
    df_boletos['trimester'] = df_boletos['fecha'].dt.month.apply(get_trimester)

    df_grouped = df_boletos.groupby(['year', 'trimester']).size().reset_index(name='cantidad_boletos')
    df_grouped['año-trimestre'] = df_grouped['year'].astype(str) + '-T' + df_grouped['trimester'].astype(str)

    # Crear la gráfica con Seaborn
    plt.figure(figsize=(12, 6))
    sns.lineplot(x='año-trimestre', y='cantidad_boletos', data=df_grouped, marker="o")
    plt.title("Ventas de Boletos por Trimestre")
    plt.xlabel('Año-Trimestre')
    plt.ylabel('Cantidad de Boletos Vendidos')
    plt.xticks(rotation=45)
    plt.tight_layout()

    buf = io.BytesIO()
    plt.savefig(buf, format="png")
    buf.seek(0)

    return buf

def reporte_ingresos_trimestrales(data_cache):
    df = data_cache['merged_data']

    # Función para determinar el trimestre basado en el mes
    def get_trimester(month):
        if month <= 3:
            return 1
        elif month <= 6:
            return 2
        elif month <= 9:
            return 3
        else:
            return 4

    # Procesamiento de datos con pandas
    df['fecha'] = pd.to_datetime(df['fecha_viaje'])
    df['year'] = df['fecha'].dt.year
    df['trimester'] = df['fecha'].dt.month.apply(get_trimester)
    df_grouped = df.groupby(['year', 'trimester']).agg({'subtotal': 'sum'}).reset_index()
    df_grouped['año-trimestre'] = df_grouped['year'].astype(str) + '-T' + df_grouped['trimester'].astype(str)

    # Crear la gráfica con Seaborn
    plt.figure(figsize=(12, 6))
    sns.lineplot(x='año-trimestre', y='subtotal', data=df_grouped, marker="o")
    plt.title("Ingresos por Trimestre en Quetzales")
    plt.xlabel('Año-Trimestre')
    plt.ylabel('Ingresos en Q.')
    plt.xticks(rotation=45)
    plt.tight_layout()

    buf = io.BytesIO()
    plt.savefig(buf, format="png")
    buf.seek(0)

    return buf
