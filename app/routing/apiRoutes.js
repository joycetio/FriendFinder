//data coming from friends.js
var friendsData = require("../data/friendsData");

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friendsData);
	});

	//api post requests
	//handles when a user submits a form and submits data to the server. 
}