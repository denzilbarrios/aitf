// Import destino model
Destino = require("../models/destino.model");

// Handle get all destinos
exports.index = function (req, res) {
  Destino.get(function (err, destino) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Destinos retrieved successfully",
      data: destino
    });
  });
};

// Handle create destino
exports.new = function (req, res) {
  var destino = new Destino();
  var destinoObj = req.body;
  Object.keys(destinoObj).forEach((key, index) => {
    destino[key] = destinoObj[key];
  });

  // save the destino and check for errors
  destino.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "New destino created!",
      data: destino
    });
  });
};

// Handle view destino info
exports.view = function (req, res) {
  Destino.findById(req.params.destino_id, function (err, destino) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "Destino details loading..",
      data: destino
    });
  });
};

// Handle update destino info
exports.update = function (req, res) {
  Destino.findByIdAndUpdate(
    req.params.destino_id,
    req.body,
    { new: true },
    function (err, destino) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }

      // save the destino and check for errors
      destino.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Destino Info updated",
          data: destino
        });
      });
    }
  );
};

// Handle delete destino
exports.delete = function (req, res) {
  Destino.remove(
    {
      _id: req.params.destino_id
    },
    function (err, destino) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "Destino deleted"
      });
    }
  );
};
