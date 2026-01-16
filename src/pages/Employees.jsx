import React, { useEffect, useState } from "react";
import AdminHeader from "../component/AdminHeader";
import Sidebar from "../component/Sidebar";
import { Link } from "react-router-dom";
import { getAllUsers } from "../services/UserService";

function Employees() {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex min-h-screen bg-sky-100 overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
      <div className="w-full md:ml-60 transition-all duration-300">
        {/* Header */}
        <AdminHeader setIsOpen={setIsOpen} />

        <div className="p-4">
          <h1 className="text-2xl font-bold text-black mb-6 text-center">
            Manage Employees
          </h1>

          {/* Search + Button */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-4">
            <input
              type="text"
              placeholder="Search by employee"
              className="border border-sky-200 bg-sky-50 px-4 py-2 rounded-md w-full sm:w-1/3 text-gray-700"
            />

            <Link to="/add_employee">
              <button className="bg-teal-600 text-white font-bold px-4 py-2 rounded-md hover:bg-teal-700 w-full sm:w-auto">
                Add New Employee
              </button>
            </Link>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-100 text-black rounded-lg shadow">
              <thead className="text-center text-sm font-semibold border-b border-gray-300">
                <tr>
                  <th className="py-3 px-2">SL</th>
                  <th className="py-3 px-4">Profile</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">DOB</th>
                  <th className="py-3 px-4">Department</th>
                  <th className="py-3 px-4">Salary</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>

              <tbody className="text-center text-sm">
                {users.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="py-4 text-gray-500">
                      No employees found
                    </td>
                  </tr>
                ) : (
                  users.map((user, index) => (
                    <tr key={user._id} className="border-b border-gray-300">
                      <td className="py-3 px-2">{index + 1}</td>

                      <td className="py-3 px-4">
                        <img
                          src={user.profileImage || "https://via.placeholder.com/40"}
                          className="w-10 h-10 rounded-full mx-auto"
                          alt="profile"
                        />
                      </td>

                      <td className="py-3 px-4">{user.name}</td>
                      <td className="py-3 px-4">{user.email}</td>
                      <td className="py-3 px-4">{user.dob}</td>
                      <td className="py-3 px-4">{user.department}</td>
                      <td className="py-3 px-4">{user.salary}</td>

                      <td className="py-3 px-4 space-x-2 whitespace-nowrap">
                        <button className="bg-blue-400 px-3 py-1 rounded text-xs font-bold">
                          View
                        </button>
                        <button className="bg-green-400 px-3 py-1 rounded text-xs font-bold">
                          Edit
                        </button>
                        <button className="bg-yellow-400 px-3 py-1 rounded text-xs font-bold">
                          Salary
                        </button>
                        <button className="bg-red-400 px-3 py-1 rounded text-xs font-bold">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employees;
