// Import rutas_detalle model
RutasDetalle = require("../models/rutas_detalle.model");

// Handle get all rutas_detalles
exports.index = function (req, res) {
  RutasDetalle.get(function (err, rutas_detalles) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Rutas_detalles retrieved successfully",
      data: rutas_detalles
    });
  });
};

// Handle create rutas_detalle
exports.new = function (req, res) {
  var rutas_detalle = new RutasDetalle();
  var rutas_detalleObj = req.body;
  Object.keys(rutas_detalleObj).forEach((key, index) => {
    rutas_detalle[key] = rutas_detalleObj[key];
  });

  // save the rutas_detalle and check for errors
  rutas_detalle.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "New rutas_detalle created!",
      data: rutas_detalle
    });
  });
};

// Handle view rutas_detalle info
exports.view = function (req, res) {
  RutasDetalle.findById(req.params.rutas_detalle_id, function (err, rutas_detalle) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "Rutas_detalle details loading..",
      data: rutas_detalle
    });
  });
};

// Handle update rutas_detalle info
exports.update = function (req, res) {
  RutasDetalle.findByIdAndUpdate(
    req.params.rutas_detalle_id,
    req.body,
    { new: true },
    function (err, rutas_detalle) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }

      // save the rutas_detalle and check for errors
      rutas_detalle.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Rutas_detalle Info updated",
          data: rutas_detalle
        });
      });
    }
  );
};

// Handle delete rutas_detalle
exports.delete = function (req, res) {
  RutasDetalle.remove(
    {
      _id: req.params.rutas_detalle_id
    },
    function (err, rutas_detalle) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "Rutas_detalle deleted"
      });
    }
  );
};
