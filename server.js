var express = require("express");
var bodyParser = require("body-parser");
var path = require('path')

var app = express();
var port = process.env.port || 3000;

// Serve static content for the app from the "public" directory in the application directory.
// app.use('/static', express.static(path.join(__dirname, "\\app\\public")));



// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', require('./app/routing/htmlRoutes'));
app.use('/', require('./app/routing/apiRoutes'));

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:%s",  port)

});