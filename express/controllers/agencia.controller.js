// Import agencia model
Agencia = require("../models/agencia.model");

// Handle get all agencias
exports.index = function (req, res) {
  Agencia.get(function (err, agencias) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Agencias retrieved successfully",
      data: agencias
    });
  });
};

// Handle create agencia
exports.new = function (req, res) {
  var agencia = new Agencia();
  var agenciaObj = req.body;
  Object.keys(agenciaObj).forEach((key, index) => {
    agencia[key] = agenciaObj[key];
  });

  // save the agencia and check for errors
  agencia.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "New agencia created!",
      data: agencia
    });
  });
};

// Handle view agencia info
exports.view = function (req, res) {
  Agencia.findById(req.params.agencia_id, function (err, agencia) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "Agencia details loading..",
      data: agencia
    });
  });
};

// Handle update agencia info
exports.update = function (req, res) {
  Agencia.findByIdAndUpdate(
    req.params.agencia_id,
    req.body,
    { new: true },
    function (err, agencia) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }

      // save the agencia and check for errors
      agencia.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Agencia Info updated",
          data: agencia
        });
      });
    }
  );
};

// Handle delete agencia
exports.delete = function (req, res) {
  Agencia.remove(
    {
      _id: req.params.agencia_id
    },
    function (err, agencia) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "Agencia deleted"
      });
    }
  );
};
