let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Modelo Existencia
let existenciaSchema = require("../models/Existencia");

// CREAR Existencia
router.route("/crear-existencia").post((req, res, next) => {
  existenciaSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// LEER Existencia
router.route("/").get((req, res, next) => {
  existenciaSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Obtener UN Existencia
router.route("/obtener-existencia/:id").get((req, res, next) => {
  existenciaSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// ACTUALIZAR Existencia
router.route("/actualizar-existencia/:id").put((req, res, next) => {
  existenciaSchema.findByIdAndUpdate(
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
        console.log("Existencia updated successfully !");
      }
    }
  );
});

// BORRAR Existencia
router.route("/eliminar-existencia/:id").delete((req, res, next) => {
  existenciaSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
