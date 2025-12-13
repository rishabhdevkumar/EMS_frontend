import React from "react";
import AdminHeader from "../component/AdminHeader";
import Sidebar from "../component/Sidebar";
import { FiUsers, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

function AdminDashboard() {
  return (
    <div className="flex bg-sky-100 min-h-screen">
      <Sidebar />
      <div className="ml-60 w-full text-white">
        <AdminHeader />
        <div className="p-4">
          <h2 className="text-2xl font-bold text-black mb-4">
            Dashboard Overview
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <div className="bg-white shadow rounded-md flex items-center h-16">
              <div className="bg-teal-600 text-white h-full w-15 flex items-center justify-center text-lg">
                <FiUsers />
              </div>
              <div className="ml-4">
                <h2 className="text-md font-bold text-gray-800">
                  Total Employees
                </h2>
                <p className="text-base font-bold text-blue-600"></p>
              </div>
            </div>
            <div className="bg-white shadow rounded-md flex items-center h-16">
              <div className="bg-yellow-400 text-white h-full w-15 flex items-center justify-center text-lg">
                <FiCheckCircle />
              </div>
              <div className="ml-4">
                <h2 className="text-md font-bold text-gray-800">
                  Active Employees
                </h2>
                <p className="text-base font-bold text-green-600"></p>
              </div>
            </div>
            <div className="bg-white shadow rounded-md flex items-center h-16">
              <div className="bg-red-400 text-white w-15 h-full flex items-center justify-center text-base">
                <FiAlertCircle />
              </div>
              <div className="ml-4">
                <h2 className="text-md font-bold text-gray-800">
                  Pending Tasks
                </h2>
                <p className="text-base font-bold text-red-600"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold text-black mb-6">Leave Details</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="bg-white shadow flex items-center h-16">
              <div className="bg-teal-600 text-white h-full w-15 flex items-center justify-center text-lg">
                <FiUsers />
              </div>
              <div className="ml-4">
                <h2 className="text-md font-bold text-gray-800">
                  Leave Applied
                </h2>
                <p className="text-base font-bold text-blue-600"></p>
              </div>
            </div>
            <div className="bg-white shadow flex items-center h-16">
              <div className="bg-green-300 text-white h-full w-15 flex items-center justify-center text-lg">
                <FiCheckCircle />
              </div>
              <div className="ml-4">
                <h2 className="text-md font-bold text-gray-800">
                  Leave Approved
                </h2>
                <p className="text-base font-bold text-green-600"></p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="bg-white shadow flex items-center h-16 mt-8">
              <div className="bg-yellow-400 text-white w-15 h-full flex items-center justify-center text-base">
                <FiAlertCircle />
              </div>
              <div className="ml-4">
                <h2 className="text-md font-bold text-gray-800">
                  Leave Pending
                </h2>
                <p className="text-base font-bold text-red-600"></p>
              </div>
            </div>
            <div className="bg-white shadow flex items-center h-16 mt-8">
              <div className="bg-red-400 text-white w-15 h-full flex items-center justify-center text-base">
                <FiAlertCircle />
              </div>
              <div className="ml-4">
                <h2 className="text-md font-bold text-gray-800">
                  Leave Rejected
                </h2>
                <p className="text-base font-bold text-red-600"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
