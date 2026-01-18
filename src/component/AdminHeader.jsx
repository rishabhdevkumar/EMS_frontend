import React, { useEffect, useState } from "react";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function AdminHeader({ setIsOpen }) {
  const navigate = useNavigate();

  // ✅ Use state to track username and update on mount
  const [userName, setUserName] = useState("Admin");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.clear(); // Remove token, role, username
    navigate("/login");   // Redirect to login page
  };

  return (
    <header className="w-full bg-teal-600 shadow-sm px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu />
        </button>

        {/* Welcome message */}
        <h2 className="text-xl font-semibold text-white">
          Welcome, {userName}
        </h2>
      </div>

      {/* Logout button */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-1 transition bg-teal-700 text-white rounded-md hover:bg-red-600"
      >
        Logout <FiLogOut />
      </button>
    </header>
  );
}

export default AdminHeader;
