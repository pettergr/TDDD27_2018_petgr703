var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var addressSchema = new Schema({
	'addressName' : String,
    'addressLineOne' : String,
    'addressLineTwo' : String,
    'city' : String,
    'country' : String,
    'state' : String,
    'zip' : String
});

var customerSchema = new Schema({
	name : {type: String, required: [true, "Customer need a name"]},
	addresses : [addressSchema],
	'phone' : String,
	'email' : String,
	'website' : String
});

module.exports = mongoose.model('customer', customerSchema);
