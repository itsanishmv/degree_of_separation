import React, { useState } from "react";
import { HiOutlineUserAdd } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [iconColor, setIconColor] = useState();
  const navigate = useNavigate();
  function goToAddUser() {
    navigate("/");
    setIconColor("#FD6722");
  }
  return (
    <div className=" absolute bottom-0 h-32 left-0 right-0 flex flex-col justify-around items-center ">
      <div className="bg-[#F7F4FF] w-[100%] items-center h-[30%] flex justify-center text-[#7885B6]">
        please press below buttons
      </div>
      <div className="flex justify-around w-[100%]">
        <div className="flex flex-col items-center">
          <button onClick={() => navigate("/list")}>
            <HiOutlineUserAdd
              style={{ height: "30px", width: "30px", color: "#828FB1" }}
            />
          </button>
          <h5 className=" font-medium text-xs text-[#828FB1]">List</h5>
        </div>
        <div className="flex flex-col items-center">
          <button onClick={goToAddUser}>
            <HiOutlineUserAdd
              style={{
                height: "30px",
                width: "30px",
                color: "#828FB1",
              }}
            />
          </button>
          <h5 className=" font-medium text-xs text-[#828FB1]">Add User</h5>
        </div>

        <div className="flex flex-col items-center">
          <button>
            <HiOutlineUserAdd
              style={{ height: "30px", width: "30px", color: "#828FB1" }}
            />
          </button>
          <h5 className=" font-medium text-xs text-[#828FB1]">
            Add connection
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
