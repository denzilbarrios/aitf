from flask import Flask, jsonify, send_file, request
from pymongo import MongoClient
from flask_cors import CORS
from generador_reportes import *
from prediccion_reportes import *
import pandas as pd
import threading
import time
import os


app = Flask(__name__)
CORS(app)

# Variables para la caché
data_cache = {}

# Función para actualizar la caché de datos
def update_data_cache():
    # Configura la conexión a MongoDB utilizando las variables de entorno
    mongo_host = os.environ.get('MONGO_DB_HOST', 'localhost')
    mongo_port = int(os.environ.get('MONGO_DB_PORT', 27017))
    mongo_username = os.environ.get('MONGO_DB_USERNAME', 'admin-user')
    mongo_password = os.environ.get('MONGO_DB_PASSWORD', 'admin-password')

    # Crea la URI de conexión a MongoDB
    uri_conexion = f"mongodb://{mongo_username}:{mongo_password}@{mongo_host}:{mongo_port}"

    # Crea una instancia del cliente de MongoDB
    client = MongoClient(uri_conexion)

    # Accede a la base de datos que deseas utilizar
    db = client['mean-contacts']

    data_cache['boletos'] = pd.DataFrame(list(db.boletos.find()))
    data_cache['facturadetalles'] = pd.DataFrame(list(db.facturadetalles.find()))
    data_cache['facturas'] = pd.DataFrame(list(db.facturas.find()))
    data_cache['rutas'] = pd.DataFrame(list(db.rutas.find()))
    data_cache['servicios'] = pd.DataFrame(list(db.servicios.find()))
    data_cache['horarios'] = pd.DataFrame(list(db.horarios.find()))

    # Procesamiento de datos: Unión de tablas con merge
    df = data_cache['boletos'].merge(data_cache['facturadetalles'], on='id_boleto', how='left')
    df = df.merge(data_cache['facturas'], on='id_factura', how='left')
    df = df.merge(data_cache['rutas'], on='id_ruta', how='left', suffixes=('', '_rutas'))
    df = df.merge(data_cache['servicios'], on='id_servicio', how='left', suffixes=('', '_servicios'))
    df = df.merge(data_cache['horarios'], on='id_horario', how='left', suffixes=('', '_horarios'))

    data_cache['merged_data'] = df

@app.route('/apipy/update-data', methods=['POST'])
def update_data_endpoint():
    update_data_cache()
    return jsonify({"message": "Datos actualizados correctamente!"})

@app.route('/apipy/', methods=['GET'])
def get_data_raiz():
    # Aquí puedes realizar tu análisis y devolver los resultados
    return jsonify({"message": "Hello from Flask!"})

@app.route('/apipy/data', methods=['GET'])
def get_data():
    # Aquí puedes realizar tu análisis y devolver los resultados
    return jsonify({"message": "Hello from Flask!"})

@app.route('/apipy/reporte-ingresos-mensual-anual', methods=['GET'])
def get_ingreso_mensuales_anuales_reporte():
    buf = reporte_ventas_mensuales_anuales(data_cache)
    return send_file(buf, mimetype="image/png")

@app.route('/apipy/reporte-cantidad-mensual-anual', methods=['GET'])
def get_cantidad_mensuales_anuales_report():
    buf = reporte_cantidad_boletos_mensuales_anuales(data_cache)
    return send_file(buf, mimetype="image/png")

@app.route('/apipy/reporte-ventas-mensuales-ruta', methods=['GET'])
def get_ventas_mensuales_por_ruta():
    buf = reporte_ventas_mensuales_por_ruta(data_cache)
    return send_file(buf, mimetype="image/png")


@app.route('/apipy/reporte-ingresos-mensuales-ruta', methods=['GET'])
def get_ingresos_mensuales_por_ruta():
    buf = reporte_ingresos_mensuales_por_ruta(data_cache)
    return send_file(buf, mimetype="image/png")

@app.route('/apipy/ventas-por-dia-semana', methods=['GET'])
def get_ventas_por_dia_semana():
    buf = reporte_ventas_por_dia_semana(data_cache)
    return send_file(buf, mimetype="image/png")

@app.route('/apipy/promedio-ventas-por-dia-semana', methods=['GET'])
def get_promedio_ventas_por_dia_semana():
    buf = reporte_promedio_ventas_por_dia_semana(data_cache)
    return send_file(buf, mimetype="image/png")

@app.route('/apipy/top25-ventas-por-horario', methods=['GET'])
def get_top25_ventas_por_horario():
    buf = reporte_top25_ventas_por_horario(data_cache)
    return send_file(buf, mimetype="image/png")

@app.route('/apipy/top25-ingresos-por-horario', methods=['GET'])
def get_top25_ingresos_por_horario():
    buf = reporte_top25_ingresos_por_horario(data_cache)
    return send_file(buf, mimetype="image/png")

@app.route('/apipy/top25-horarios-promedio-diario', methods=['GET'])
def get_top25_horarios_promedio_diario():
    buf = reporte_top25_horarios_promedio_diario(data_cache)
    return send_file(buf, mimetype="image/png")


@app.route('/apipy/top25-horarios-promedio-diario-ingresos', methods=['GET'])
def get_top25_horarios_promedio_diario_ingresos():
    buf = reporte_top25_horarios_promedio_diario_ingresos(data_cache)
    return send_file(buf, mimetype="image/png")

@app.route('/apipy/reporte-ventas-trimestrales', methods=['GET'])
def get_ventas_trimestrales_reporte():
    buf = reporte_ventas_trimestrales(data_cache)
    return send_file(buf, mimetype="image/png")


@app.route('/apipy/reporte-ingresos-trimestrales', methods=['GET'])
def get_ingresos_trimestrales_reporte():
    buf = reporte_ingresos_trimestrales(data_cache)
    return send_file(buf, mimetype="image/png")

##### Predicciones

@app.route('/apipy/reporte-predicciones-ingresos', methods=['GET'])
def get_predicciones_ingresos__reporte():
    buf = reporte_predicciones_ingresos(data_cache)
    return send_file(buf, mimetype="image/png")

@app.route('/apipy/reporte-predicciones-futuras', methods=['GET'])
def get_predicciones_futuras_reporte():
    buf = reporte_predicciones_futuras(data_cache)
    return send_file(buf, mimetype="image/png")

@app.route('/apipy/reporte-predicciones-boletos', methods=['GET'])
def get_predicciones_boletos_reporte():
    buf = reporte_predicciones_boletos(data_cache)
    return send_file(buf, mimetype="image/png")

@app.route('/apipy/reporte-predicciones-por-periodo', methods=['GET'])
def get_predicciones_por_periodo_reporte():
    start_year = int(request.args.get('start_year', 2023))
    end_year = int(request.args.get('end_year', 2025))
    buf = reporte_predicciones_por_periodo(data_cache, start_year, end_year)
    ## .../reporte-predicciones-por-periodo?start_year=2024&end_year=2026
    return send_file(buf, mimetype="image/png")


@app.route('/apipy/reporte-predicciones-por-ruta', methods=['GET'])
def get_predicciones_por_ruta_reporte():
    # Generar el reporte
    buf = generar_reporte_predicciones_por_ruta(data_cache)
    # Retornar el reporte como imagen PNG
    return send_file(buf, mimetype="image/png")

@app.route('/apipy/predicciones-futuras-por-ruta-periodo', methods=['GET'])
def get_predicciones_futuras_por_ruta_reporte():
    start_year = request.args.get('start_year', default=2023, type=int)
    end_year = request.args.get('end_year', default=2025, type=int)
    
    buf = generar_reporte_predicciones_futuras(data_cache, start_year, end_year)
    
    buf.seek(0)
    return send_file(buf, mimetype="image/png")
    

@app.route('/apipy/predicciones-ingresos-por-ruta', methods=['GET'])
def get_predicciones_ingresos_por_ruta_reporte():
    # Generar el reporte
    buf = generar_predicciones_ingresos_por_ruta(data_cache)

    # Retornar el reporte como imagen PNG
    return send_file(buf, mimetype="image/png")


@app.route('/apipy/predicciones-ingresos-por-ruta-periodo', methods=['GET'])
def get_predicciones_ingresos_por_ruta_periodo_reporte():
    start_year = request.args.get('start_year', default=2023, type=int)
    end_year = request.args.get('end_year', default=2025, type=int)
    
    # Generar el reporte
    buf = generar_predicciones_ingresos_por_ruta_periodo(data_cache, start_year, end_year)
    
    buf.seek(0)
    return send_file(buf, mimetype="image/png")
    

def periodic_data_update():
    while True:
        update_data_cache()
        time.sleep(60)  # Esperar 60 segundos antes de la próxima actualización

if __name__ == '__main__':
    threading.Thread(target=periodic_data_update).start()  # Iniciar actualización periódica de datos en segundo plano
    app.run(host='0.0.0.0', port=5000)