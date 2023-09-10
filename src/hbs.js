const express = require("express");
const path = require("path");
const hbs=require('hbs');
const app=express();
const staticPath=path.join(__dirname,"../public");
const viewPath=path.join(__dirname,"../templates/views");
const partialPath=path.join(__dirname,"../templates/partial")
app.use(express.static(staticPath));
app.set("views",viewPath);
app.set("view engine","hbs");
hbs.registerPartials(partialPath);
app.get("/",(req,res)=>{
    res.render("index",{
        myData:"Bablu",
        myData2:"Bablu Choudhury"
    });
});
app.get("/about",(req,res)=>{
    res.render("about",{
        myData:"Bablu",
        myData2:"Bablu Choudhury"
    });
});
app.get("/contact",(req,res)=>{
    res.render("contact");
});
app.get("*",(req,res)=>{
    res.render("error");
})
app.listen(3000,()=>{
    console.log("Listining");
});