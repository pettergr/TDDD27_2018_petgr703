var orderModel = require('../models/orderModel.js');

/**
 * orderController.js
 *
 * @description :: Server-side logic for managing orders.
 */
module.exports = {

    /**
     * orderController.list()
     */
    list: function (req, res) {
        orderModel.find(function (err, orders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting order.',
                    error: err
                });
            }
            return res.json(orders);
        });
    },

    /**
     * orderController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        orderModel.findOne({_id: id}, function (err, order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting order.',
                    error: err
                });
            }
            if (!order) {
                return res.status(404).json({
                    message: 'No such order'
                });
            }
            return res.json(order);
        });
    },

    /**
     * orderController.create()
     */
    create: function (req, res) {
        var order = new orderModel({
			customerName : req.body.customerName,
			customerEmail : req.body.customerEmail,
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
			shippingCountry : req.body.shippingCountry,
			date : req.body.date,
			orderLines : req.body.orderLines,
			poNumber : req.body.poNumber,
			status : req.body.status,
			contact : req.body.contact,
			freightCost : req.body.freightCost,
			totalCost : req.body.totalCost

        });

        order.save(function (err, order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating order',
                    error: err
                });
            }
            return res.status(201).json(order);
        });
    },

    /**
     * orderController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        orderModel.findOne({_id: id}, function (err, order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting order',
                    error: err
                });
            }
            if (!order) {
                return res.status(404).json({
                    message: 'No such order'
                });
            }

            order.customerName = req.body.customerName ? req.body.customerName : order.customerName;
			order.customerEmail = req.body.customerEmail ? req.body.customerEmail : order.customerEmail;
			order.notes = req.body.notes ? req.body.notes : order.notes;
			order.billingAddressLine1 = req.body.billingAddressLine1 ? req.body.billingAddressLine1 : order.billingAddressLine1;
			order.billingAddressLine2 = req.body.billingAddressLine2 ? req.body.billingAddressLine2 : order.billingAddressLine2;
			order.billingCity = req.body.billingCity ? req.body.billingCity : order.billingCity;
			order.billingZip = req.body.billingZip ? req.body.billingZip : order.billingZip;
			order.billingState = req.body.billingState ? req.body.billingState : order.billingState;
			order.billingCountry = req.body.billingCountry ? req.body.billingCountry : order.billingCountry;
			order.shippingAddressLine1 = req.body.shippingAddressLine1 ? req.body.shippingAddressLine1 : order.shippingAddressLine1;
			order.shippingAddressLine2 = req.body.shippingAddressLine2 ? req.body.shippingAddressLine2 : order.shippingAddressLine2;
			order.shippingCity = req.body.shippingCity ? req.body.shippingCity : order.shippingCity;
			order.shippingZip = req.body.shippingZip ? req.body.shippingZip : order.shippingZip;
			order.shippingState = req.body.shippingState ? req.body.shippingState : order.shippingState;
			order.shippingCountry = req.body.shippingCountry ? req.body.shippingCountry : order.shippingCountry;
			order.date = req.body.date ? req.body.date : order.date;
			order.orderLines = req.body.orderLines ? req.body.orderLines : order.orderLines;
			order.poNumber = req.body.poNumber ? req.body.poNumber : order.poNumber;
			order.status = req.body.status ? req.body.status : order.status;
			order.contact = req.body.contact ? req.body.contact : order.contact;
			order.freightCost = req.body.freightCost ? req.body.freightCost : order.freightCost;
			order.totalCost = req.body.totalCost ? req.body.totalCost : order.totalCost;

            order.save(function (err, order) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating order.',
                        error: err
                    });
                }

                return res.json(order);
            });
        });
    },

    /**
     * orderController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        orderModel.findByIdAndRemove(id, function (err, order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the order.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
