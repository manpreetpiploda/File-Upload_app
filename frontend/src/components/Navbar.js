import logo from "../assets/Upload.png"
import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
    return(
        <div>

            <Link to="/">
                <img src={logo}/>
            </Link>
        </div>
    );
}

export default Navbar