// Import agenciadestino model
AgenciaDestino = require("../models/agenciadestino.model");

// Handle get all agencydestinos
exports.index = function (req, res) {
  AgenciaDestino.get(function (err, agencydestinos) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Agenciadestinos retrieved successfully",
      data: agencydestinos
    });
  });
};

// Handle create agencydestino
exports.new = function (req, res) {
  var agencydestino = new AgenciaDestino();
  var agencydestinoObj = req.body;
  Object.keys(agencydestinoObj).forEach((key, index) => {
    agencydestino[key] = agencydestinoObj[key];
  });

  // save the agencydestino and check for errors
  agencydestino.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "New agencydestino created!",
      data: agencydestino
    });
  });
};

// Handle view agencydestino info
exports.view = function (req, res) {
  AgenciaDestino.findById(req.params.agenciadestino_id, function (err, agencydestino) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "Agenciadestino details loading..",
      data: agencydestino
    });
  });
};

// Handle update agencydestino info
exports.update = function (req, res) {
  AgenciaDestino.findByIdAndUpdate(
    req.params.agenciadestino_id,
    req.body,
    { new: true },
    function (err, agencydestino) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }

      // save the agencydestino and check for errors
      agencydestino.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Agenciadestino Info updated",
          data: agencydestino
        });
      });
    }
  );
};

// Handle delete agencydestino
exports.delete = function (req, res) {
  AgenciaDestino.remove(
    {
      _id: req.params.agenciadestino_id
    },
    function (err, agencydestino) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "Agenciadestino deleted"
      });
    }
  );
};
