var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var customerSchema = new Schema({
	name : {type: String, required: [true, "Customer need a name"]},
	'email' : String,
	'notes' : String,
	'billingAddressLine1' : String,
	'billingAddressLine2' : String,
	'billingCity' : String,
	'billingZip' : String,
	'billingState' : String,
	'billingCountry' : String,
	'shippingAddressLine1' : String,
	'shippingAddressLine2' : String,
	'shippingCity' : String,
	'shippingZip' : String,
	'shippingState' : String,
	'shippingCountry' : String
});

module.exports = mongoose.model('customer', customerSchema);
