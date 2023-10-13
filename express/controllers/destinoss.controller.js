// Import destinoss model
Destinoss = require("../models/destinoss.model");

// Handle get all destinoss
exports.index = function (req, res) {
  Destinoss.get(function (err, destinoss) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Destinoss retrieved successfully",
      data: destinoss
    });
  });
};

// Handle create destinoss
exports.new = function (req, res) {
  var destinoss = new Destinoss();
  var destinossObj = req.body;
  Object.keys(destinossObj).forEach((key, index) => {
    destinoss[key] = destinossObj[key];
  });

  // save the destinoss and check for errors
  destinoss.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "New destinoss created!",
      data: destinoss
    });
  });
};

// Handle view destinoss info
exports.view = function (req, res) {
  Destinoss.findById(req.params.destinoss_id, function (err, destinoss) {
    if (err) {
      res.json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "Destinoss details loading..",
      data: destinoss
    });
  });
};

// Handle update destinoss info
exports.update = function (req, res) {
  Destinoss.findByIdAndUpdate(
    req.params.destinoss_id,
    req.body,
    { new: true },
    function (err, destinoss) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }

      // save the destinoss and check for errors
      destinoss.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Destinoss Info updated",
          data: destinoss
        });
      });
    }
  );
};

// Handle delete destinoss
exports.delete = function (req, res) {
  Destinoss.remove(
    {
      _id: req.params.destinoss_id
    },
    function (err, destinoss) {
      if (err) {
        res.json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "Destinoss deleted"
      });
    }
  );
};
