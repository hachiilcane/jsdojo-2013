
var models = require("../models");

module.exports = function () {
  var app = this;

  app.get("/", function (req, res) {
    res.render("index");
  });

  app.post("/send", function (req, res) {
    if (! req.xhr)
      return res.send(400);

    var result = {
      times             : Number(req.body.times),
      want_next         : req.body.want_next,
      language          : req.body.language.toLowerCase(),
      total_satisfaction: Number(req.body.total_satisfaction),
      venue_satisfaction: Number(req.body.venue_satisfaction),
      working_hours     : Number(req.body.working_hours),
      work_satisfaction : Number(req.body.work_satisfaction)
    };

    models.results.add(result, function (err) {
      if (err)
        return res.send(500);

      res.send(200);
    });
  });

  app.get("/result", function (req, res) {
    models.results.get(function (err, results) {

      var data = {
        times             : {
          1: 0,
          2: 0
        },
        want_next         : {
          yes: 0,
          no : 0
        },
        language          : {
          js    : 0,
          ruby  : 0,
          php   : 0,
          java  : 0,
          python: 0,
          other : 0
        },
        total_satisfaction: {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0
        },
        venue_satisfaction: {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0
        },
        working_hours     : {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0
        },
        work_satisfaction : {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0
        }
      };

      results.forEach(function (result) {
        Object.keys(result).forEach(function (item) {
          if (item === "id")
            return;

          data[item] || (data[item] = {});
          data[item][result[item]] || (data[item][result[item]] = 0);
          data[item][result[item]]++;
        });
      });

      data = JSON.stringify(data);
      res.render("result", {result: data});
    });
  });
};
