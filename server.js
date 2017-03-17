var express = require("express");
var bodyParser = require("body-parser");
var path = require('path')

var app = express();
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
// app.use('/static', express.static(path.join(__dirname, "\\app\\public")));



// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/',require('./app/routing/htmlRoutes'));
app.use('/',require('./app/routing/apiRoutes'));

var server = app.listen(PORT, function () {

  var host = server.address().address
  var PORT = server.address().PORT

  console.log("Example app listening at http://localhost:%s",  PORT)

});