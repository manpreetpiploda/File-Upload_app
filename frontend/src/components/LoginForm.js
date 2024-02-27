import React, { useState } from "react";
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
    return(
        <form onSubmit={submitHandler}>

            <label>
                <p>
                    Email Address<sup>*</sup>
                </p>
                <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Enter email id"
                    name="email"
                />
            </label>
            <label>
                <p>
                    password <sup>*</sup>
                </p>
                <input
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

            <button >
                <Link to="/">Sign In</Link>
            </button>
            
        </form>
    );
}

export default LoginForm;