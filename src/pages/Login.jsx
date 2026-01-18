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
      localStorage.setItem("user", JSON.stringify(user));

      if (role === "admin") {
        navigate("/admindashboard");
      } else {
        navigate("/"); 
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
      <div className="w-96 rounded-lg shadow-xl p-6 border border-slate-800 bg-slate-800">
        <h2 className="text-2xl text-purple-700 text-center mb-6 font-semibold">
          Login
        </h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm text-gray-400 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-transparent border border-slate-700 text-white rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-400 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-transparent border border-slate-700 text-white rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-700 py-2 text-white rounded-md hover:bg-purple-800"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          <p className="text-gray-400 mt-4 text-sm text-center">
            New user?{" "}
            <Link to="/register" className="text-purple-400">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
