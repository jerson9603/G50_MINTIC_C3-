let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");

require('dotenv').config({path: './.env'});

// Ruta de Express
const studentRoute = require("../backend/routes/usuario.route");
const entradaRoute = require("../backend/routes/entrada.route");
const salidaRoute = require("../backend/routes/salida.route");
const existenciaRoute = require("../backend/routes/existencia.route");
// Todo

// DB Config
const db = require("../backend/database/db").mongoURI;
// Connect to MongoDB from mLab
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB conectado exitosamente\n"))
  .catch((err) => console.log(err));

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/usuarios", studentRoute);
app.use("/entradas", entradaRoute);
app.use("/salidas", salidaRoute);
app.use("/existencias", existenciaRoute);
// todo

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("\nConectado al puerto", port + ": http://localhost:4000\n");
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
