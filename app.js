// const express=require("express");
// const app=new express();
// const morgan=require("morgan");
// const cors=require("cors");
// app.use(morgan("dev"));
// require("./Db/connection");
// app.use(cors());

// const path = require('path');



// const employee=require("./routes/Employee");
// app.use("/api",employee);

// const user = require("./routes/UserRoute");
// app.use("/api", user);
// const PORT=5000;
// app.listen(PORT,()=>{
//     console.log(`server running on ${PORT}`);
// })


const express=require('express')
const mongooe =require('mongoose')
const morgan = require('morgan')
const cors =require('cors')
const app=express();
const jwt =require("jsonwebtoken");
require('dotenv').config();
app.use(morgan("dev"));
app.use(cors());
require("./Db/connection");



const user=require('./routes/UserRoute');

app.use('/api',user)
const employee=require('./routes/Employee');

app.use('/api',employee)
const PORT=5000;
app.listen(5000,()=>{
    console.log(`sERVER RUNNING ON port 5000`);
});