var express        = require('express'),
	mongoose       = require('mongoose'),
	bodyParser     = require('body-parser'),
	passport       = require('passport'),
	LocalStrategy  = require("passport-local").Strategy,
	session        = require('express-session');

/*--------ROUTES--------*/
var registerRoute = require('./routes/register');
var path = require('path');	

/*--------MODELS--------*/
var User = require('./models/registerSchema');
var app  = express();

/*---------MONGOOSE---------*/
mongoose.Promise   = global.Promise;
mongoose.connect('mongodb://iDatLe:souperprivate1@ds251849.mlab.com:51849/webpackreact?authMechanism=SCRAM-SHA-1', (err) => {
	if(err) throw err;
});

/*---------BODY PARSER---------*/
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*-----------ROUTES---------*/
app.use('/api/register', registerRoute);

/*---------CONNECTS SERVER AND CLIENT---------*/
app.use(express.static(path.join(__dirname, '../client/src')));

app.get('*', function (req, res) {;
  res.sendFile(path.join(__dirname, '../client/src', 'index.html'));
});

if (app.get('env') === 'development') {
	console.log('Development Mode!')
} else {
	console.log('Production mode!') //NODE_ENV=production node app.js
}

/*-----------------------*/
app.listen(8081, function() {
	console.log('You have connected to the server')
})