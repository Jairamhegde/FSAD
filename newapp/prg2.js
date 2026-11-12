const express = require("express");
const  app = express();
const port = 3000;
const path = require('path');
app.use(express.json());


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});

app.post("/student",(req,res)=>{
    const name = req.body.name;
    const semester = req.body.semester;
    const branch = req.body.branch;

    res.json({
        "name":name,
        "semester":semester,
        "branch":branch
    });
})

app.listen(port,()=>{
    console.log('server is running at http://localhost:3000');
});