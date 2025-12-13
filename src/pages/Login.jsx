import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex items-center justify-center h-150 bg-gray-100">
      <div className="w-90 rounded-lg shadow-xl p-6 border border-gray-200">
        <header className="text-2xl text-gray-700 text-center mb-4 font-semibold">
          Login
        </header>
        <form action="">
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Email Id
              </label>
              <input
                placeholder="Enter Email"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Password
              </label>
              <input
                placeholder="Enter Password"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-100"
              />
            </div>
            <div className="mb-4 flex items-center justify-between">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-600">Remember Me</span>
              </label>
              <a href="" className="text-purple-800">
                Forgot Password
              </a>
            </div>
            <div className="mb-4">
              <button className="w-full bg-purple-800 px-2 py-1.5 text-white">
                SignIn
              </button>
              <label className="text-gray-700 mt-2">
                Create an Account?
                <Link to="/register" className="text-purple-800 font-medium">
                  Register
                </Link>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
