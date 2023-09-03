const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/todo_list_db');

const db = mongoose.connection;

db.on("Error", console.error.bind(console, "Error in connecting the db"));

db.once("open",()=>{
    console.log("The connection with database is established!");
})