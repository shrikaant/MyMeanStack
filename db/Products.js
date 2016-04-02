
var mongoose = require('mongoose');
if (mongoose.connection.readyState != 2) {
    mongoose.connect('mongodb://localhost:27017/mongoaDB');
}
var Schema = mongoose.Schema;

// create a schema
var productSchema = new Schema({
    prodId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    inStore: { type: Boolean, required: true }
});

// the schema is useless so far
// we need to create a model using it
// below command will create products empty datatable
var products = mongoose.model('Products', productSchema);
if (products == null)
    console.log("Error while creating Schema->Products.");
else
    console.log("Connected and Schema created->Products.");
// make this available to our users in our Node applications
module.exports = products;