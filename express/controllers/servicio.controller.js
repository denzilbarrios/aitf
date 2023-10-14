// Import servicio model
Servicio = require("../models/servicio.model");

// Handle get all servicios
exports.index = function (req, res) {
  Servicio.get(function (err, servicios) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Servicios retrieved successfully",
      data: servicios
    });
  });
};

// Handle create servicio
exports.new = function (req, res) {
  var servicio = new Servicio();
  var servicioObj = req.body;
  Object.keys(servicioObj).forEach((key, index) => {
    servicio[key] = servicioObj[key];
  });

  // save the servicio and check for errors
  servicio.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "New servicio created!",
      data: servicio
    });
  });
};

// Handle view servicio info
exports.view = function (req, res) {
  Servicio.findById(req.params.servicio_id, function (err, servicio) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "Servicio details loading..",
      data: servicio
    });
  });
};

// Handle update servicio info
exports.update = function (req, res) {
  Servicio.findByIdAndUpdate(
    req.params.servicio_id,
    req.body,
    { new: true },
    function (err, servicio) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }

      // save the servicio and check for errors
      servicio.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Servicio Info updated",
          data: servicio
        });
      });
    }
  );
};

// Handle delete servicio
exports.delete = function (req, res) {
  Servicio.remove(
    {
      _id: req.params.servicio_id
    },
    function (err, servicio) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "Servicio deleted"
      });
    }
  );
};
