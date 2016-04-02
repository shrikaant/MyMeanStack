var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongoaDB');
var Schema = mongoose.Schema;

// create a schema
var todos = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    message: String,
    status: Boolean,
    created_at: Date,
    execute_at: Date,
    mobile: String,
    email: { type: String, required: true }
});

// the schema is useless so far
// we need to create a model using it
// below command will create Todo empty database
var usrTodos = mongoose.model('usrtodos', todos);
if (usrTodos == null)
    console.log("Error while creating Schema.");
else
    console.log("Connected and ToDo Schema created.");
// make this available to our users in our Node applications
console.log("mongoose.connection.readystate" + mongoose.connection.readyState);
module.exports = usrTodos;
