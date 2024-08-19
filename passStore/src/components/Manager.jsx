import React from "react";
import passView from "../assets/view_eye.png";
import passHide from "../assets/hide_eye.png";
import { useRef, useState, useEffect } from "react";

const Manager = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const ref = useRef();

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    if (ref.current.src.includes(passView)) {
      ref.current.src = passHide;
    } else {
      ref.current.src = passView;
    }
  };

  const savePassword = () => {
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
        <div className="text-black flex flex-col p-4 text-black gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            className="rounded-full border border-green-500 w-full p-4 py-1"
            type="text"
            name="site"
            id=""
            placeholder="Enter website URL"
          />
          <div className="flex w-full jusify-between gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
              name="username"
              id=""
              placeholder="Enter username"
            />
            <div className="relative">
              <input
                value={form.password}
                onChange={handleChange}
                className="rounded-full border border-green-500 w-full p-4 py-1"
                type="password"
                name="password"
                id=""
                placeholder="Enter password"
              />
              <span
                className="absolute right-[2px] top-1 cursor-pointer"
                onClick={showPassword}
              >
                <img
                  className="p-1"
                  width={25}
                  ref={ref}
                  src={passHide}
                  alt=""
                />
              </span>
            </div>
          </div>

          <button
            className="flex justify-center items-center bg-green-600 hover:bg-green-500  rounded-full px-4 py-2 w-fit border-green-900 border"
            onClick={savePassword}
          >
            <lord-icon
              src="https://cdn.lordicon.com/zrkkrrpl.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
        <div className="passwords">
          <h2 className="flex justify-center font-bold py-5">Your Passwords</h2>
          <table className="table-auto w-full">
            <thead className="bg-green-700 text-white">
              <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td className="text-center">Malcolm Lockyer</td>
                <td className="text-center">1961</td>
              </tr>
              <tr>
                <td className="text-center">Witchy Woman</td>
                <td className="text-center">The Eagles</td>
                <td className="text-center">1972</td>
              </tr>
              <tr>
                <td className="text-center">Shining Star</td>
                <td className="text-center">Earth, Wind, and Fire</td>
                <td className="text-center">1975</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Manager;
