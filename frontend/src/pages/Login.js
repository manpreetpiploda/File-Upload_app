import React from "react";
import Template from "../components/Template";
import logoImage from "../assets/Upload.png"

const Login = ({setIsLoggedIn}) => {
    return(
    
        <Template 
            title={"Welcome Back"} 
            desc1={"Upload Your Files from Right Know"} 
            desc2={"Your Files are safe on this pateform"} 
            formtype={"login"} 
            image={logoImage}
            setIsLoggedIn={setIsLoggedIn}
        />

    );
}

export default Login