const express = require('express');
const app = express();

const port = 8000;

// setting up the view engine
app.set('view engine', "ejs");
app.set("views", "./views");

// adding middleware
app.use(express.urlencoded());

var taskContainer = [
    // {
    //     task : "create task",
    //     dueDate : "Date",
    //     category : "Category"    
    // }
]




app.get("/", (req,res)=>{
    return res.render('home',{
        title : 'Todo-List',
        task_container : taskContainer
    });
})

app.post("/create_task", (req,res)=>{
    console.log(req.body);
    taskContainer.push(req.body);
    return res.redirect("/");
})


// app.get("/delete_task",(req,res)=>{

// })
app.listen(port, (err)=>{
    if (err){
        console.log(`Error in running the express server : ${err}`);
        return;
    }
    console.log(`The express server is up and running on port : ${port}`);
})
