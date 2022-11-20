const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let existenciaSchema = new Schema(
  {
    cantidad: {
      type: Number,
    },
    nombreProducto: {
      type: String,
    },
    laboratorio: {
      type: String,
    },
    vencimiento: {
      type: String,
    },
    lab: {
      type: String,
    },
    entrada: { // True if entrada, False if salida
      type: Boolean,
    },
  },
  {
    collection: "existencias",
  }
);

module.exports = mongoose.model("Existencia", existenciaSchema);
