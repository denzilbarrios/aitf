// Import serie model
Serie = require("../models/serie.model");

// Handle get all series
exports.index = function (req, res) {
  Serie.get(function (err, series) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Series retrieved successfully",
      data: series
    });
  });
};

// Handle create serie
exports.new = function (req, res) {
  var serie = new Serie();
  var serieObj = req.body;
  Object.keys(serieObj).forEach((key, index) => {
    serie[key] = serieObj[key];
  });

  // save the serie and check for errors
  serie.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "New serie created!",
      data: serie
    });
  });
};

// Handle view serie info
exports.view = function (req, res) {
  Serie.findById(req.params.serie_id, function (err, serie) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "Serie details loading..",
      data: serie
    });
  });
};

// Handle update serie info
exports.update = function (req, res) {
  Serie.findByIdAndUpdate(
    req.params.serie_id,
    req.body,
    { new: true },
    function (err, serie) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }

      // save the serie and check for errors
      serie.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Serie Info updated",
          data: serie
        });
      });
    }
  );
};

// Handle delete serie
exports.delete = function (req, res) {
  Serie.remove(
    {
      _id: req.params.serie_id
    },
    function (err, serie) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "Serie deleted"
      });
    }
  );
};
