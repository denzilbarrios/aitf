// Import puesto model
Puesto = require("../models/puesto.model");

// Handle get all puestos
exports.index = function (req, res) {
  Puesto.get(function (err, puestos) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Puestos retrieved successfully",
      data: puestos
    });
  });
};

// Handle create puesto
exports.new = function (req, res) {
  var puesto = new Puesto();
  var puestoObj = req.body;
  Object.keys(puestoObj).forEach((key, index) => {
    puesto[key] = puestoObj[key];
  });

  // save the puesto and check for errors
  puesto.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "New puesto created!",
      data: puesto
    });
  });
};

// Handle view puesto info
exports.view = function (req, res) {
  Puesto.findById(req.params.puesto_id, function (err, puesto) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "Puesto details loading..",
      data: puesto
    });
  });
};

// Handle update puesto info
exports.update = function (req, res) {
  Puesto.findByIdAndUpdate(
    req.params.puesto_id,
    req.body,
    { new: true },
    function (err, puesto) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }

      // save the puesto and check for errors
      puesto.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Puesto Info updated",
          data: puesto
        });
      });
    }
  );
};

// Handle delete puesto
exports.delete = function (req, res) {
  Puesto.remove(
    {
      _id: req.params.puesto_id
    },
    function (err, puesto) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "Puesto deleted"
      });
    }
  );
};
