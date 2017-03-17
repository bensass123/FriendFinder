//routes for api

var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var data = require('../data/friends.json');
var fs = require('fs');

router.use(bodyParser.json());

// Define the survey route


router.get('/api/friends', function(req, res) {
	console.log('friends data:');
	console.log(data);
  	res.json(data);
});

router.post('/api/friends', function(req, res) {
	console.log('post');
	console.log(req.body);
	data.push(req.body);
	console.log('scores');
	console.log(req.body['scores[]']);
	res.json(returnMatch(req.body, returnFriendsData()));
	appendObject(req.body);
});

function returnFriendsData(){
	  var configFile = fs.readFileSync('./app/data/friends.json');
  	  var config = JSON.parse(configFile);
  	  return config;
}


function appendObject(obj){
  var configFile = fs.readFileSync('./app/data/friends.json');
  var config = JSON.parse(configFile);
  config.push(obj);
  var configJSON = JSON.stringify(config, null, 4);
  fs.writeFileSync('./app/data/friends.json', configJSON);
}

function returnMatch(user, friends){
	//where friends is an array of user objects
	var fArray;

	var closestMatch = [-1,99999];
	console.log('user scores 0 : ');
	console.log(user['scores[]']);
	console.log('user');
	console.log(user);
	var uArray = user['scores[]'];

	for (var i = 0; i < friends.length; i++){
		fArray = friends[i]['scores[]'];
		var sum = 0;
		for (var x = 0; x < fArray.length; x++) {
			console.log('farray: ' + fArray)
			sum += Math.abs(uArray[x]-fArray[x]);
		}
		if (sum < closestMatch[1]) {
			//updating closestMatch if less than current
			closestMatch = [i*1,sum];
		}
	}
	return friends[closestMatch[0]];
}


module.exports = router;