import React from "react";

const Manager = () => {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      <div className="mx-auto bg-slate-500 mycontainer">
        <h1 className="text-2xl text-white font-bold text-center">
          <span className="text-green-600">&lt;</span>
          Pass
          <span className="text-green-600">Store/&gt;</span>
        </h1>
        <p className="text-green-600 text-lg text-center">Your own Password Manager</p>
        <div className="text-white flex flex-col p-4">
          <input type="text" name="" id="" />
          <div className="flex">
            <input type="text" />
            <input type="text" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
