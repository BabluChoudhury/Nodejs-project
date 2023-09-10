//routing 
//home page
//about page
//contact page
// temp page 
const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.send("This is home page");
});
app.get('/about',(req,res)=>{
    res.status(200).send("This is about page");
});
app.get('/contact',(req,res)=>{
    res.json({
        id:23,
        name:"bablu",
        city:"BBSR"
    });
});
app.get('/temp',(req,res)=>{
    res.write("<script>alert('This is temp page')</script>");
    res.send();
});
app.listen(port,()=>{
    console.log("listining");
});
