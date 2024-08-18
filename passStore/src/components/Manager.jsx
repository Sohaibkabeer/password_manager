import React from "react";
import passView from "../assets/view_eye.png";
import passHide from "../assets/hide_eye.png";
import { useRef } from "react";


const Manager = () => {
    const ref = useRef();
const showPassword = () =>{
    if(ref.current.src.includes(passView))ref.current.src = passHide;
    else ref.current.src = passView;
};

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      <div className="mx-auto mycontainer">
        <h1 className="text-2xl text-black font-bold text-center">
          <span className="text-green-600">&lt;</span>
          Pass
          <span className="text-green-600">Store/&gt;</span>
        </h1>
        <p className="text-green-600 text-lg text-center">
          Your own Password Manager
        </p>
        <div className="text-white flex flex-col p-4 text-black gap-8 items-center">
          <input
            className="rounded-full border border-green-500 w-full p-4 py-1"
            type="text"
            name=""
            id=""
            placeholder="Enter website URL"
          />
          <div className="flex w-full jusify-between gap-8">
            <input
              className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
              name=""
              id=""
              placeholder="Enter username"
            />
            <div className="relative">
              <input
                className="rounded-full border border-green-500 w-full p-4 py-1"
                type="text"
                name=""
                id=""
                placeholder="Enter password"
              />
              <span className="absolute right-[2px] top-1 cursor-pointer"onClick={showPassword}>
                <img className="p-1" width={25} ref={ref} src={passHide} alt=""/>
              </span>
            </div>
          </div>

          <button className="flex justify-center items-center bg-green-600 hover:bg-green-500  rounded-full px-4 py-2 w-fit border-green-900 border">
            <lord-icon
              src="https://cdn.lordicon.com/zrkkrrpl.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
