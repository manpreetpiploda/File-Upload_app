import React from "react";
import Template from "../components/Template";
import logoImage from "../assets/Upload.png"

const signup = ({setIsLoggedIn}) => {
    return(
        <Template 
        title={"Welcome"} 
        desc1={"Upload Your Files from Right Know"} 
        desc2={"Your Files are safe on this pateform"} 
        formtype={"signup"} 
        image={logoImage}
        setIsLoggedIn={setIsLoggedIn}
    />
    );
}

export default signup