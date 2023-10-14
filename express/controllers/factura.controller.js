// Import factura model
Factura = require("../models/factura.model");

// Handle get all facturas
exports.index = function (req, res) {
  Factura.get(function (err, facturas) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Facturas retrieved successfully",
      data: facturas
    });
  });
};

// Handle create factura
exports.new = function (req, res) {
  var factura = new Factura();
  var facturaObj = req.body;
  Object.keys(facturaObj).forEach((key, index) => {
    factura[key] = facturaObj[key];
  });

  // save the factura and check for errors
  factura.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "New factura created!",
      data: factura
    });
  });
};

// Handle view factura info
exports.view = function (req, res) {
  Factura.findById(req.params.factura_id, function (err, factura) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "Factura details loading..",
      data: factura
    });
  });
};

// Handle update factura info
exports.update = function (req, res) {
  Factura.findByIdAndUpdate(
    req.params.factura_id,
    req.body,
    { new: true },
    function (err, factura) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }

      // save the factura and check for errors
      factura.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Factura Info updated",
          data: factura
        });
      });
    }
  );
};

// Handle delete factura
exports.delete = function (req, res) {
  Factura.remove(
    {
      _id: req.params.factura_id
    },
    function (err, factura) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "Factura deleted"
      });
    }
  );
};
