const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const jsonwebtoken = require("jsonwebtoken");
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(function(req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET, function(err, decode) {
            if (err) req.user = undefined;
            req.user = decode;
            next();
        });
    }

    else {
        req.user = undefined;
        next();
    }
});

//DATABASE
var db = require('./db/mongoose');

//ROUTES
var customerRoutes = require('./routes/customerRoutes');
var productRoutes = require('./routes/productRoutes');
var orderRoutes = require('./routes/orderRoutes');
var userRoutes = require('./routes/userRoutes');
app.use('/customer', customerRoutes);
app.use('/product', productRoutes);
app.use('/order', orderRoutes);
app.use('/user', userRoutes);

app.get('/api', function (request, response) {
  response.send("Hello world!");
});

app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});
