const mongoose = require("mongoose");

// Setup schema
const boletoSchema = mongoose.Schema({
  id_boleto: {
    type: Number,
    required: true,
    primaryKey: true,
  },
  fecha_viaje: {
    type: Date,
    default: Date.now
  },
  id_horario: {
    type: Number,
    required: true
  },
  id_ruta: {
    type: Number,
    required: true
  },
  id_servicio: {
    type: Number,
    required: true
  },
  dni: {
    type: Number,
    required: true
  },
  nom_viajero: {
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

// Export Boleto model
const Boleto = (module.exports = mongoose.model("boleto", boletoSchema));
module.exports.get = function (callback, limit) {
  Boleto.find(callback).limit(limit);
};