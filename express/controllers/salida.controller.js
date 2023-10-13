// Import salida model
Salida = require("../models/salida.model");

// Handle get all salidas
exports.index = function (req, res) {
  Salida.get(function (err, salidas) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Salidas retrieved successfully",
      data: salidas
    });
  });
};

// Handle create salida
exports.new = function (req, res) {
  var salida = new Salida();
  var salidaObj = req.body;
  Object.keys(salidaObj).forEach((key, index) => {
    salida[key] = salidaObj[key];
  });

  // save the salida and check for errors
  salida.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "New salida created!",
      data: salida
    });
  });
};

// Handle view salida info
exports.view = function (req, res) {
  Salida.findById(req.params.salida_id, function (err, salida) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "Salida details loading..",
      data: salida
    });
  });
};

// Handle update salida info
exports.update = function (req, res) {
  Salida.findByIdAndUpdate(
    req.params.salida_id,
    req.body,
    { new: true },
    function (err, salida) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }

      // save the salida and check for errors
      salida.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Salida Info updated",
          data: salida
        });
      });
    }
  );
};

// Handle delete salida
exports.delete = function (req, res) {
  Salida.remove(
    {
      _id: req.params.salida_id
    },
    function (err, salida) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "Salida deleted"
      });
    }
  );
};
