
var mongoose = require('mongoose');
if (mongoose.connection.readyState != 2) {
    mongoose.connect('mongodb://localhost:27017/mongoaDB');
}
var Schema = mongoose.Schema;

// create a schema
var orderSchema = new Schema({
    prodId: { type: String, required: true },
    customerId: { type: String, required: true },
    executed_at: Date
});

// the schema is useless so far
// we need to create a model using it
// below command will create Orders empty database
var orders = mongoose.model('Orders', orderSchema);
if (orders == null)
    console.log("Error while creating Schema->Orders.");
else
    console.log("Connected and Schema created->Orders.");
// make this available to our users in our Node applications
module.exports = orders;