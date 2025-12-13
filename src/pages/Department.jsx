import React from "react";
import AdminHeader from "../component/AdminHeader";
import Sidebar from "../component/Sidebar";
import { Link } from "react-router-dom";

function Department() {
  return (
    <div className="flex bg-sky-100 min-h-screen">
      <Sidebar />
      <div className="ml-60 w-full text-white">
        <AdminHeader />
        <div className="p-4">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            Manage Departments
          </h2>
          <div className="flex items-center justify-between mb-4">
            <input
              type="text"
              placeholder="Search by department name"
              className="border border-gray-700 px-4 py-1 rounded-md w-1/3 text-gray-500"
            />
            <button className="bg-teal-600 text-white font-bold px-4 py-1 rounded-md hover:bg-teal-700">
              <Link to="/add_employee">Add New Department</Link>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-100 text-black rounded-lg shadow">
              <thead className="text-center text-sm font-semibold border-b-3 border-gray-300">
                <tr>
                  <th className="py-3 px-2">SL No</th>
                  <th className="py-3 px-4">Department Name</th>
                  <th className="py-3 px-4">Description</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr className="border-b-3 border-gray-300">
                  <td className="py-3 px-2">1</td>
                  <td className="py-3 px-4">Mechanical</td>
                  <td className="py-3 px-4">Hello</td>
                  <td className="py-3 px-4 space-x-2">
                    <button className="bg-green-400 text-black font-bold px-4 py-1 rounded text-sm">
                      Edit
                    </button>
                    <button className="bg-red-400 text-black font-bold px-4 py-1 rounded text-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Department;
