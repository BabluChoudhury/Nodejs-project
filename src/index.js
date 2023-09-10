const express = require('express');
const app = express();
const path= require('path');
const custPath=path.join(__dirname,"../public");
console.log(custPath);
app.use(express.static(custPath));
app.listen(8000,()=>{
    console.log("Listining");
});