var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("main", hbsObject);  
  });
});

router.post("/create", function(req, res) {
  burger.create([
    "name"
  ], [
    req.body.name
  ], function() {
    res.redirect("/burgers");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/burgers");
  });
});

// Export routes for server.js to use.
module.exports = router;