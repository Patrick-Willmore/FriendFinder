
  var path = require("path");
var express = require("express");

module.exports = function(app) {





	app.get("/home", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"))
	});



};