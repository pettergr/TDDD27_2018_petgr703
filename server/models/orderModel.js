var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var orderSchema = new Schema({
	'customerName' : String,
	'customerEmail' : String,
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
	'shippingCountry' : String,
	'date' : Date,
	'orderLines' : Array,
	'poNumber' : String,
	'status' : String,
	'contact' : String,
	'freightCost' : Number,
	'totalCost' : Number
});

module.exports = mongoose.model('order', orderSchema);
