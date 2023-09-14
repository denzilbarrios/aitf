const mongoose = require("mongoose");

// Setup schema
const rutas_puntos_enlaceSchema = mongoose.Schema({
  id_rutas_puntos_enlace: {
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
  id_parada_enlace: {
    type: Number,
    required: true
  },
  orden: {
    type: Number,
    required: true
  },
  tiempo_estancia: {
    type: Number,
    required: true
  },
  activo: {
    type: Boolean,
    default: true
  }
});

// Export Rutas_puntos_enlace model
const Rutas_puntos_enlace = (module.exports = mongoose.model("rutas_puntos_enlace", rutas_puntos_enlaceSchema));
