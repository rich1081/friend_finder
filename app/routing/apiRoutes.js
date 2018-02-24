var friendsdata = require("../data/friends.js");

module.exports = function(app) {

// Total list of friend entries

 app.get('/api/friends', function(req, res) {
	res.json(friends);
	});



	// Add new friend entry

	app.post('/api/friends', function(req, res) {

		var userInput = req.body;

		 console.log('userInput = ' + JSON.stringify(userInput));

		 // Add new user

		friends.push(userInput);

	});
	
}

