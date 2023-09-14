const mongoose = require("mongoose");

// Setup schema
const rutas_tramosSchema = mongoose.Schema({
  id_rutas_tramos: {
    type: Number,
    required: true,
    primaryKey: true
  },
  id_ruta: {
    type: Number,
    required: true
  },
  id_parada_inicio: {
    type: Number,
    required: true
  },
  id_parada_fin: {
    type: Number,
    required: true
  },
  kilometraje: {
    type: Number,
    required: true
  },
  tiempo_estimado: {
    type: Number,
    required: true
  },
  activo: {
    type: Boolean,
    default: true
  }
});

// Export Rutas_tramos model
const Rutas_tramos = (module.exports = mongoose.model("rutas_tramos", rutas_tramosSchema));
