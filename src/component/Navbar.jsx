import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const profileRef = useRef();

  useEffect(() => {
    setMenuOpen(false);
    setProfileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    setIsLoggedIn(!!token);
    setUserRole(role || null);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // Show employee profile menu only if logged in as employee
  const showEmployeeMenu = isLoggedIn && userRole === "employee";
  // Show login/register only if not logged in OR logged in as admin
  const showLoginRegister = !isLoggedIn || userRole === "admin";

  return (
    <nav className="fixed top-0 left-0 right-0 z-40">
      <div
        className={`mx-4 mt-4 rounded-2xl border border-blue-950 px-4 py-2 transition-all duration-500 shadow-xl shadow-slate-600/30 ${
          isScrolled
            ? "bg-slate-900/90 backdrop-blur-md"
            : "bg-slate-900/70 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-black bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent"
          >
            EMS
          </Link>

          <ul className="hidden md:flex gap-8 items-center text-gray-300 font-semibold">
            <li>
              <Link to="/" className="hover:text-teal-600 text-lg">
                <FaHome />
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-teal-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-teal-600">
                Employee
              </Link>
            </li>
          </ul>

          <div className="hidden md:flex items-center gap-4 relative">
            {showEmployeeMenu ? (
              <div ref={profileRef} className="relative">
                <button onClick={() => setProfileOpen(!profileOpen)}>
                  <img
                    src="https://i.pravatar.cc/40"
                    alt="profile"
                    className="w-9 h-9 rounded-full border-2 border-purple-500"
                  />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-40 bg-slate-800 rounded-xl shadow-lg border border-slate-700">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-300 hover:bg-slate-700 rounded-t-xl"
                    >
                      My Account
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-gray-300 hover:bg-slate-700"
                    >
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-red-400 hover:bg-slate-700 rounded-b-xl"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              showLoginRegister && (
                <>
                  <Link
                    to="/register"
                    className="text-gray-300 hover:text-teal-600"
                  >
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className="px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-300 text-gray-900"
                  >
                    Login
                  </Link>
                </>
              )
            )}
          </div>

          <button
            className="md:hidden text-gray-300 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 rounded-xl bg-slate-800/90 backdrop-blur-md">
            <ul className="flex flex-col gap-4 p-4 text-gray-300 font-semibold">
              <li>
                <Link className="block py-2" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="block py-2" to="/">
                  About
                </Link>
              </li>
              <li>
                <Link className="block py-2" to="/">
                  Employee
                </Link>
              </li>

              <hr className="border-gray-700" />

              {showEmployeeMenu ? (
                <>
                  <li>
                    <Link className="block py-2" to="/profile">
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link className="block py-2" to="/settings">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left py-2 text-red-400"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                showLoginRegister && (
                  <>
                    <li>
                      <Link className="block py-2" to="/register">
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/login"
                        className="block py-2 text-center rounded-full bg-gradient-to-r from-purple-400 to-purple-600 text-gray-900"
                      >
                        Login
                      </Link>
                    </li>
                  </>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
