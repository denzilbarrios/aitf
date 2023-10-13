// Import rutas_puntos_enlace model
RutasPuntosEnlace = require("../models/rutas_puntos_enlace.model");

// Handle get all rutas_puntos_enlace
exports.index = function (req, res) {
  RutasPuntosEnlace.get(function (err, rutas_puntos_enlaces) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Rutas_puntos_enlaces retrieved successfully",
      data: rutas_puntos_enlaces
    });
  });
};

// Handle create rutas_puntos_enlace
exports.new = function (req, res) {
  var rutas_puntos_enlace = new RutasPuntosEnlace();
  var rutas_puntos_enlaceObj = req.body;
  Object.keys(rutas_puntos_enlaceObj).forEach((key, index) => {
    rutas_puntos_enlace[key] = rutas_puntos_enlaceObj[key];
  });

  // save the rutas_puntos_enlace and check for errors
  rutas_puntos_enlace.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "New rutas_puntos_enlace created!",
      data: rutas_puntos_enlace
    });
  });
};

// Handle view rutas_puntos_enlace info
exports.view = function (req, res) {
  RutasPuntosEnlace.findById(req.params.rutas_puntos_enlace_id, function (err, rutas_puntos_enlace) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "Rutas_puntos_enlace details loading..",
      data: rutas_puntos_enlace
    });
  });
};

// Handle update rutas_puntos_enlace info
exports.update = function (req, res) {
  RutasPuntosEnlace.findByIdAndUpdate(
    req.params.rutas_puntos_enlace_id,
    req.body,
    { new: true },
    function (err, rutas_puntos_enlace) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }

      // save the rutas_puntos_enlace and check for errors
      rutas_puntos_enlace.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Rutas_puntos_enlace Info updated",
          data: rutas_puntos_enlace
        });
      });
    }
  );
};

// Handle delete rutas_puntos_enlace
exports.delete = function (req, res) {
  RutasPuntosEnlace.remove(
    {
      _id: req.params.rutas_puntos_enlace_id
    },
    function (err, rutas_puntos_enlace) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "Rutas_puntos_enlace deleted"
      });
    }
  );
};
