import React, { useEffect, useState } from "react";
import AdminHeader from "../component/AdminHeader";
import Sidebar from "../component/Sidebar";
import { Link } from "react-router-dom";
import { getAllUsers } from "../services/UserService";

function Employees() {
  const [users, setUsers] = useState([]);

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
    <div className="flex bg-sky-100 min-h-screen">
      <Sidebar />
      <div className="ml-60 w-full text-white">
        <AdminHeader />

        <div className="p-4">
          <h1 className="text-2xl font-bold text-black mb-6 text-center">
            Manage Employees
          </h1>

          <div className="flex items-center justify-between mb-4">
            <input
              type="text"
              placeholder="Search by employee"
              className="border border-gray-700 px-4 py-1 rounded-md w-1/3 text-gray-500"
            />

            <Link to="/add_employee">
              <button className="bg-teal-600 text-white font-bold px-4 py-1 rounded-md hover:bg-teal-700">
                Add New Employee
              </button>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-100 text-black rounded-lg shadow">
              <thead className="text-center text-sm font-semibold border-b-3 border-gray-300">
                <tr>
                  <th className="py-3 px-2">SL No</th>
                  <th className="py-3 px-4">Profile</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">DOB</th>
                  <th className="py-3 px-4">Department</th>
                  <th className="py-3 px-4">Salary</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {users.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="py-4 text-gray-500">
                      No employees found
                    </td>
                  </tr>
                ) : (
                  users.map((user, index) => (
                    <tr key={user._id} className="border-b-3 border-gray-300">
                      <td className="py-3 px-2">{index + 1}</td>

                      <td className="py-3 px-4">
                        <img
                          src={
                            user.profileImage ||
                            "https://via.placeholder.com/40"
                          }
                          className="w-10 h-10 rounded-full mx-auto"
                          alt="profile"
                        />
                      </td>

                      <td className="py-3 px-4">{user.name}</td>
                      <td className="py-3 px-4">{user.email}</td>
                      <td className="py-3 px-4">{user.dob}</td>
                      <td className="py-3 px-4">{user.department}</td>
                      <td className="py-3 px-4">{user.salary}</td>

                      <td className="py-3 px-4 space-x-2">
                        <button className="bg-blue-400 text-black font-bold px-4 py-1 rounded text-sm">
                          View
                        </button>
                        <button className="bg-green-400 text-black font-bold px-4 py-1 rounded text-sm">
                          Edit
                        </button>
                        <button className="bg-yellow-400 text-black font-bold px-4 py-1 rounded text-sm">
                          Salary
                        </button>
                        <button className="bg-red-400 text-black font-bold px-4 py-1 rounded text-sm">
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
