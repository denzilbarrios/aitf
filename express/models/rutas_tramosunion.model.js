const mongoose = require("mongoose");

// Setup schema
const rutas_tramosunionSchema = mongoose.Schema({
  id_rutas_tramosunion: {
    type: Number,
    required: true,
    primaryKey: true
  },
  id_ruta_origen: {
    type: Number,
    required: true
  },
  id_ruta_destino: {
    type: Number,
    required: true
  },
  id_tramos_origen: {
    type: Number,
    required: true
  },
  id_tramos_destino: {
    type: Number,
    required: true
  },
  tiempo_estimado: {
    type: Number,
    required: true
  },
  kilometraje: {
    type: Number,
    required: true
  },
  activo: {
    type: Boolean,
    default: true
  }
});

// Export Rutas_tramosunion model
const Rutas_tramosunion = (module.exports = mongoose.model("rutas_tramosunion", rutas_tramosunionSchema));
