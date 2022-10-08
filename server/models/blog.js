///ชื่อบทความ (title) , เนื้อหาบทความ (content), ผู้เขียน (author), slug(url)
//timestamp
//install postman -> install-postman

const mongoose = require("moongoose")

const blogSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        tpye:{},
        required:true
    },
    author:{
        type:String,
        default:"Admin"
    },
    slug:{
        type:String,
        lowercase:true,
        unique:true,
    }
},{timestamps:true})

module.exports = mongoose.model("Blogs",blogSchema)