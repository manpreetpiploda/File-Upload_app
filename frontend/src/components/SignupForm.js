import React, { useState } from "react";
import { IoEyeSharp,IoEyeOff  } from "react-icons/io5";

const SignupForm = () =>{
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

    function changeHandler(event){
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
      
        setFormData( (prevData) => (
              
            {
                ...prevData,
                [event.target.name]:event.target.value,
            }
        ))
    }
    return(
        <div>

            <div>
                <button>
                    Student
                </button>

                <button>
                    Instructor
                </button>
            </div>

            <form>

                {/* Firstname and last name */}
                <div>
                    <label>
                        <p> First Name<sup>*</sup> </p>
                    <input
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
                    <input
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
                <label>
                    <p>
                        Email Address <sup>*</sup>
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

                {/* passwored section */}
                <div>
                <label>
                    <p>
                        Create Password <sup>*</sup>
                    </p>
                    <input
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
                    <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        value={formData.confirmPassword}
                        onChange={changeHandler}
                        placeholder="Enter Confirm Password"
                        name="confirmPassword"
                    />

                    <span onClick={ () => setShowPassword( (prev) => !prev)}>
                        {showPassword ? (<IoEyeSharp/>) : (<IoEyeOff/>)}
                    </span>

                </label>
                </div>

                <button>
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default SignupForm;