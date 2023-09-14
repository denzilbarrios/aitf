const mongoose = require("mongoose");

// Setup schema
const municipioSchema = mongoose.Schema({
  id_municipio: {
    type: Number,
    required: true,
    primaryKey: true
  },
  id_departamento: {
    type: Number,
    required: true
  },
  codigo_dane: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  activo: {
    type: Boolean,
    default: true
  }
});

// Export Municipio model
const Municipio = (module.exports = mongoose.model("municipio", municipioSchema));
