import React, { useState } from "react";

const SignupForm = () =>{

    const [formData, setFormData]=useState({
        email:"", password:"" 
    })

    function changeHandler(event){

        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value,
            }
        ))
    }
    return(
        <form>

            <label>
                <p>
                    Email Address<sup>*</sup>
                </p>
                <input
                    required
                    type="text"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Enter email id"
                />
            </label>
            <label>
                <p>
                    password <sup>*</sup>
                </p>
                <input
                    required
                    type="text"
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter email id"
                />
            </label>
        </form>
    );
}

export default SignupForm;