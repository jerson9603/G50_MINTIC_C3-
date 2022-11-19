let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Modelo Usuario
let usuarioSchema = require("../models/Usuario");

// CREAR Usuario
router.route("/crear-usuario").post((req, res, next) => {
  usuarioSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// LEER Usuario
router.route("/").get((req, res, next) => {
  usuarioSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Obtener UN Usuario
router.route("/obtener-usuario/:id").get((req, res, next) => {
  usuarioSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// ACTUALIZAR Usuario
router.route("/actualizar-usuario/:id").put((req, res, next) => {
  usuarioSchema.findByIdAndUpdate(
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
        console.log("Student updated successfully !");
      }
    }
  );
});

// BORRAR Usuario
router.route("/eliminar-usuario/:id").delete((req, res, next) => {
  usuarioSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
