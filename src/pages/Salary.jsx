import React, { useState } from "react";
import AdminHeader from "../component/AdminHeader";
import Sidebar from "../component/Sidebar";

function Salary() {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    department: "",
    employeeId: "",
    basicSalary: "",
    allowances: "",
    deductions: "",
    payDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = { ...formData };
    console.log("Salary Data:", dataToSend);
    alert("Salary Added Successfully!");
  };

  return (
    <div className="flex min-h-screen bg-sky-100 overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
      <div className="w-full md:ml-60 transition-all duration-300">
        {/* Header */}
        <AdminHeader setIsOpen={setIsOpen} />

        {/* Content */}
        <div className="bg-white p-6 shadow-md max-w-3xl mx-auto mt-6">
          <h2 className="text-xl font-bold text-gray-700 mb-6">
            Add Employee Salary
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* Department */}
            <div>
              <label className="block text-gray-700 font-medium">
                Department
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select department</option>
                <option value="HR">HR</option>
                <option value="Sales">Sales</option>
                <option value="Finance">Finance</option>
                <option value="Development">Development</option>
              </select>
            </div>

            {/* Employee */}
            <div>
              <label className="block text-gray-700 font-medium">
                Employee
              </label>
              <select
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select employee</option>
                <option value="EMP001">EMP001 - Rahul</option>
                <option value="EMP002">EMP002 - Amit</option>
                <option value="EMP003">EMP003 - Neha</option>
              </select>
            </div>

            {/* Basic Salary */}
            <div>
              <label className="block text-gray-700 font-medium">
                Basic Salary
              </label>
              <input
                type="number"
                name="basicSalary"
                value={formData.basicSalary}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter basic salary"
              />
            </div>

            {/* Allowances */}
            <div>
              <label className="block text-gray-700 font-medium">
                Allowances
              </label>
              <input
                type="number"
                name="allowances"
                value={formData.allowances}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter allowances"
              />
            </div>

            {/* Deductions */}
            <div>
              <label className="block text-gray-700 font-medium">
                Deductions
              </label>
              <input
                type="number"
                name="deductions"
                value={formData.deductions}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter deductions"
              />
            </div>

            {/* Pay Date */}
            <div>
              <label className="block text-gray-700 font-medium">
                Pay Date
              </label>
              <input
                type="date"
                name="payDate"
                value={formData.payDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </form>

          {/* Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handleSubmit}
              className="px-8 py-2 bg-teal-600 text-white font-bold rounded-md hover:bg-teal-800 transition"
            >
              Add Salary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Salary;
