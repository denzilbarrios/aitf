// Import horario model
Horario = require("../models/horario.model");

// Handle get all horarios
exports.index = function (req, res) {
  Horario.get(function (err, horarios) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Horarios retrieved successfully",
      data: horarios
    });
  });
};

// Handle create horario
exports.new = function (req, res) {
  var horario = new Horario();
  var horarioObj = req.body;
  Object.keys(horarioObj).forEach((key, index) => {
    horario[key] = horarioObj[key];
  });

  // save the horario and check for errors
  horario.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "New horario created!",
      data: horario
    });
  });
};

// Handle view horario info
exports.view = function (req, res) {
  Horario.findById(req.params.horario_id, function (err, horario) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "Horario details loading..",
      data: horario
    });
  });
};

// Handle update horario info
exports.update = function (req, res) {
  Horario.findByIdAndUpdate(
    req.params.horario_id,
    req.body,
    { new: true },
    function (err, horario) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }

      // save the horario and check for errors
      horario.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Horario Info updated",
          data: horario
        });
      });
    }
  );
};

// Handle delete horario
exports.delete = function (req, res) {
  Horario.remove(
    {
      _id: req.params.horario_id
    },
    function (err, horario) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "Horario deleted"
      });
    }
  );
};
