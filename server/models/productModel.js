var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var productSchema = new Schema({
	'articleNumber' : String,
	'description' : String,
	'price' : Number,
	'uom' : String
});

module.exports = mongoose.model('product', productSchema);
