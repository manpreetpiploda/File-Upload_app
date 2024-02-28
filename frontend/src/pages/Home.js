import React from "react";
import UploadImage from "../assets/Upload.png"

const Home = () => {

    function uploadHandler (){
        // alert("Upload karni hai kya")
    }
    return(
        <div className="w-full h-svh flex flex-row items-center justify-center">
             {/* <h1>Hone me kaya kar raha hai be</h1> */}

             <div className="flex flex-col justify-center items-center w-[500px]">

                <p className="text-3xl font-semibold">Upload Your File</p>

                <div className="w-[500px] h-[200px] border-dark-500 border-solid border-[8px] mt-3 flex justify-center items-center
                    cursor-pointer" onClick={uploadHandler}>
                    <img className="w-[150px] h-[100px] object-cover" 
                        src={UploadImage}
                        alt="Upload Image"
                        />
                </div>
             </div>
        </div>
    );
}

export default Home