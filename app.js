var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// var port = 3000;

var app = modules.exports = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var burgersController = require("./controllers/burger-controller.js");

// May not need to designate a sub route. just use / and link to index.
app.use("/burgers", burgersController);

// app.listen(port);