var express = require('express');
var router = express.Router();
var customerController = require('../controllers/customerController.js');
var userController = require('../controllers/userController.js');

/*
 * GET
 */
router.get('/', userController.loginRequired, customerController.list);

/*
 * GET
 */
router.get('/:id', userController.loginRequired, customerController.show);

/*
 * POST
 */
router.post('/', userController.loginRequired, customerController.create);

/*
 * PUT
 */
router.put('/:id', userController.loginRequired, customerController.update);

/*
 * DELETE
 */
router.delete('/:id', userController.loginRequired, customerController.remove);

module.exports = router;
