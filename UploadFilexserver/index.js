const express = require('express');
const fileupload= require("express-fileupload");
const db = require("./config/database");
const cloudinary = require("./config/cloudinary");
const Upload =require("./routes/FileUpload")
require('dotenv').config()


const app =express();
const PORT =process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/temp'
}));

//db connection
db.connect();

//cloud se connect kar na hai
cloudinary.cloudinaryConnect();

//api route mount karna hai
app.use("/api/v1/upload", Upload);

app.listen(PORT, () => {
    console.log(`App is running at PORT ${PORT}`)
})

