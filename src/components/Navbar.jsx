import React, { useActionState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () =>{
    const navigate = useNavigate()
    return(
        <div className="w-full bg-black h-auto flex flex-col justify-center items-end p-2">
            <button onClick={()=>navigate("/formdata")}
            className="text-black bg-yellow-500 p-2 rounded-md">Add data</button>
        </div>
    )
}

export default Navbar;