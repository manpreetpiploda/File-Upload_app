import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const Template = ({title, desc1, desc2, formtype, image, setIsLoggedIn}) => {
    return(
        <div className="flex w-full h-full items-center justify-center">

            <div className="w-[75%] flex mt-16">

                <div className="w-[50%]">
                    <h1 className="font-semibold text-2xl">{title}</h1>

                    <p className="flex flex-col font-semibold text-1xl mt-[10px]">
                        <span>{desc1}</span>
                        <span>{desc2}</span>
                    </p>

                    {formtype ==="signup" ? 
                    (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) : 
                    (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

                    <div className="flex justify-evenly mt-[20px]">
                        <div className="border-dark-100 border-solid border-[0.5px] w-[100%]"></div>
                        <p>or</p>
                        <div className="border-dark-100 border-solid border-[0.5px] w-[100%]"></div>
                    </div>

                    <button className="bg-pink-200 font-semibold text-1xl w-[80%] rounded-md p-1 mt-[30px]">
                        <p>Sign Up with Google</p>
                    </button>

                </div>
                
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