var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongoaDB');
module.exports = mongoose;