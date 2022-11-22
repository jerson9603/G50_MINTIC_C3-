const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let existenciaSchema = new Schema(
  {
    proveedorCliente: {
      type: String,
    },
    cantidad: {
      type: Number,
    },
    nombreProducto: {
      type: String,
    },
    lab: {
      type: String,
    },
  },
  {
    collection: "existencias",
  }
);

module.exports = mongoose.model("Existencia", existenciaSchema);
