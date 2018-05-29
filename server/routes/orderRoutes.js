var express = require('express');
var router = express.Router();
var orderController = require('../controllers/orderController.js');
var userController = require('../controllers/userController.js');

/*
 * GET
 */
router.get('/', userController.loginRequired, orderController.list);

/*
 * GET
 */
router.get('/:id', userController.loginRequired, orderController.show);

/*
 * POST
 */
router.post('/', userController.loginRequired, orderController.create);

/*
 * PUT
 */
router.put('/:id', userController.loginRequired, orderController.update);

/*
 * DELETE
 */
router.delete('/:id', userController.loginRequired, orderController.remove);

module.exports = router;
