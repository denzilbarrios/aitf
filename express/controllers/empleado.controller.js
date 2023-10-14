// Import empleado model
Empleado = require("../models/empleado.model");

// Handle get all empleados
exports.index = function (req, res) {
  Empleado.get(function (err, empleados) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Empleados retrieved successfully",
      data: empleados
    });
  });
};

// Handle create empleado
exports.new = function (req, res) {
  var empleado = new Empleado();
  var empleadoObj = req.body;
  Object.keys(empleadoObj).forEach((key, index) => {
    empleado[key] = empleadoObj[key];
  });

  // save the empleado and check for errors
  empleado.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "New empleado created!",
      data: empleado
    });
  });
};

// Handle view empleado info
exports.view = function (req, res) {
  Empleado.findById(req.params.empleado_id, function (err, empleado) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "Empleado details loading..",
      data: empleado
    });
  });
};

// Handle update empleado info
exports.update = function (req, res) {
  Empleado.findByIdAndUpdate(
    req.params.empleado_id,
    req.body,
    { new: true },
    function (err, empleado) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }

      // save the empleado and check for errors
      empleado.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Empleado Info updated",
          data: empleado
        });
      });
    }
  );
};

// Handle delete empleado
exports.delete = function (req, res) {
  Empleado.remove(
    {
      _id: req.params.empleado_id
    },
    function (err, empleado) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "Empleado deleted"
      });
    }
  );
};
