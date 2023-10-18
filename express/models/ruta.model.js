const mongoose = require("mongoose");

// Setup schema
const rutaSchema = mongoose.Schema({
  id_ruta: {
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
  id_origen: {
    type: Number,
    required: true
  },
  id_destino: {
    type: Number,
    required: true
  },
  id_servicio: {
    type: Number,
    required: true
  },
  no_bus: {
    type: String,
    require: true
  },
  id_piloto: {
    type: Number,
    required: true
  },
  id_asistente: {
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

// Export Ruta model
const Ruta = (module.exports = mongoose.model("ruta", rutaSchema));
module.exports.get = function (callback, limit) {
  Ruta.find(callback).limit(limit);
};