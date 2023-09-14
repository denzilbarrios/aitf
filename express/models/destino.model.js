const mongoose = require("mongoose");

// Setup schema
const destinoSchema = mongoose.Schema({
  id_destino: {
    type: Number,
    required: true,
    primaryKey: true
  },
  nom_destino: {
    type: String,
    required: true
  },
  id_mpioD: {
    type: Number,
    required: true
  },
  mnemonico: {
    type: String,
    required: true
  },
  destino_buses: {
    type: Boolean,
    required: true
  },
  destino_express: {
    type: Boolean,
    required: true
  },
  destino_agencia: {
    type: Boolean,
    required: true
  },
  recargo_especial: {
    type: Number,
    default: 0
  },
  recargo_plus: {
    type: Number,
    default: 0
  },
  recargo_clase: {
    type: Number,
    default: 0
  },
  id_agencia: {
    type: Number,
    default: null
  },
  activo: {
    type: Boolean,
    default: true
  }
});

// Export Destino model
const Destino = (module.exports = mongoose.model("destino", destinoSchema));
