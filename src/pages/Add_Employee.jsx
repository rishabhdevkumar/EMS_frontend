import React, { useState } from "react";
import AdminHeader from "../component/AdminHeader";
import Sidebar from "../component/Sidebar";
import { addUser } from "../services/UserService";

function Add_Employee() {

  const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
    email: "",
    dob: "",
    gender: "",
    department: "",
    salary: "",
    role: "",
    password: "",
    phone: ""
  });

  const handleChange = (e) => { 
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataToSend = {
        employeeId: formData.employeeId,
        name: formData.name,
        email: formData.email,
        dob: formData.dob,
        gender: formData.gender,
        department: formData.department,
        salary: formData.salary,
        phone: formData.phone,
        password: formData.password,
        role: formData.role || "employee"
      };

      const res = await addUser(dataToSend);
      alert("Registered Successfully!");
      console.log(res.data);

    } catch (error) {
      console.log("API ERROR:", error);
      alert("Registration failed (Backend Error 500)");
    }
  };

  return (
    <div className="flex bg-sky-100 min-h-screen">
      <Sidebar />
      <div className="ml-60 w-full">
        <AdminHeader />

        <div className="bg-white p-6 shadow-md max-w-3xl mx-auto mt-6">
          <h2 className="text-xl font-bold text-gray-700 mb-6">Add New Employee</h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label className="block text-gray-700 font-medium">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md">
                <option value="">Select role</option>
                <option value="Employee">Employee</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Employee ID</label>
              <input
                type="text"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="EMP001"/>
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter email"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Department</label>
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

            <div>
              <label className="block text-gray-700 font-medium">Salary</label>
              <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter salary"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter password"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Phone</label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter phone"
              />
            </div>

          </form>

          <div className="mt-4 text-center">
            <button
              onClick={handleSubmit}
              className="px-6 py-1 bg-teal-600 text-white font-bold rounded-md hover:bg-teal-800 transition"
            >
              Add Employee
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Add_Employee;
