import React from "react";

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
                (<SignupForm/>) : 
                (<LoginForm/>)}

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