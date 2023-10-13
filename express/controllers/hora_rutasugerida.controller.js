// Import hora_rutasugerida model
HoraRutasugerida = require("../models/hora_rutasugerida.model");

// Handle get all hora_rutasugeridas
exports.index = function (req, res) {
  HoraRutasugerida.get(function (err, hora_rutasugeridas) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Hora_rutasugeridas retrieved successfully",
      data: hora_rutasugeridas
    });
  });
};

// Handle create hora_rutasugerida
exports.new = function (req, res) {
  var hora_rutasugerida = new HoraRutasugerida();
  var hora_rutasugeridaObj = req.body;
  Object.keys(hora_rutasugeridaObj).forEach((key, index) => {
    hora_rutasugerida[key] = hora_rutasugeridaObj[key];
  });

  // save the hora_rutasugerida and check for errors
  hora_rutasugerida.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "New hora_rutasugerida created!",
      data: hora_rutasugerida
    });
  });
};

// Handle view hora_rutasugerida info
exports.view = function (req, res) {
  HoraRutasugerida.findById(req.params.hora_rutasugerida_id, function (err, hora_rutasugerida) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "Hora_rutasugerida details loading..",
      data: hora_rutasugerida
    });
  });
};

// Handle update hora_rutasugerida info
exports.update = function (req, res) {
  HoraRutasugerida.findByIdAndUpdate(
    req.params.hora_rutasugerida_id,
    req.body,
    { new: true },
    function (err, hora_rutasugerida) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }

      // save the hora_rutasugerida and check for errors
      hora_rutasugerida.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Hora_rutasugerida Info updated",
          data: hora_rutasugerida
        });
      });
    }
  );
};

// Handle delete hora_rutasugerida
exports.delete = function (req, res) {
  HoraRutasugerida.remove(
    {
      _id: req.params.hora_rutasugerida_id
    },
    function (err, hora_rutasugerida) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "Hora_rutasugerida deleted"
      });
    }
  );
};
