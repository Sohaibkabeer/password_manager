import React from "react";
import passView from "../assets/view_eye.png";
import passHide from "../assets/hide_eye.png";
import { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'; // for random id generation

const Manager = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const ref = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    if (ref.current.src.includes(passView)) {
      ref.current.src = passHide;
      passwordRef.current.type = 'text' 
    } else {
      ref.current.src = passView;
      passwordRef.current.type = 'password' 
    }
  };

  const savePassword = () => {
    setPasswordArray([...passwordArray, {...form, id:uuidv4()}]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id:uuidv4()}]));
  };

  const deletePassword = (id) => {

    let cnfrm = confirm("Do you want to delete?")
    if(cnfrm){
      setPasswordArray(passwordArray.filter(item=>item.id!==id))
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)));
    }
  };

  const editPassword = (id) => {
    setForm(passwordArray.filter(item=>item.id===id)[0])
    setPasswordArray(passwordArray.filter(item=>item.id!==id))
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
                ref={passwordRef}
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
                  src={passView}
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
            Save
          </button>
        </div>
        <div className="passwords">
          <h2 className="flex justify-center text-2xl font-bold py-5">
            Your Passwords
          </h2>
          {passwordArray.length === 0 && <div> No password to show </div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item)=>{
                  return<tr>
                    <td className="py-2 border border-white text-center w-32"><a href={item.site} target='_blank'>{item.site}</a></td>
                    <td className="py-2 border border-white text-center w-32">{item.username}</td>
                    <td className="py-2 border border-white text-center w-32">{item.password}</td>
                    <td className="py-2 border border-white text-center w-32"><span className="cursor-poiner mx-2"><button onClick={()=>{editPassword(item.id)}}>Edit</button></span><span><button onClick={()=>{deletePassword(item.id)}}>Delete</button></span></td>
                  </tr>
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
