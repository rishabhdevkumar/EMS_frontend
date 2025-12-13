import React from "react";
import { FiLogOut } from "react-icons/fi";

function Employee_header() {
  return (
    <header className="w-full bg-teal-600 shadow-sm px-6 py-3 flex items-center justify-between">
      <h2 className="text-xl font-semibold text-white">Welcome, Employee</h2>
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-3 px-4 py-1 transition bg-teal-700 text-white rounded-md hover:bg-red-600">
          Logout <FiLogOut />
        </button>
      </div>
    </header>
  );
}

export default Employee_header;
