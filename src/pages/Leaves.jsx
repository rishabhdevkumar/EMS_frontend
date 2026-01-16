import React, { useState } from "react";
import AdminHeader from "../component/AdminHeader";
import Sidebar from "../component/Sidebar";

function Leaves() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const leaves = [
    {
      id: 1,
      empId: "EMP001",
      name: "Rahul Kumar",
      leaveType: "Casual Leave",
      department: "HR",
      days: 2,
      status: "Pending",
    },
    {
      id: 2,
      empId: "EMP002",
      name: "Neha Singh",
      leaveType: "Sick Leave",
      department: "Finance",
      days: 3,
      status: "Approved",
    },
    {
      id: 3,
      empId: "EMP003",
      name: "Amit Sharma",
      leaveType: "Paid Leave",
      department: "Development",
      days: 5,
      status: "Rejected",
    },
  ];

  const getStatusStyle = (status) => {
    if (status === "Approved") return "bg-green-400";
    if (status === "Rejected") return "bg-red-400";
    return "bg-yellow-400";
  };

  const filteredLeaves = leaves.filter((leave) => {
    const matchSearch =
      leave.name.toLowerCase().includes(search.toLowerCase()) ||
      leave.empId.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      filterStatus === "All" || leave.status === filterStatus;

    return matchSearch && matchStatus;
  });

  return (
    <div className="flex min-h-screen bg-sky-100 overflow-x-hidden">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="w-full md:ml-60 transition-all duration-300">
        <AdminHeader setIsOpen={setIsOpen} />

        <div className="p-4">
          <h1 className="text-2xl font-bold text-black mb-6 text-center">
            All Employees Leaves
          </h1>

          {/* 🔍 Search + Status Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-4">
            {/* Search */}
            <input
              type="text"
              placeholder="Search by name or emp id"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-sky-200 bg-white px-4 py-2 rounded-md w-full sm:w-1/3 text-gray-700"
            />

            {/* Status Buttons */}
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setFilterStatus("Pending")}
                className="bg-yellow-400 px-4 py-2 rounded text-xs font-bold"
              >
                Pending
              </button>
              <button
                onClick={() => setFilterStatus("Approved")}
                className="bg-green-400 px-4 py-2 rounded text-xs font-bold"
              >
                Approved
              </button>
              <button
                onClick={() => setFilterStatus("Rejected")}
                className="bg-red-400 px-4 py-2 rounded text-xs font-bold"
              >
                Rejected
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-100 text-black rounded-lg shadow">
              <thead className="text-center text-sm font-semibold border-b border-gray-300">
                <tr>
                  <th className="py-3 px-2">SL</th>
                  <th className="py-3 px-4">Emp ID</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Leave Type</th>
                  <th className="py-3 px-4">Department</th>
                  <th className="py-3 px-4">Days</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>

              <tbody className="text-center text-sm">
                {filteredLeaves.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="py-4 text-gray-500">
                      No leave requests found
                    </td>
                  </tr>
                ) : (
                  filteredLeaves.map((leave, index) => (
                    <tr key={leave.id} className="border-b border-gray-300">
                      <td className="py-3 px-2">{index + 1}</td>
                      <td className="py-3 px-4">{leave.empId}</td>
                      <td className="py-3 px-4">{leave.name}</td>
                      <td className="py-3 px-4">{leave.leaveType}</td>
                      <td className="py-3 px-4">{leave.department}</td>
                      <td className="py-3 px-4">{leave.days}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-3 py-1 rounded text-xs font-bold text-black ${getStatusStyle(
                            leave.status
                          )}`}
                        >
                          {leave.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <button className="bg-blue-400 px-3 py-1 rounded text-xs font-bold">
                          View
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

export default Leaves;
