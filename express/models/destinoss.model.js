const mongoose = require("mongoose");

// Setup schema
const destinossSchema = mongoose.Schema({
  idDestinoss: {
    type: String,
    required: true,
    primaryKey: true
  },
  mnemonico: {
    type: String,
    default: null
  },
  nom_destinoss: {
    type: String,
    default: null
  }
});

// Export Destinos model
const Destinoss = (module.exports = mongoose.model("destinoss", destinossSchema));
