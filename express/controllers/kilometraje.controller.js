// Import kilometraje model
Kilometraje = require("../models/kilometraje.model");

// Handle get all kilometrajes
exports.index = function (req, res) {
  Kilometraje.get(function (err, kilometrajes) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Kilometrajes retrieved successfully",
      data: kilometrajes
    });
  });
};

// Handle create kilometraje
exports.new = function (req, res) {
  var kilometraje = new Kilometraje();
  var kilometrajeObj = req.body;
  Object.keys(kilometrajeObj).forEach((key, index) => {
    kilometraje[key] = kilometrajeObj[key];
  });

  // save the kilometraje and check for errors
  kilometraje.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "New kilometraje created!",
      data: kilometraje
    });
  });
};

// Handle view kilometraje info
exports.view = function (req, res) {
  Kilometraje.findById(req.params.kilometraje_id, function (err, kilometraje) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "Kilometraje details loading..",
      data: kilometraje
    });
  });
};

// Handle update kilometraje info
exports.update = function (req, res) {
  Kilometraje.findByIdAndUpdate(
    req.params.kilometraje_id,
    req.body,
    { new: true },
    function (err, kilometraje) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }

      // save the kilometraje and check for errors
      kilometraje.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Kilometraje Info updated",
          data: kilometraje
        });
      });
    }
  );
};

// Handle delete kilometraje
exports.delete = function (req, res) {
  Kilometraje.remove(
    {
      _id: req.params.kilometraje_id
    },
    function (err, kilometraje) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "Kilometraje deleted"
      });
    }
  );
};
