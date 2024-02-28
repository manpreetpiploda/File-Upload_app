const User = require("../models/User");

exports.userSignUp = async (req, res) => {
    try {
        const { firstName, lastName, email, password, confirmPassword, accountType } = req.body;

        if (!firstName || !lastName || !email || !password || !confirmPassword || !accountType) {
            return res.status(401).json({
                success: false,
                message: "Incomplete user data."
            });
        }
        console.log("All data found.");

        if (password !== confirmPassword) {
            return res.status(401).json({
                success: false,
                message: "Password and Confirm Password do not match."
            });
        }
        console.log("Passwords match.");

        const userIsPresent = await User.findOne({ email });
        if (userIsPresent) {
            return res.status(401).json({
                success: false,
                message: "User already exists."
            });
        }
        console.log("User not present.");

        const user = await User.create({
            firstName,
            lastName,
            email,
            password,
            accountType
        });

        res.status(201).json({
            success: true,
            message: "User created successfully."
        });

        console.log("User creation completed.");
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "User signup failed."
        });
    }
}


exports.userLogin = async (req, res) => {
    try{
        const {email, password} =req.body;

        if (!email || !password ) {
            return res.status(401).json({
                success: false,
                message: "Incomplete user data."
            });
        }
        console.log("data verify");

        const user = await User.findOne({email});

        if(!user){
            return res.status(401).json({
                success: false,
                message: "User is not present."
            });
        }
        console.log("user not prestnt");


        return res.status(200).json({
            success:true,
            user,
            message:"User login successfully"
        })

        

    }
    catch(error){

    }
}
