import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { add } from "../Pathfinder";
import "react-toastify/dist/ReactToastify.css";
let arr = [];
function AddConnections() {
  const [userInput, setUserInput] = useState([]);
  const [friend, setFriend] = useState();

  const notify = (msg) =>
    toast.success(msg, {
      autoClose: 2000,
    });

  function handleSubmit() {
    arr.pop();
    arr.push(friend);
    console.log("arr:", arr);
    add(userInput, friend);
    notify("user added 🎉");
  }

  return (
    <div className="flex justify-center gap-10 flex-col items-center h-[70%]">
      <h1 className="text-[1.5rem] font-semibold font-poppins">Welcome 👋</h1>
      <div className="flex flex-col gap-2">
        <input
          placeholder="user name"
          onChange={(e) => setUserInput(e.target.value)}
          className="p-2 rounded-md border-2 outline-none focus:ring-4 focus:ring-[#F7F4FF] font-poppins capitalize"
          type="text"
        />
        |
        <input
          placeholder="friends name"
          onChange={(e) => setFriend(e.target.value)}
          className="p-2 rounded-md border-2 outline-none focus:ring-4 focus:ring-[#F7F4FF] font-poppins capitalize"
          type="text"
        />
        <button
          onClick={(e) => handleSubmit(e)}
          className=" bg-[#FC793C] font-poppins rounded-md p-2 text-white  shadow-xl"
        >
          Add user{" "}
        </button>
      </div>
    </div>
  );
}

export default AddConnections;

// anish:["raghav","rahul","sameer"]
// raghav:["anish"],
// rahul : ["anish"]

// sameer : ["ayushi","kamlnath"],
// bhaskar:["ayushi" , "shanti"],
// ayushi :["bhaskar","sameer"],
//kamlanath :["shanti","sameer"],
//shanti:["kamalnath","bhaskar"]
