const cloudinary = require('cloudinary');
const File = require('../models/File');
const { response } = require('express');

//localFileUpload handler fuction

exports.localFileUpload = async(req, res) => {
    try{
        //fetch from request
        const file=req.files.file
        console.log(file);

        let path = __dirname + '../localstore/' + Date.now() +`.${file.name.split('.')[1]}`;
        // let path = __dirname + '/files/' + Date.now() +`.${file.name.split('.')[1]}`;
        console.log(path);

        file.mv(path, (err) => {
            console.log(err);
        });
        
        res.json({
            success:true,
            message:'Local File uploades successfully'
        });
    }
    catch(err){
        console.log("Not able to upload a file");
        console.log(err);
    }
}

//checking file type is present or not
function isFileTypeSupported(type, supportedTypes){
    return supportedTypes.includes(type);
}

//this function is for upload file on cloudinary

// async function uploadFileToCloudinary(file, folder, quality){

//     const options={folder};
//     if(quality){
//         options.quality=quality;
//     }
//     options.resource_type="auto";
//     return await cloudinary.uploader.upload(file.tempFilePath, options);
// }

async function uploadFileToCloudinary(file, folder, quality) {
    const options = { 
        folder: folder, 
        resource_type: "auto" 
    };

    if (quality) {
        options.quality = quality;
    }

    return await cloudinary.uploader.upload(file.tempFilePath, options);
}


//image upload handler
exports.imageUpload=async (req,res) => {
    try{
        //data fetch
        const {name, email} = req.body;
        console.log(name, email);

        //imageFiles is name of file which you send or it shows the key
        const file=req.files.imgName;
        console.log(file);

        //validation
        const supportedTypes=["jpg", "jpeg", "png"];
        const fileType=file.name.split('.')[1].toLowerCase();
        console.log("file type ->" , fileType);

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:"File format is not supported"
            })
        }

        //file format supported
        const response= await uploadFileToCloudinary(file, "abcFolder");
        console.log(response);
        //db me entry save karni hai
        const fileData= await File.create({
            name,
            email,
            imageUrl:response.secure_url,
        })

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"img sussessfully Uploaded"
        })
    }
    catch(err){
        console.error(err);
        res.status(400).json({
            success:false,
            message:"something went wrong"
        });  
    }
}

//video upload handler
exports.videoUpload = async (req, res) => {
    try{
         //data fetch
         const {name, email} = req.body;
         console.log(name,email);

         const file=req.files.videoFile;

          //validation
        const supportedTypes=["mp4", "mov"];
        const fileType=file.name.split('.')[1].toLowerCase();
        console.log("file type ->" , fileType);

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:"File format is not supported"
            })
        }
        console.log("uploading to wolfPrac")
        //file format supported
        const response= await uploadFileToCloudinary(file, "abcFolder");
        console.log(response);

         //db me entry save karni hai
         const fileData= await File.create({
            name,
            email,
            imageUrl:response.secure_url,
        })

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"video sussessfully Uploaded"
        })

    }
    catch(error){
        console.error(error)
        res.status(400).json({
            success:false,
            message:"Somthing went wrong"
        })
    }
}