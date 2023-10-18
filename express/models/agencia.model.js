const mongoose = require("mongoose");

// Setup schema
const agenciaSchema = mongoose.Schema({
  id_agencia: {
    type: Number,
    required: true,
    primaryKey: true,
  },
  nom_agc: {
    type: String,
    required: true
  },
  dire_agc: {
    type: String,
    required: true
  },
  tel_agc: {
    type: Number,
    required: true
  },
  contact1_agc: {
    type: String,
    default: null,
  },
  contact2_agc: {
    type: String,
    default: null,
  },
  id_destino: {
    type: Number,
    required: true
  },
  nombre_comercial: {
    type: String,
    required: true
  },
  id_tipoAgencia: {
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

// Export Agencia model
const Agencia = (module.exports = mongoose.model("agencia", agenciaSchema));
module.exports.get = function (callback, limit) {
  Agencia.find(callback).limit(limit);
};