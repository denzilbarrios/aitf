const mongoose = require("mongoose");

// Setup schema
const destinoSchema = mongoose.Schema({
  id_destino: {
    type: Number,
    required: true,
    primaryKey: true,
  },
  nombre: {
    type: String,
    required: true
  },
  nemonico: {
    type: String,
    required: true
  },
  km: {
    type: Number,
    required: true,
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

// Export Destino model
const Destino = (module.exports = mongoose.model("destino", destinoSchema));
module.exports.get = function (callback, limit) {
  Destino.find(callback).limit(limit);
};