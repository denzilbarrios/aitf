const mongoose = require("mongoose");

// Setup schema
const facturaSchema = mongoose.Schema({
  id_factura: {
    type: Number,
    required: true,
    primaryKey: true,
  },
  id_serie: {
    type: Number,
    required: true
  },
  id_documento: {
    type: Number,
    required: true
  },
  id_usuario: {
    type: Number,
    required: true,
  },
  fecha_doc: {
    type: Date,
    default: Date.now
  },
  nit_cliente: {
    type: String,
    required: true
  },
  nombre_cliente: {
    type: String,
    required: true
  },
  direccion_cliente: {
    type: String,
    required: true
  },
  total: {
    type: Number,
    required: true
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

// Export Factura model
const Factura = (module.exports = mongoose.model("factura", facturaSchema));
module.exports.get = function (callback, limit) {
  Factura.find(callback).limit(limit);
};