import pandas as pd
from pymongo import MongoClient
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from tensorflow import keras
from sklearn.metrics import mean_absolute_error


# Crear la cadena de conexión
uri_conexion= f"mongodb://admin-user:admin-password@aitf-litegua.barysa.com"

# Conectar al servidor
client = MongoClient(uri_conexion)

# Conectar a la base de datos
db = client["mean-contacts"]


# Enumerar todas las colecciones en la base de datos
#collections = db.list_collection_names()
#print(collections)


# 2. Extracción de datos
df_factura = pd.DataFrame(list(db.facturas.find()))
df_detalle = pd.DataFrame(list(db.facturadetalles.find()))
# ... extrae otras colecciones según sea necesario ...

# 3. Preprocesamiento de datos
df = pd.merge(df_factura, df_detalle, on='id_factura', how='inner')
df['fecha_doc'] = (pd.to_datetime(df['fecha_doc']) - pd.Timestamp("2023-01-01")).dt.days
le = LabelEncoder()
df['description'] = le.fit_transform(df['description'])
X = df[['fecha_doc', 'description']]  # Agrega otras características relevantes
y = df['total']

# 4. Construcción y entrenamiento del modelo
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = keras.Sequential([
    keras.layers.Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
    keras.layers.Dense(32, activation='relu'),
    keras.layers.Dense(1)
])
model.compile(optimizer='adam', loss='mean_squared_error')
model.fit(X_train, y_train, epochs=50, batch_size=32, validation_data=(X_test, y_test))

# 5. Evaluación del modelo
y_pred = model.predict(X_test)
mae = mean_absolute_error(y_test, y_pred)
print(f"MAE: {mae}")
