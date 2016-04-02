var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongoaDB');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    message: { type: String, required: true },
    status: Boolean,
    created_at: Date,
    execute_at: Date,
    mobile: String,
    email: { type: String, required: true }
});

// the schema is useless so far
// we need to create a model using it
// below command will create UsrProfiles empty database
var Todo = mongoose.model('UsrToDo', userSchema);
if (Todo == null)
    console.log("Error while creating Schema.");
else
    console.log("Connected and Schema created.");
// make this available to our users in our Node applications
module.exports = Todo;