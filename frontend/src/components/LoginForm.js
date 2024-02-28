import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoEyeSharp,IoEyeOff  } from "react-icons/io5";
import { Link } from "react-router-dom";

const LoginForm = ({setIsLoggedIn}) => {

    const [formData, setFormData]=useState({
        email:"", password:"" 
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event){

        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value,
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();

    }
    function signinButtonHandler(){
        setIsLoggedIn(true);
        toast.success("Login Suggessfully")
        
    }
    return(
        <form onSubmit={submitHandler}>

            <label>
                <p className="mt-4">
                    Email Address<sup>*</sup>
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
            <label>
                <p className="mt-3">
                    password <sup>*</sup>
                </p>
                <input className="w-[250px] bg-pink-200 p-1 rounded-md"
                    required
                    type={showPassword ? ("text") : ("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter Password"
                    name="password"
                />

                <span onClick={ () => setShowPassword( (prev) => !prev)}>
                    {showPassword ? (<IoEyeSharp/>) : (<IoEyeOff/>)}
                </span>

                <Link to="#">
                    <p>
                        Forget Password
                    </p>
                </Link>
            </label>

            <Link to="/">
                <button className="bg-yellow-400 font-semibold text-1xl w-[80%] rounded-md p-1 mt-[30px]" onClick={signinButtonHandler}>
                    Sign In
                </button>
            </Link>
            
        </form>
    );
}

export default LoginForm;