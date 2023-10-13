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

// Export Kilometraje model
const Kilometraje = (module.exports = mongoose.model("kilometraje", kilometrajeSchema));
module.exports.get = function (callback, limit) {
  Kilometraje.find(callback).limit(limit);
};