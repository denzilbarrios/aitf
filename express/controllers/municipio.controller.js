// Import municipio model
Municipio = require("../models/municipio.model");

// Handle get all municipios
exports.index = function (req, res) {
  Municipio.get(function (err, municipios) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Municipios retrieved successfully",
      data: municipios
    });
  });
};

// Handle create municipio
exports.new = function (req, res) {
  var municipio = new Municipio();
  var municipioObj = req.body;
  Object.keys(municipioObj).forEach((key, index) => {
    municipio[key] = municipioObj[key];
  });

  // save the municipio and check for errors
  municipio.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "New municipio created!",
      data: municipio
    });
  });
};

// Handle view municipio info
exports.view = function (req, res) {
  Municipio.findById(req.params.municipio_id, function (err, municipio) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "Municipio details loading..",
      data: municipio
    });
  });
};

// Handle update municipio info
exports.update = function (req, res) {
  Municipio.findByIdAndUpdate(
    req.params.municipio_id,
    req.body,
    { new: true },
    function (err, municipio) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }

      // save the municipio and check for errors
      municipio.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Municipio Info updated",
          data: municipio
        });
      });
    }
  );
};

// Handle delete municipio
exports.delete = function (req, res) {
  Municipio.remove(
    {
      _id: req.params.municipio_id
    },
    function (err, municipio) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "Municipio deleted"
      });
    }
  );
};
