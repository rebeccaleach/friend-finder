var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// not working:
// var api = require('./app/routing/api-routes.js')(app); 
// var html = require('./app/routing/html-routes.js')(app);

var app = express();
var PORT = process.env.PORT || 3000;


// bodyParser shit that lets the server interpret data it receives
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// gets server to use CSS stylesheet
app.use(express.static(path.join(__dirname, 'app/public')));


// data

var people = [
	{
	  "name":"Emily",
	  "photo":"catlol.gif",
	  "scores":[5, 1, 4]
	},
	{
	  "name":"Douchehat",
	  "photo":"catface.gif",
	  "scores":[4, 4, 3]
	}
];



// html routes
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, './app/public/home.html'));
});

app.get('/survey', function(req, res) {
	res.sendFile(path.join(__dirname, './app/public/survey.html'));
});


// posting
app.post('/api/new', function(req, res) {
	var newPerson = req.body;
	console.log(newPerson);

	people.push(newPerson);
	res.json(newPerson);
});


// api routes












// starting the server
app.listen(PORT, function() {
	console.log('App listening on port: ' + PORT);
});