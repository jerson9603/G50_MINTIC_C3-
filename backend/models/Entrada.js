const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let entradaSchema = new Schema(
  {
    fechaEntrada: {
      type: Date,
      default: Date.now,
    },
    proveedorCliente: {
      type: String,
    },
    cantidad: {
      type: Number,
    },
    nombreProducto: {
      type: String,
    },
    vencimiento: {
      type: Date,
    },
    lab: {
      type: String,
    },
  },
  {
    collection: "entradas",
  }
);

module.exports = mongoose.model("Entrada", entradaSchema);
