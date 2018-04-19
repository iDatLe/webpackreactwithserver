var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var registerSchema = new Schema({
	first: String,
	last: String
})

module.exports = mongoose.model('User', registerSchema)