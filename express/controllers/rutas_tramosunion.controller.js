// Import rutas_tramosunion model
RutasTramosUnion = require("../models/rutas_tramosunion.model");

// Handle get all rutas_tramosunion
exports.index = function (req, res) {
  RutasTramosUnion.get(function (err, rutas_tramosunion) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Rutas_tramosunion retrieved successfully",
      data: rutas_tramosunion
    });
  });
};

// Handle create rutas_tramosunion
exports.new = function (req, res) {
  var rutas_tramosunion = new RutasTramosUnion();
  var rutas_tramosunionObj = req.body;
  Object.keys(rutas_tramosunionObj).forEach((key, index) => {
    rutas_tramosunion[key] = rutas_tramosunionObj[key];
  });

  // save the rutas_tramosunion and check for errors
  rutas_tramosunion.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "New rutas_tramosunion created!",
      data: rutas_tramosunion
    });
  });
};

// Handle view rutas_tramosunion info
exports.view = function (req, res) {
  RutasTramosUnion.findById(req.params.rutas_tramosunion_id, function (err, rutas_tramosunion) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "Rutas_tramosunion details loading..",
      data: rutas_tramosunion
    });
  });
};

// Handle update rutas_tramosunion info
exports.update = function (req, res) {
  RutasTramosUnion.findByIdAndUpdate(
    req.params.rutas_tramosunion_id,
    req.body,
    { new: true },
    function (err, rutas_tramosunion) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }

      // save the rutas_tramosunion and check for errors
      rutas_tramosunion.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Rutas_tramosunion Info updated",
          data: rutas_tramosunion
        });
      });
    }
  );
};

// Handle delete rutas_tramosunion
exports.delete = function (req, res) {
  RutasTramosUnion.remove(
    {
      _id: req.params.rutas_tramosunion_id
    },
    function (err, rutas_tramosunion) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "Rutas_tramosunion deleted"
      });
    }
  );
};
