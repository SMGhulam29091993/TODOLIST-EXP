const express = require('express');
const app = express();

const port = 8000;
// requiring db and collection from their respective file 
const mongoose = require("./config/mongoose");
const Task = require("./models/task");

// setting up the view engine
app.set('view engine', "ejs");
app.set("views", "./views");

// adding middleware
app.use(express.urlencoded());
app.use(express.static('assets'));
var taskContainer = [
    // {
    //     task : "create task",
    //     dueDate : "Date",
    //     category : "Category"    
    // }
]



// the below route and controller find the data from collection db and display it to the home.ejs
app.get("/", (req,res)=>{
    Task.find({})
    .then(tasks=>{
        return res.render('home',{
            title : 'Todo-List',
            task_container : tasks
        });
    })
    .catch(err=>{
        console.log("Error in fetching the data");
    })
    
});
// taking the data from the form and storing it as a schema within the collection call Task
app.post("/create_task", (req,res)=>{
    console.log(req.body);
    Task.create(req.body)
    .then(task=>{
        console.log("******",task);
        return res.redirect('back');
    })
    .catch(err=>{
        console.log(`Error in adding new Task : ${err}`);
        return;
    })
})

// below router and controller gets the id using query and delete any particular task
app.get("/delete_task",(req,res)=>{
    console.log(req.query);
    let id = req.query.id;

    Task.findByIdAndDelete(id)
    .catch(err=>{
        console.log(`An error occured while deleteing the task : ${err}`);
        return;
    })
    return res.redirect('back');
});


app.listen(port, (err)=>{
    if (err){
        console.log(`Error in running the express server : ${err}`);
        return;
    }
    console.log(`The express server is up and running on port : ${port}`);
})
