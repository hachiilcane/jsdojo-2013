
var models = require("../models");

module.exports = function () {
  var app = this;

  app.get("/", function (req, res) {
    res.render("index");
  });

  app.post("/send", function (req, res) {
    if (! req.xhr)
      return res.send(400);

    models.results.add(req.body, function (err) {
      if (err)
        return res.send(500);

      res.send(200);
    });
  });

  app.get("/result", function (req, res) {
    models.results.get(function (err, results) {
      results = JSON.stringify(results);
      res.render("result", {results: results});
    });
  });
};
