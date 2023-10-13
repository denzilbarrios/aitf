// Import ruta model
Ruta = require("../models/ruta.model");

// Handle get all rutas
exports.index = function (req, res) {
  Ruta.get(function (err, rutas) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Rutas retrieved successfully",
      data: rutas
    });
  });
};

// Handle create ruta
exports.new = function (req, res) {
  var ruta = new Ruta();
  var rutaObj = req.body;
  Object.keys(rutaObj).forEach((key, index) => {
    ruta[key] = rutaObj[key];
  });

  // save the ruta and check for errors
  ruta.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "New ruta created!",
      data: ruta
    });
  });
};

// Handle view ruta info
exports.view = function (req, res) {
  Ruta.findById(req.params.ruta_id, function (err, ruta) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "Ruta details loading..",
      data: ruta
    });
  });
};

// Handle update ruta info
exports.update = function (req, res) {
  Ruta.findByIdAndUpdate(
    req.params.ruta_id,
    req.body,
    { new: true },
    function (err, ruta) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }

      // save the ruta and check for errors
      ruta.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Ruta Info updated",
          data: ruta
        });
      });
    }
  );
};

// Handle delete ruta
exports.delete = function (req, res) {
  Ruta.remove(
    {
      _id: req.params.ruta_id
    },
    function (err, ruta) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "Ruta deleted"
      });
    }
  );
};
