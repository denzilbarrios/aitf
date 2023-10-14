// Import boleto model
Boleto = require("../models/boleto.model");

// Handle get all boletos
exports.index = function (req, res) {
  Boleto.get(function (err, boletos) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Boletos retrieved successfully",
      data: boletos
    });
  });
};

// Handle create boleto
exports.new = function (req, res) {
  var boleto = new Boleto();
  var boletoObj = req.body;
  Object.keys(boletoObj).forEach((key, index) => {
    boleto[key] = boletoObj[key];
  });

  // save the boleto and check for errors
  boleto.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "New boleto created!",
      data: boleto
    });
  });
};

// Handle view boleto info
exports.view = function (req, res) {
  Boleto.findById(req.params.boleto_id, function (err, boleto) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "Boleto details loading..",
      data: boleto
    });
  });
};

// Handle update boleto info
exports.update = function (req, res) {
  Boleto.findByIdAndUpdate(
    req.params.boleto_id,
    req.body,
    { new: true },
    function (err, boleto) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }

      // save the boleto and check for errors
      boleto.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Boleto Info updated",
          data: boleto
        });
      });
    }
  );
};

// Handle delete boleto
exports.delete = function (req, res) {
  Boleto.remove(
    {
      _id: req.params.boleto_id
    },
    function (err, boleto) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "Boleto deleted"
      });
    }
  );
};
