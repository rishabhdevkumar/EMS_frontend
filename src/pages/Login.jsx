import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await API.post("/api/auth/login", {
        email,
        password,
      });

      console.log("LOGIN RESPONSE 👉", res.data);

      const { token, role, user } = res.data.data;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("userName", user.name);

      if (role === "admin") {
        navigate("/admindashboard");
      } else {
        navigate("/employee/dashboard");
      }
    } catch (error) {
      console.error("LOGIN ERROR 👉", error);
      alert("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="w-96 max-w-md rounded-lg shadow-xl p-6 border border-slate-800 bg-slate-800">
        <header className="text-2xl text-purple-700 text-center mb-6 font-semibold">
          Login
        </header>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Email Id
            </label>
            <input
              placeholder="Enter Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 text-gray-100 border border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-200 bg-transparent"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Password
            </label>
            <input
              placeholder="Enter Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-slate-700 text-gray-100 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-200 bg-transparent"
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label className="inline-flex items-center text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Remember Me</span>
            </label>
            <a href="#" className="text-gray-500 text-sm">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-800 py-2 text-white rounded-md hover:bg-purple-900 transition disabled:opacity-60"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
          <p className="text-gray-700 mt-4 text-sm text-center">
            Create an Account?{" "}
            <Link to="/register" className="text-gray-500 font-medium">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
