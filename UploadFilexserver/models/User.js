const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    
    email:{
        type:String,
        required:true,
        trim:true,
    },
    contact:{
        type:Number,
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true,
    },
    accountType:{
        type:["student", "instructor"],
        default:"student",
    }

})

const User =mongoose.model("User", userSchema);

module.exports =User;
