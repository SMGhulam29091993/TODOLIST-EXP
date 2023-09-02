const express = require('express');
const app = express();

const port = 8000;

// setting up the view engine
app.set('view engine', "ejs");
app.set("views", "./views");

app.get("/", (req,res)=>{
    return res.render('home')
})

app.listen(port, (err)=>{
    if (err){
        console.log(`Error in running the express server : ${err}`);
        return;
    }
    console.log(`The express server is up and running on port : ${port}`);
})
