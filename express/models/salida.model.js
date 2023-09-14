const mongoose = require("mongoose");

// Setup schema
const salidaSchema = mongoose.Schema({
  id_salida: {
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
  hora: {
    type: String,
    required: true
  },
  activo: {
    type: Boolean,
    default: true
  }
});

// Export Salida model
const Salida = (module.exports = mongoose.model("salida", salidaSchema));
