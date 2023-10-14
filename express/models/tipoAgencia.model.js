const mongoose = require("mongoose");

// Setup schema
const tipoAgenciaSchema = mongoose.Schema({
  id_tipoAgencia: {
    type: Number,
    required: true,
    primaryKey: true,
  },
  descripcion: {
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

// Export TipoAgencia model
const TipoAgencia = (module.exports = mongoose.model("tipoAgencia", tipoAgenciaSchema));
module.exports.get = function (callback, limit) {
  TipoAgencia.find(callback).limit(limit);
};