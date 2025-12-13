import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiFileText,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

function Employee_menu() {
  return (
    <div className="w-60 h-screen bg-slate-900 text-white fixed top-0 left-0 shadow-lg">
      <div className="px-6 py-3 text-2xl bg-teal-600 font-bold border-b border-gray-700">
        EmployeeMS
      </div>

      <ul className="mt-4 space-y-1">
        <li>
          <NavLink
            to="/employee_dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 ml-3 mr-3 rounded-md transition
              ${isActive ? "bg-gray-700 text-white" : "hover:bg-gray-800"}`
            }
          >
            <FiHome /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="employee_profile"
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 ml-3 mr-3 rounded-md transition
              ${isActive ? "bg-gray-700 text-white" : "hover:bg-gray-800"}`
            }
          >
            <FiUsers /> My Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to=""
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 ml-3 mr-3 rounded-md transition
              ${isActive ? "bg-gray-700 text-white" : "hover:bg-gray-800"}`
            }
          >
            <FiFileText /> Leaves
          </NavLink>
        </li>
        <li>
          <NavLink
            to=""
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 ml-3 mr-3 rounded-md transition
              ${isActive ? "bg-gray-700 text-white" : "hover:bg-gray-800"}`
            }
          >
            <FiUsers /> Salary
          </NavLink>
        </li>
        <li>
          <NavLink
            to=""
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 ml-3 mr-3 rounded-md transition
              ${isActive ? "bg-gray-700 text-white" : "hover:bg-gray-800"}`
            }
          >
            <FiSettings /> Settings
          </NavLink>
        </li>
      </ul>
      <div className="absolute bottom-6 w-full">
        <Link
          to="/logout"
          className="flex items-center gap-3 px-6 py-3 hover:bg-red-600 transition ml-3 mr-3 rounded-md"
        >
          <FiLogOut /> Logout
        </Link>
      </div>
    </div>
  );
}

export default Employee_menu;
