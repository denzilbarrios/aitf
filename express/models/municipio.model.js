const mongoose = require("mongoose");

// Setup schema
const municipioSchema = mongoose.Schema({

  id_municipio: {
    type: Number,
    required: true
  },
  id_depto: {
    type: Number,
    required: true
  },
  id_agc: {
    type: Number,
    required: true
  },
  municipio: {
    type: String,
    required: true
  },
  destino_express: {
    type: Boolean,
    default: false
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

// Export Municipio model
const Municipio = (module.exports = mongoose.model("municipio", municipioSchema));
module.exports.get = function (callback, limit) {
  Municipio.find(callback).limit(limit);
};
