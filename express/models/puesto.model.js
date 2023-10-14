const mongoose = require("mongoose");

// Setup schema
const puestoSchema = mongoose.Schema({
  id_puesto: {
    type: Number,
    required: true,
    primaryKey: true,
  },
  descripcion: {
    type: String,
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

// Export Puesto model
const Puesto = (module.exports = mongoose.model("puesto", puestoSchema));
module.exports.get = function (callback, limit) {
  Puesto.find(callback).limit(limit);
};