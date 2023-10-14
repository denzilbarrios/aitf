const mongoose = require("mongoose");

// Setup schema
const empresaSchema = mongoose.Schema({
  id_empresa: {
    type: Number,
    required: true,
    primaryKey: true,
  },
  razon_social: {
    type: String,
    required: true
  },
  nit: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  telefono: {
    type: Number,
    required: true,
    primaryKey: true
  },
  activo: {
    type: Boolean,
    default: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

// Export Empresa model
const Empresa = (module.exports = mongoose.model("empresa", empresaSchema));
module.exports.get = function (callback, limit) {
  Empresa.find(callback).limit(limit);
};