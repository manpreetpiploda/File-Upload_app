const express =require('express');
const router =express.Router();

const {localFileUpload, imageUpload,videoUpload} = require("../controllers/fileUpload");

const {userSignUp, userLogin} = require('../controllers/user')
//   imageReducerUpload, 

//api routes
router.post("/imageUpload", imageUpload)
router.post("/videoUpload", videoUpload)
// router.post("/imageReducerUpload", imageReducerUpload)
router.post("/localFileUpload", localFileUpload)



//user routers
router.post("/signUp", userSignUp);
router.post("/login", userLogin);

module.exports=router;