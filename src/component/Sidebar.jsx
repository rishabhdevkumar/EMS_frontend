import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiFileText,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

function Sidebar() {
  return (
    <div className="w-60 h-screen bg-slate-900 text-white fixed top-0 left-0 shadow-lg">
      <div className="px-6 py-3 text-2xl bg-teal-600 font-bold border-b border-gray-700">
        EmployeeMS
      </div>

      <ul className="mt-4 space-y-1">
        <li>
          <NavLink
            to="/admindashboard"
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
            to="/employees"
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 ml-3 mr-3 rounded-md transition
              ${isActive ? "bg-gray-700 text-white" : "hover:bg-gray-800"}`
            }
          >
            <FiUsers /> Employees
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/department"
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 ml-3 mr-3 rounded-md transition
              ${isActive ? "bg-gray-700 text-white" : "hover:bg-gray-800"}`
            }
          >
            <FiUsers /> Departments
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/leaves"
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
            to="/salary"
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
            to="/settings"
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

export default Sidebar;
