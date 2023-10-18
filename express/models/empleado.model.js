const mongoose = require("mongoose");

// Setup schema
const empleadoSchema = mongoose.Schema({
  id_empleado: {
    type: Number,
    required: true,
    primaryKey: true,
  },
  nombres: {
    type: String,
    required: true
  },
  id_puesto: {
    type: Number,
    required: true,
    primaryKey: true,
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

// Export Empleado model
const Empleado = (module.exports = mongoose.model("empleado", empleadoSchema));
module.exports.get = function (callback, limit) {
  Empleado.find(callback).limit(limit);
};