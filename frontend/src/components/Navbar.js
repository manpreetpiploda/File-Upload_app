import logo from "../assets/Upload.png"
import { Link } from "react-router-dom";
import React from "react";
import Dashboard from "../pages/Dashboard";
import toast from "react-hot-toast";

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return(
        <div className="flex items-center justify-evenly w-full">

            <div className="flex gap-4 items-center">
                <Link to="/">
                    <img src={logo} width={80} height={50}/>
                </Link>
            </div>
            <nav>
                <ul className="flex gap-4">
                    <li className="font-semibold text-2xl">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="font-semibold text-2xl">
                        <Link to="about">About</Link>
                    </li>
                    <li className="font-semibold text-2xl">
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* {Login, signup, logout, Dashboard} */}
            <div className="flex gap-4 ml-9">

                { !isLoggedIn &&
                    <Link to="/login">
                        <button className="font-semibold text-2xl">
                            Login
                        </button>
                    </Link>
                }
                {!isLoggedIn &&
                    <Link to="/signup">
                        <button className="font-semibold text-2xl"  >
                            Sign Up
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to="/">
                        <button className="font-semibold text-2xl" onClick={ () => {
                            setIsLoggedIn(false);
                            toast.success("Logout successfully")
                        }}>
                            Log Out
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to="/dashboard">
                        <button className="font-semibold text-2xl">
                            Dashboard
                        </button>
                    </Link>
                }
            </div>
        
        </div>
    );
}

export default Navbar