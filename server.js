//dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path"); 

//Express setup
var app = express(); 
var PORT = process.env.PORT || 8080; 

//sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" })); 

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//LISTENER 
//The below code effectivelt "starts" our server
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});