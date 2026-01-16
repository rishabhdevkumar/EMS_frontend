import React, { useState } from "react";
import AdminHeader from "../component/AdminHeader";
import Sidebar from "../component/Sidebar";
import { FiUsers, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-sky-100 overflow-x-hidden">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="w-full md:ml-60 transition-all duration-300">
        {/* Header */}
        <AdminHeader setIsOpen={setIsOpen} />

        <div className="p-6">
          <h2 className="text-2xl font-bold text-black mb-4">
            Dashboard Overview
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <Card icon={<FiUsers />} title="Total Employees" bg="bg-teal-600" />
            <Card
              icon={<FiCheckCircle />}
              title="Active Employees"
              bg="bg-yellow-400"
            />
            <Card
              icon={<FiAlertCircle />}
              title="Pending Tasks"
              bg="bg-red-400"
            />
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-xl font-bold text-black mb-6">Leave Details</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <Card icon={<FiUsers />} title="Leave Applied" bg="bg-teal-600" />
            <Card
              icon={<FiCheckCircle />}
              title="Leave Approved"
              bg="bg-green-400"
            />
            <Card
              icon={<FiAlertCircle />}
              title="Leave Pending"
              bg="bg-yellow-400"
            />
            <Card
              icon={<FiAlertCircle />}
              title="Leave Rejected"
              bg="bg-red-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ icon, title, bg }) {
  return (
    <div className="bg-white shadow rounded-md flex items-center h-16">
      <div
        className={`${bg} text-white h-full w-16 flex items-center justify-center text-lg`}
      >
        {icon}
      </div>
      <div className="ml-4">
        <h2 className="text-md font-bold text-gray-800">{title}</h2>
        <p className="text-base font-bold text-blue-600">0</p>
      </div>
    </div>
  );
}

export default AdminDashboard;
