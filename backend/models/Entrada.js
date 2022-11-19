const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let entradaSchema = new Schema(
  {
    fechaEntrada: {
      type: String,
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
      type: String,
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
