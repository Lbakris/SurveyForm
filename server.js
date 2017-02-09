var express = require("express")
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response){
  response.render("survey")
})

app.post('/results', function(request, response){
  var info = {name: request.body.name, dojolocation: request.body.dojo_location, favlang: request.body.name, comment: request.body.comment};
  response.render('results', {user_info:info});
})

var port = 1738
app.listen(port, function(){
  console.log("listening on port", port)
})
