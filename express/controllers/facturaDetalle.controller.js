// Import facturaDetalle model
FacturaDetalle = require("../models/facturaDetalle.model");

// Handle get all facturaDetalles
exports.index = function (req, res) {
  FacturaDetalle.get(function (err, facturaDetalles) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "FacturaDetalles retrieved successfully",
      data: facturaDetalles
    });
  });
};

// Handle create facturaDetalle
exports.new = function (req, res) {
  var facturaDetalle = new FacturaDetalle();
  var facturaDetalleObj = req.body;
  Object.keys(facturaDetalleObj).forEach((key, index) => {
    facturaDetalle[key] = facturaDetalleObj[key];
  });

  // save the facturaDetalle and check for errors
  facturaDetalle.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "New facturaDetalle created!",
      data: facturaDetalle
    });
  });
};

// Handle view facturaDetalle info
exports.view = function (req, res) {
  FacturaDetalle.findById(req.params.facturaDetalle_id, function (err, facturaDetalle) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "FacturaDetalle details loading..",
      data: facturaDetalle
    });
  });
};

// Handle update facturaDetalle info
exports.update = function (req, res) {
  FacturaDetalle.findByIdAndUpdate(
    req.params.facturaDetalle_id,
    req.body,
    { new: true },
    function (err, facturaDetalle) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }

      // save the facturaDetalle and check for errors
      facturaDetalle.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "FacturaDetalle Info updated",
          data: facturaDetalle
        });
      });
    }
  );
};

// Handle delete facturaDetalle
exports.delete = function (req, res) {
  FacturaDetalle.remove(
    {
      _id: req.params.facturaDetalle_id
    },
    function (err, facturaDetalle) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "FacturaDetalle deleted"
      });
    }
  );
};
