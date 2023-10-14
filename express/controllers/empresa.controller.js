// Import empresa model
Empresa = require("../models/empresa.model");

// Handle get all empresas
exports.index = function (req, res) {
  Empresa.get(function (err, empresas) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Empresas retrieved successfully",
      data: empresas
    });
  });
};

// Handle create empresa
exports.new = function (req, res) {
  var empresa = new Empresa();
  var empresaObj = req.body;
  Object.keys(empresaObj).forEach((key, index) => {
    empresa[key] = empresaObj[key];
  });

  // save the empresa and check for errors
  empresa.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "New empresa created!",
      data: empresa
    });
  });
};

// Handle view empresa info
exports.view = function (req, res) {
  Empresa.findById(req.params.empresa_id, function (err, empresa) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "Empresa details loading..",
      data: empresa
    });
  });
};

// Handle update empresa info
exports.update = function (req, res) {
  Empresa.findByIdAndUpdate(
    req.params.empresa_id,
    req.body,
    { new: true },
    function (err, empresa) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }

      // save the empresa and check for errors
      empresa.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Empresa Info updated",
          data: empresa
        });
      });
    }
  );
};

// Handle delete empresa
exports.delete = function (req, res) {
  Empresa.remove(
    {
      _id: req.params.empresa_id
    },
    function (err, empresa) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "Empresa deleted"
      });
    }
  );
};
