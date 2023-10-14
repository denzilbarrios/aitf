const mongoose = require("mongoose");

// Setup schema
const facturaDetalleSchema = mongoose.Schema({
  id_facturaDetalle: {
    type: Number,
    required: true,
    primaryKey: true,
  },
  id_factura: {
    type: Number,
    required: true,
  },
  id_boleta: {
    type: Number,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  cantidad: {
    type: Number,
    required: true
  },
  precio_u: {
    type: Number,
    required: true,
  },
  subtotal: {
    type: Number,
    required: true,
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

// Export FacturaDetalle model
const FacturaDetalle = (module.exports = mongoose.model("facturaDetalle", facturaDetalleSchema));
module.exports.get = function (callback, limit) {
  FacturaDetalle.find(callback).limit(limit);
};