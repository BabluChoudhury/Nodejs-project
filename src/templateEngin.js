const express=require('express');
const app = express();
const path=require('path');
const hbs=require('hbs');
const templatePath=path.join(__dirname,"../templates/views");
const partialPath=path.join(__dirname,"../templates/partial");
app.set('view engine','hbs');
app.set("views",templatePath);
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
app.get("*",(req,res)=>{
    res.render("error");
})
app.listen(3000,()=>{
    console.log("Listining");
});