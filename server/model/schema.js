const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true,
        minlength: 8
    },
    username:{
        type: String
    }
})


module.exports = User = mongoose.model('user', userSchema)  
