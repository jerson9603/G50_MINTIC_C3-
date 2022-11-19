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
      unique: true,
      required: true,
    },
    contraseña: {
      type: String,
      required: true,
    },
  },
  {
    collection: "usuarios",
  }
);

module.exports = mongoose.model("Usuario", userSchema);
