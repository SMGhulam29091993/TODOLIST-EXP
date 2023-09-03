// require mongoose after installing it
const mongoose = require('mongoose'); 

// forming connection of ds
mongoose.connect('mongodb://127.0.0.1:27017/todo_list_db');

// connecting to the db
const db = mongoose.connection;

// to check if there is any error in connecting the db
db.on("Error", console.error.bind(console, "Error in connecting the db"));

// if the connection with db is established it console.log the msg
db.once("open",()=>{
    console.log("The connection with database is established!");
})