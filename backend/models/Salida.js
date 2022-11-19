const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let salidaSchema = new Schema(
  {
    fechaSalida: {
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
    collection: "salidas",
  }
);

module.exports = mongoose.model("Salida", salidaSchema);
