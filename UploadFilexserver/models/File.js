const mongoose = require('mongoose');

const fileSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    fileUrl:{
        type:String,
    },
    fileType:{
        type:String
    },
    email:{
        type:String
    }
})

const File = mongoose.model("File", fileSchema);
module.exports =File;