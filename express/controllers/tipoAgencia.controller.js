// Import tipoAgencia model
TipoAgencia = require("../models/tipoAgencia.model");

// Handle get all tipoAgencias
exports.index = function (req, res) {
  TipoAgencia.get(function (err, tipoAgencias) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "TipoAgencias retrieved successfully",
      data: tipoAgencias
    });
  });
};

// Handle create tipoAgencia
exports.new = function (req, res) {
  var tipoAgencia = new TipoAgencia();
  var tipoAgenciaObj = req.body;
  Object.keys(tipoAgenciaObj).forEach((key, index) => {
    tipoAgencia[key] = tipoAgenciaObj[key];
  });

  // save the tipoAgencia and check for errors
  tipoAgencia.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "New tipoAgencia created!",
      data: tipoAgencia
    });
  });
};

// Handle view tipoAgencia info
exports.view = function (req, res) {
  TipoAgencia.findById(req.params.tipoAgencia_id, function (err, tipoAgencia) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "TipoAgencia details loading..",
      data: tipoAgencia
    });
  });
};

// Handle update tipoAgencia info
exports.update = function (req, res) {
  TipoAgencia.findByIdAndUpdate(
    req.params.tipoAgencia_id,
    req.body,
    { new: true },
    function (err, tipoAgencia) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }

      // save the tipoAgencia and check for errors
      tipoAgencia.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "TipoAgencia Info updated",
          data: tipoAgencia
        });
      });
    }
  );
};

// Handle delete tipoAgencia
exports.delete = function (req, res) {
  TipoAgencia.remove(
    {
      _id: req.params.tipoAgencia_id
    },
    function (err, tipoAgencia) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "TipoAgencia deleted"
      });
    }
  );
};
