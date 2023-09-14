const mongoose = require("mongoose");

// Setup schema
const kilometrajeSchema = mongoose.Schema({
  id_kilometraje: {
    type: Number,
    required: true,
    primaryKey: true
  },
  inicialkm: {
    type: Number,
    required: true
  },
  finalkm: {
    type: Number,
    required: true
  },
  preciokm: {
    type: Number,
    required: true
  }
});

// Export Kilometraje model
const Kilometraje = (module.exports = mongoose.model("kilometraje", kilometrajeSchema));
