import React,  { useState }  from "react";
import { Link } from "react-router-dom";
import { addUser } from "../services/UserService";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const dataToSend = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: "employee"
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white rounded-lg shadow-lg p-6 border border-purple-300">
        <h2 className="text-2xl font-semibold text-center text-purple-700 mb-4">
          Create an Account
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-bold">Full Name</label>
            <input name="name"
              type="text" value={formData.name} onChange={handleChange}
              className="w-full border border-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-200"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold">Email</label>
            <input name="email"
              type="email" value={formData.email} onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold">Phone</label>
            <input name="phone"
              type="tel" value={formData.phone} onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold">Password</label>
            <input name="password"
              type="password" value={formData.password} onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter password"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold">Confirm Password</label>
            <input name="confirmPassword"
              type="password" value={formData.confirmPassword} onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Re-enter password"
            />
          </div>
          <div className="mt-4">
            <button onClick={handleSubmit} className="w-full bg-purple-800 px-2 py-1.5 rounded-md text-white">
              SignUp
            </button>
            <label>
                Already have an Account?
                <Link
                to="/login"
                className="text-purple-800 font-medium">
                Login
              </Link>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
