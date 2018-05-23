var customerModel = require('../models/customerModel.js');

/**
 * customerController.js
 *
 * @description :: Server-side logic for managing customers.
 */
module.exports = {

    /**
     * customerController.list()
     */
    list: function (req, res) {
        customerModel.find(function (err, customers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting customer.',
                    error: err
                });
            }
            return res.json(customers);
        });
    },

    /**
     * customerController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        customerModel.findOne({_id: id}, function (err, customer) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting customer.',
                    error: err
                });
            }
            if (!customer) {
                return res.status(404).json({
                    message: 'No such customer'
                });
            }
            return res.json(customer);
        });
    },

    /**
     * customerController.create()
     */
    create: function (req, res) {
        var customer = new customerModel({
			name : req.body.name,
			email : req.body.email,
			notes : req.body.notes,
			billingAddressLine1 : req.body.billingAddressLine1,
			billingAddressLine2 : req.body.billingAddressLine2,
			billingCity : req.body.billingCity,
			billingZip : req.body.billingZip,
			billingState : req.body.billingState,
			billingCountry : req.body.billingCountry,
			shippingAddressLine1 : req.body.shippingAddressLine1,
			shippingAddressLine2 : req.body.shippingAddressLine2,
			shippingCity : req.body.shippingCity,
			shippingZip : req.body.shippingZip,
			shippingState : req.body.shippingState,
			shippingCountry : req.body.shippingCountry

        });

        customer.save(function (err, customer) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating customer',
                    error: err
                });
            }
            return res.status(201).json(customer);
        });
    },

    /**
     * customerController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        customerModel.findOne({_id: id}, function (err, customer) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting customer',
                    error: err
                });
            }
            if (!customer) {
                return res.status(404).json({
                    message: 'No such customer'
                });
            }

            customer.name = req.body.name ? req.body.name : customer.name;
			customer.email = req.body.email ? req.body.email : customer.email;
			customer.notes = req.body.notes ? req.body.notes : customer.notes;
			customer.billingAddressLine1 = req.body.billingAddressLine1 ? req.body.billingAddressLine1 : customer.billingAddressLine1;
			customer.billingAddressLine2 = req.body.billingAddressLine2 ? req.body.billingAddressLine2 : customer.billingAddressLine2;
			customer.billingCity = req.body.billingCity ? req.body.billingCity : customer.billingCity;
			customer.billingZip = req.body.billingZip ? req.body.billingZip : customer.billingZip;
			customer.billingState = req.body.billingState ? req.body.billingState : customer.billingState;
			customer.billingCountry = req.body.billingCountry ? req.body.billingCountry : customer.billingCountry;
			customer.shippingAddressLine1 = req.body.shippingAddressLine1 ? req.body.shippingAddressLine1 : customer.shippingAddressLine1;
			customer.shippingAddressLine2 = req.body.shippingAddressLine2 ? req.body.shippingAddressLine2 : customer.shippingAddressLine2;
			customer.shippingCity = req.body.shippingCity ? req.body.shippingCity : customer.shippingCity;
			customer.shippingZip = req.body.shippingZip ? req.body.shippingZip : customer.shippingZip;
			customer.shippingState = req.body.shippingState ? req.body.shippingState : customer.shippingState;
			customer.shippingCountry = req.body.shippingCountry ? req.body.shippingCountry : customer.shippingCountry;

            customer.save(function (err, customer) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating customer.',
                        error: err
                    });
                }

                return res.json(customer);
            });
        });
    },

    /**
     * customerController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        customerModel.findByIdAndRemove(id, function (err, customer) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the customer.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
