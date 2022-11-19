let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Modelo Entrada
let entradaSchema = require("../models/Entrada");

// CREAR Entrada
router.route("/crear-entrada").post((req, res, next) => {
  entradaSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// LEER Entrada
router.route("/").get((req, res, next) => {
  entradaSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Obtener UN Entrada
router.route("/obtener-entrada/:id").get((req, res, next) => {
  entradaSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// ACTUALIZAR Entrada
router.route("/actualizar-entrada/:id").put((req, res, next) => {
  entradaSchema.findByIdAndUpdate(
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
        console.log("Entrada updated successfully !");
      }
    }
  );
});

// BORRAR Entrada
router.route("/eliminar-entrada/:id").delete((req, res, next) => {
  entradaSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
