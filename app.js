
var express = require("express"),
    hogan = require("hogan-express"),
    http = require("http"),
    path = require("path"),
    routes = require("./routes");

app = express();

app.configure(function () {
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'views'));
  app.set("view engine", "html");
  app.engine("html", hogan);
  app.use(express.logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, "static")));
});

routes.call(app);

http.createServer(app).listen(app.get("port"), function(){
  console.log("Server listening on " + app.get("port"));
});
