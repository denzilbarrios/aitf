const mongoose = require("mongoose");

// Setup schema
const serieSchema = mongoose.Schema({
  id_serie: {
    type: Number,
    required: true,
    primaryKey: true,
  },
  descripcion: {
    type: String,
    required: true
  },
  serie: {
    type: String,
    required: true
  },
  correlativo: {
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

// Export Serie model
const Serie = (module.exports = mongoose.model("serie", serieSchema));
module.exports.get = function (callback, limit) {
  Serie.find(callback).limit(limit);
};