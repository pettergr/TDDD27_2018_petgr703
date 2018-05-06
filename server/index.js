const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '../client/build')));

//DATABASE
var db = require('./db/mongoose');

//ROUTES
var customerRoutes = require('./routes/customerRoutes');
app.use('/customer', customerRoutes);

app.get('/api', function (request, response) {
  response.send("Hello world!");
});

app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});
