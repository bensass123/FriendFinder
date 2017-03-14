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
	appendObject(req.body);
	res.json(req.body);
});


function appendObject(obj){
  var configFile = fs.readFileSync('./app/data/friends.json');
  var config = JSON.parse(configFile);
  config.push(obj);
  var configJSON = JSON.stringify(config);
  fs.writeFileSync('./app/data/friends.json', configJSON);
}


module.exports = router;