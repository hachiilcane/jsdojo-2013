
module.exports = function () {
  var app = this;

  app.get("/", function (req, res) {
    res.render("index");
  });
};
