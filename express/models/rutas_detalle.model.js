const mongoose = require("mongoose");

// Setup schema
const rutas_detalleSchema = mongoose.Schema({
  id_rutas_detalle: {
    type: Number,
    required: true,
    primaryKey: true
  },
  id_ruta: {
    type: Number,
    required: true
  },
  id_parada: {
    type: Number,
    required: true
  },
  orden: {
    type: Number,
    required: true
  },
  hora_salida: {
    type: String,
    required: true
  },
  hora_llegada: {
    type: String,
    required: true
  },
  tiempo_estancia: {
    type: Number,
    required: true
  },
  distancia: {
    type: Number,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  activo: {
    type: Boolean,
    default: true
  }
});

// Export Rutas_detalle model
const Rutas_detalle = (module.exports = mongoose.model("rutas_detalle", rutas_detalleSchema));
