var data = require("../data.json");

exports.addFriend = function(req, res) {   
	// Your code goes here
	var name = req.query.name;
	var descrip = req.query.description;
	console.log(name);
	console.log(descrip);
	var newFriend = {
		"name": name,
		"description": descrip,
		"imageURL": "http://lorempixel.com/400/400/people"
	}
	res.render('add', newFriend);

	data["friends"].push(newFriend);
}