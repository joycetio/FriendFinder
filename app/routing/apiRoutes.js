//data coming from friends.js
var friends = require("../data/friends");

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	//api post requests
	//handles when a user submits a form and submits data to the server. 
	app.post("/api/friends", function(req, res) {
		friends.push(req.body);
		res.json(friends);
	});
}