var mongoose = require('mongoose');


var itemSchema = new mongoose.Schema({
	email: String,
	text: String,
	name : String,
	avatar: String,
	date: String,
	password: String
});

var Item = mongoose.model('Item', itemSchema, 'items');

module.exports = Item;