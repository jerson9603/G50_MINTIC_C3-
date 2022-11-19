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
    fechaVencimiento: {
      type: String,
    },
  },
  {
    collection: "existencias",
  }
);

module.exports = mongoose.model("Existencia", existenciaSchema);
