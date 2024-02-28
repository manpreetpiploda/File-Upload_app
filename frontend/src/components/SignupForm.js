import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoEyeSharp,IoEyeOff  } from "react-icons/io5";
import { Link } from "react-router-dom";

const SignupForm = ({setIsLoggedIn}) =>{
    // return(
    //     <div> SignupForm</div>
    // );
    const [formData, setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"", 
        password:"",
        confirmPassword:""

    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loggedInValue, setLoggedInValue] =useState("student");

    function toggleHandler(){
        setLoggedInValue(loggedInValue === "student" ? "instructor" : "student")
    }

    function changeHandler(event){
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.value);
      
        setFormData( (prevData) => (
              
            {
                ...prevData,
                [event.target.name]:event.target.value,
            }
        ))
    }
    function signinButtonHandler(){
        setIsLoggedIn(true);
        toast.success("Sign Up Successfully")
        
    }
    return(
        <div className="mt-5 ">

            <div className="flex items-center justify-center gap-4 w-[250px] bg-pink-300 font-medium text-2xl rounded-3xl">
                <button className={` ${loggedInValue==='student' ? ("bg-pink-700 p-1 pl-2 pr-2 rounded-3xl") : ("")} `} 
                    onClick={toggleHandler}>
                    Student
                </button>

                <button className={` ${loggedInValue==='instructor' ? ("bg-pink-700 p-1 pl-2 pr-2 rounded-3xl") : ("")} `}
                    onClick={toggleHandler}> 
                    Instructor
                </button>
            </div>

            <form className="w-full">

                {/* Firstname and last name */}
                <div className="flex mt-4 justify-between">
                    <label>
                        <p> First Name<sup>*</sup> </p>
                    <input className="w-[250px] bg-pink-200 p-1 rounded-md"
                        required
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={changeHandler}
                        placeholder="Enter First Name"
                    />
                    </label>

                    <label>
                        <p> Last Name<sup>*</sup> </p>
                    <input className="w-[250px] bg-pink-200 p-1 rounded-md"
                        required
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={changeHandler}
                        placeholder="Enter Last Name"
                    />
                    </label>
                </div>
                
                {/* emaild address */}
                <label >
                    <p className="mt-4"> 
                        Email Address <sup>*</sup>
                    </p>
                    <input className="w-[250px] bg-pink-200 p-1 rounded-md"
                        required
                        type="email"
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder="Enter email id"
                        name="email"
                    />
                </label>

                {/* passwored section */}
                <div  className="flex mt-4 justify-between" >
                <label>
                    <p>
                        Create Password <sup>*</sup>
                    </p>
                    <input className="w-[250px] bg-pink-200 p-1 rounded-md"
                        required
                        type={showPassword ? ("text") : ("password")}
                        value={formData.password}
                        onChange={changeHandler}
                        placeholder="Enter password"
                        name="password"
                    />

                    <span onClick={ () => setShowPassword( (prev) => !prev)}>
                        {showPassword ? (<IoEyeSharp/>) : (<IoEyeOff/>)}
                    </span>

                </label>
                <label>
                    <p>
                        Confirm Password <sup>*</sup>
                    </p>
                    <input className="w-[250px] bg-pink-200 p-1 rounded-md"
                        required
                        type={showConfirmPassword ? ("text") : ("password")}
                        value={formData.confirmPassword}
                        onChange={changeHandler}
                        placeholder="Enter Confirm Password"
                        name="confirmPassword"
                    />

                    <span onClick={ () => setShowConfirmPassword( (prev) => !prev)}>
                        {showConfirmPassword ? (<IoEyeSharp/>) : (<IoEyeOff/>)}
                    </span>

                </label>
                </div>
                
                
                    <Link to="/" > 
                        <button className="bg-yellow-400 font-semibold text-1xl w-[80%] rounded-md p-1 mt-[30px]"
                            onClick={signinButtonHandler}>
                            Create Account
                        </button>
                    </Link>
                
            </form>
        </div>
    );
}

export default SignupForm;