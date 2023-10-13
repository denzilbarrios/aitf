// Import rutas_tramos model
RutasTramos = require("../models/rutas_tramos.model");

// Handle get all rutas_tramos
exports.index = function (req, res) {
  RutasTramos.get(function (err, rutas_tramos) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Rutas_tramos retrieved successfully",
      data: rutas_tramos
    });
  });
};

// Handle create rutas_tramos
exports.new = function (req, res) {
  var rutas_tramos = new RutasTramos();
  var rutas_tramosObj = req.body;
  Object.keys(rutas_tramosObj).forEach((key, index) => {
    rutas_tramos[key] = rutas_tramosObj[key];
  });

  // save the rutas_tramos and check for errors
  rutas_tramos.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "New rutas_tramos created!",
      data: rutas_tramos
    });
  });
};

// Handle view rutas_tramos info
exports.view = function (req, res) {
  RutasTramos.findById(req.params.rutas_tramos_id, function (err, rutas_tramos) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "Rutas_tramos details loading..",
      data: rutas_tramos
    });
  });
};

// Handle update rutas_tramos info
exports.update = function (req, res) {
  RutasTramos.findByIdAndUpdate(
    req.params.rutas_tramos_id,
    req.body,
    { new: true },
    function (err, rutas_tramos) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }

      // save the rutas_tramos and check for errors
      rutas_tramos.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Rutas_tramos Info updated",
          data: rutas_tramos
        });
      });
    }
  );
};

// Handle delete rutas_tramos
exports.delete = function (req, res) {
  RutasTramos.remove(
    {
      _id: req.params.rutas_tramos_id
    },
    function (err, rutas_tramos) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "Rutas_tramos deleted"
      });
    }
  );
};
