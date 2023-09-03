// require mongoose after installing it and makes the same instance as that of mongoose
const mongoose = require('mongoose');

// creating the schema
const taskSchema = new mongoose.Schema({
    task : {
        type : String,
        required : true
    },
    dueDate : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    }
});

// storing the schema to collection Task
const Task = mongoose.model('Task', taskSchema);

// exporting the collection Task
module.exports = Task;