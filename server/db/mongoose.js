var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI); // connect to our database

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log("DB connection alive");
});

module.exports = mongoose;
