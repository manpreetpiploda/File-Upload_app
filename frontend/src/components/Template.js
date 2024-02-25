import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const Template = ({title, desc1, desc2, formtype, image, setIsLoggedIn}) => {
    return(
        <div>

            <div>
                <h1>{title}</h1>

                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>

                {formtype ==="signup" ? 
                (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) : 
                (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

                <div>
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>

                <button>
                    <p>Sign Up with Google</p>
                </button>

                <div>
                    <img src={image}
                    alt="imageee"
                    width={500}
                    height={500}
                    loading="Lazy"/>
                </div>
            </div>
        </div>
    );
}

export default Template;