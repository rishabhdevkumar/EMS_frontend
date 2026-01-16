import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiFileText,
  FiSettings,
  FiLogOut,
  FiX,
} from "react-icons/fi";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-opacity-40 z-40 md:hidden"
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 z-50 w-60 h-screen bg-slate-800 text-white shadow-lg
          transform transition-transform duration-300 will-change-transform
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0`}
      >
        <div className="flex items-center justify-between px-6 py-3 text-2xl bg-teal-600 font-bold">
          EMS
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(false)}
          >
            <FiX />
          </button>
        </div>

        <ul className="mt-4 space-y-1">
          <li>
            <NavLink
              to="/admindashboard"
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 ml-3 mr-3 rounded-md
              ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`
              }
            >
              <FiHome /> Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/employees"
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 ml-3 mr-3 rounded-md
              ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`
              }
            >
              <FiUsers /> Employees
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/department"
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 ml-3 mr-3 rounded-md
              ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`
              }
            >
              <FiUsers /> Departments
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/leaves"
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 ml-3 mr-3 rounded-md
              ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`
              }
            >
              <FiFileText /> Leaves
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/salary"
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 ml-3 mr-3 rounded-md
              ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`
              }
            >
              <FiUsers /> Salary
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 ml-3 mr-3 rounded-md
              ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`
              }
            >
              <FiSettings /> Settings
            </NavLink>
          </li>
        </ul>

        <div className="absolute bottom-6 w-full">
          <Link
            to="/logout"
            className="flex items-center gap-3 px-6 py-3 hover:bg-red-500 ml-3 mr-3 rounded-md"
          >
            <FiLogOut /> Logout
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
