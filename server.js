var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;


// i don't know what this does
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(express.static(path.join(__dirname, 'app/public')));


var user1 = {
  "name":"Emily",
  "photo":"catlol.gif",
  "scores":[
     5,
     1,
     4
   ]
};

var user2 = {
  "name":"Douchehat",
  "photo":"catface.gif",
  "scores":[
     4,
     4,
     3
   ]
};



// html-routes.js

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, './app/public/home.html'));
});

app.get('/survey', function(req, res) {
	res.sendFile(path.join(__dirname, './app/public/survey.html'));
});


// api-routes.js












app.listen(PORT, function() {
	console.log('App listening on port: ' + PORT);
});