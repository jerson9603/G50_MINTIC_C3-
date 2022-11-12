const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    nombre: {
      type: String,
    },
    apellido: {
      type: String,
    },
    correo: {
      type: String,
    },
    contraseña: {
      type: String,
    },
  },
  {
    collection: "usuarios",
  }
);

module.exports = mongoose.model("Usuario", userSchema);
