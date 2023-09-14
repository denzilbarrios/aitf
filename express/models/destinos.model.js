const mongoose = require("mongoose");

// Setup schema
const destinosSchema = mongoose.Schema({
  idDestino: {
    type: String,
    required: true,
    primaryKey: true
  },
  mnemonico: {
    type: String,
    default: null
  },
  nom_destino: {
    type: String,
    default: null
  }
});

// Export Destinos model
const Destinos = (module.exports = mongoose.model("destinos", destinosSchema));
