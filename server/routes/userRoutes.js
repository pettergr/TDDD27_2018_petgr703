var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController.js');


/*
 * POST
 */
router.post('/register', userController.register);

/*
 * POST
 */
router.post('/sign_in', userController.signIn);


module.exports = router;
