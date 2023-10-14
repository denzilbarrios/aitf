const mongoose = require("mongoose");

// Setup schema
const servicioSchema = mongoose.Schema({
  id_servicio: {
    type: Number,
    required: true,
    primaryKey: true,
  },
  descripcion: {
    type: String,
    required: true
  },
  precio: {
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

// Export Servicio model
const Servicio = (module.exports = mongoose.model("servicio", servicioSchema));
module.exports.get = function (callback, limit) {
  Servicio.find(callback).limit(limit);
};