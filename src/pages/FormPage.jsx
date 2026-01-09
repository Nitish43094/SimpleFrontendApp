import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const FormPage = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        title: "",
        body: ""
    });

    // handle input change
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // handle form submit
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${BASE_URL}/post/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            console.log("Form Data:", data);
            navigate('/')
        } catch (err) {
            console.error("Error submitting data:", err);
        }
    };

    return (
        <div className="flex flex-col items-center w-full bg-slate-500 min-h-screen text-xl">
            <h1 className="text-yellow-200 font-bold uppercase underline">
                Enter the Post Data
            </h1>

            <form onSubmit={submitHandler} className="flex flex-col gap-5 m-5">
                <div className="flex flex-col gap-2 w-[400px]">
                    <label className="font-bold underline">Post Name :-</label>
                    <input
                        type="text"
                        name="title"
                        value={data.title}
                        onChange={changeHandler}
                        placeholder="Enter Name"
                        className="bg-black rounded-md text-white text-sm font-bold p-2"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2 w-[400px]">
                    <label className="font-bold underline">Body :-</label>
                    <input
                        type="text"
                        name="body"
                        value={data.body}
                        onChange={changeHandler}
                        placeholder="Add Body data"
                        className="bg-black rounded-md text-white text-sm font-bold p-2"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-yellow-400 text-black font-bold px-4 py-2 rounded"
                >
                    Add
                </button>
            </form>
        </div>
    );
};

export default FormPage;
