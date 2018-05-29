var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController.js');
var userController = require('../controllers/userController.js');

/*
 * GET
 */
router.get('/', userController.loginRequired, productController.list);

/*
 * GET
 */
router.get('/:id', userController.loginRequired, productController.show);

/*
 * POST
 */
router.post('/', userController.loginRequired, productController.create);

/*
 * PUT
 */
router.put('/:id', userController.loginRequired, productController.update);

/*
 * DELETE
 */
router.delete('/:id', userController.loginRequired, productController.remove);

module.exports = router;
