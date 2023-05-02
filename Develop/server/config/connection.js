const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://stevendepauw:lq0DDomJVlQL40El@bookdb.4vfw1yh.mongodb.net/bookdb?retryWrites=true&w=majority');

module.exports = mongoose.connection;
