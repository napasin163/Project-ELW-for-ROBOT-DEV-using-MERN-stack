const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")
const connect = require('./database/connection')
require("dotenv").config()

const app = express ()
app.use(cors());
//connect cloud database
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:false
}).then(()=>console.log("Connection Complete"))
.catch((err)=>console.log(err))

//middleware
app.use(express.json())

app.get ('/',(req,res)=>{
    res.send("Sever Request")
})


//router
app.use('/api',require('./routes/router'))  

const port = process.env.PORT || 9999
app.listen(port,()=>console.log(`start server in port ${port}`))
