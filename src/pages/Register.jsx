import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addUser } from "../services/UserService";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataToSend = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: "employee",
      };

      const res = await addUser(dataToSend);
      alert("Registered Successfully!");
      console.log(res.data);
    } catch (error) {
      console.log(error);
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-18 flex justify-center items-center bg-slate-900">
      <div className="w-96 bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-800">
        <h2 className="text-2xl font-semibold text-center text-purple-700 mb-4">
          Create an Account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-500 font-bold">Full Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-slate-700 text-gray-100 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-slate-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-500 font-bold">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-slate-700 text-gray-100 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-slate-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-500 font-bold">Phone</label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-slate-700 text-gray-100 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-slate-500"
              placeholder="Enter phone"
            />
          </div>
          <div>
            <label className="block text-gray-500 font-bold">Password</label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-slate-700 text-gray-100 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-slate-500"
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 py-2 rounded-md text-white hover:bg-slate-600 transition"
          >
            Sign Up
          </button>
          <p className="text-center text-gray-700 text-sm">
            Already have an Account?{" "}
            <Link to="/login" className="text-gray-500 font-medium">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
