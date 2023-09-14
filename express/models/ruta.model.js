const mongoose = require("mongoose");

// Setup schema
const rutaSchema = mongoose.Schema({
  id_ruta: {
    type: Number,
    required: true,
    primaryKey: true
  },
  id_origen: {
    type: Number,
    required: true
  },
  id_destino: {
    type: Number,
    required: true
  },
  id_empsa: {
    type: Number,
    default: null
  },
  id_servicio: {
    type: Number,
    default: null
  },
  frecuencia: {
    type: String,
    default: "DIARIO"
  },
  tiempo_estimado: {
    type: Number,
    default: 0
  },
  distancia: {
    type: Number,
    default: 0
  },
  precio: {
    type: Number,
    default: 0
  },
  activo: {
    type: Boolean,
    default: true
  }
});

// Export Ruta model
const Ruta = (module.exports = mongoose.model("ruta", rutaSchema));
