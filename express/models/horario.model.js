const mongoose = require("mongoose");

// Setup schema
const horarioSchema = mongoose.Schema({
  id_horario: {
    type: Number,
    required: true,
    primaryKey: true,
  },
  hora: {
    type: String,
    match: /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])(:[0-5]?[0-9])?$/,
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

// Export Horario model
const Horario = (module.exports = mongoose.model("horario", horarioSchema));
module.exports.get = function (callback, limit) {
  Horario.find(callback).limit(limit);
};