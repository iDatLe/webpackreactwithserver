var express  = require("express");
var router   = express.Router();
var passport = require("passport");
var User     = require('../models/registerSchema');

router.post('/', function(req, res) {
	console.log(req.body)
	var first = req.body.first
	var last = req.body.last
	var newUser = {first: first, last: last}
	User.create(newUser, function(err, user) {
		if(err) {
			console.log(err)
			return console.log("Error found")
		} else {
			console.log(req.body)
			console.log("You successfully posted")
		}
		// passport.authenticate('local')(req, res, function() {
		// 	req.session.save(function(err) {
		// 		if(err) {
		// 			console.log(err);
		// 			res.sendStatus(500);
		// 			return next(err)
		// 		} else {
		// 			res.sendStatus(200);
		// 			return console.log("Registered successfully")
		// 		}
		// 	})
		// })
	})
})

module.exports = router;