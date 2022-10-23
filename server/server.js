const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const blogRoute = require('./routes/blog')

const app = express ()

//connect cloud database
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:false
}).then(()=>console.log("Connection Complete"))
.catch((err)=>console.log(err))

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//route
app.use('/api',blogRoute)

const port = process.env.PORT || 9999
app.listen(port,()=>console.log(`start server in port ${port}`))
