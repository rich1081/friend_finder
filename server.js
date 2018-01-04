//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;
//body parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("app/public/assets/css"));

require('./app/routing/htmlRoutes.js')(app);
//require('./app/routing/apiRoutes.js')(app, bodyParser, path);


var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
	console.log("listening on " + PORT);
});