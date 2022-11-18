let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Modelo Salida
let salidaSchema = require("../models/Salida");

// CREAR Salida
router.route("/crear-salida").post((req, res, next) => {
  salidaSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// LEER Salida
router.route("/").get((req, res, next) => {
  salidaSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Obtener UN Salida
router.route("/obtener-salida/:id").get((req, res, next) => {
  salidaSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// ACTUALIZAR Salida
router.route("/actualizar-salida/:id").put((req, res, next) => {
  salidaSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Salida updated successfully !");
      }
    }
  );
});

// BORRAR Salida
router.route("/eliminar-salida/:id").delete((req, res, next) => {
  salidaSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
