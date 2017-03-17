// routes for html

var express = require('express');
var router = express.Router();
var path = require('path');


// router.use(express.static(__dirname + "/../public"));
// router.use(express.static(path.join(__dirname, "/../public")));
console.log(path.join(__dirname, "/../public/"));


//defaulting homepage to home.html
// router.use('/', function(req, res) {
//         res.sendFile(path.join(__dirname, "/../public/home.html"));
// });


//home root
router.get('/', function(req, res) {
	console.log('get');
        res.sendFile(path.join(__dirname, "/../public/home.html"));
});


// Define the survey route
router.get('/survey', function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/survey.html"));
});




module.exports = router;