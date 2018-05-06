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
        var addresses = [];
        var reqAddresses = req.body.addresses ? req.body.addresses : [];
        reqAddresses.forEach(function(address) {
            var tempaddress = new addressModel({
                addressName : address.addressName,
                addressLineOne : address.addressLineOne,
                addressLineTwo : address.addressLineTwo,
                city : address.city,
                country : address.country,
                state : address.state,
                zip : address.zip
            });
            addresses.push(tempaddress);
        });
        var customer = new customerModel({
			name : req.body.name,
			addresses : addresses,
			phone : req.body.phone,
			email : req.body.email,
			website : req.body.website

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
			customer.addresses = req.body.addresses ? req.body.addresses : customer.addresses;
			customer.phone = req.body.phone ? req.body.phone : customer.phone;
			customer.email = req.body.email ? req.body.email : customer.email;
			customer.website = req.body.website ? req.body.website : customer.website;

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
