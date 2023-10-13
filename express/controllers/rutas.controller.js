// Import rutas model
Rutas = require("../models/rutas.model");

// Handle get all rutas
exports.index = function (req, res) {
  Rutas.get(function (err, rutas) {
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

// Handle create rutas
exports.new = function (req, res) {
  var rutas = new Rutas();
  var rutasObj = req.body;
  Object.keys(rutasObj).forEach((key, index) => {
    rutas[key] = rutasObj[key];
  });

  // save the rutas and check for errors
  rutas.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "New rutas created!",
      data: rutas
    });
  });
};

// Handle view rutas info
exports.view = function (req, res) {
  Rutas.findById(req.params.rutas_id, function (err, rutas) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "Rutas details loading..",
      data: rutas
    });
  });
};

// Handle update rutas info
exports.update = function (req, res) {
  Rutas.findByIdAndUpdate(
    req.params.rutas_id,
    req.body,
    { new: true },
    function (err, rutas) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }

      // save the rutas and check for errors
      rutas.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Rutas Info updated",
          data: rutas
        });
      });
    }
  );
};

// Handle delete rutas
exports.delete = function (req, res) {
  Rutas.remove(
    {
      _id: req.params.rutas_id
    },
    function (err, rutas) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "Rutas deleted"
      });
    }
  );
};

// Handle get rutas by destino_id
exports.getByIdDestino = function (req, res) {
  Rutas.find({
    destino_id: req.params.destino_id
  }, function (err, rutas) {
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

// Handle get rutas by origen_id
exports.getByIdOrigen = function (req, res) {
  Rutas.find({
    origen_id: req.params.origen_id
  }, function (err, rutas) {
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
