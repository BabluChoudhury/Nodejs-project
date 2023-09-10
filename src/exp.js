const express=require('express');
const app=express();
// app.get("/",(req,res)=>{
//     res.send("This is home page");
// });
// app.get("/about",(req,res)=>{
//     res.send("This is about page");
// });
// app.get("/contact",(req,res)=>{
//     res.send("This is contact page");
// });
// app.listen(3000,()=>{
//     console.log("Listining");
// });
app.get("/",(req,res)=>{
    res.send("This is server")
});
app.get("/html",(req,res)=>{
    res.write("<h1>This is heading</h1>");
    res.send();
});
app.get("/alert",(req,res)=>{
    res.write("<script>alert('This is alert')</script>");
    res.send();
});
app.get("/json",(req,res)=>{
    res.send({
        ID:32,
    Name:"Bablu",
    age:24});
});
app.get("jsondata",(req,res)=>{
    res.json({
        ID:32,
    Name:"Bablu",
    age:24});
});
app.listen(3000,()=>{
        console.log("Listining");
});