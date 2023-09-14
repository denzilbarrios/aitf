const mongoose = require("mongoose");

// Setup schema
const agenciadestinoSchema = mongoose.Schema({
  id_agenciadestino: {
    type: Number,
    required: true,
    primaryKey: true
  },
  id_agc: {
    type: Number,
    required: true
  },
  id_destino: {
    type: Number,
    required: true
  }
});

// Export Agenciadestino model
const Agenciadestino = (module.exports = mongoose.model("agenciadestino", agenciadestinoSchema));
