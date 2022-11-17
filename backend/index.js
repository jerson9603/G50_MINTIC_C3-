let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");

// Ruta de Express
const studentRoute = require("../backend/routes/usuario.route");

// DB Config
const db = require("../backend/database/db").mongoURI;
// Connect to MongoDB from mLab
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB conectado exitosamente"))
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

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Conectado al puerto " + port);
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
