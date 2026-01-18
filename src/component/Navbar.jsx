import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

          <div className="hidden md:flex gap-4">
            <Link
              to="/register"
              className="text-sm py-2 text-gray-300 hover:text-teal-600"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-300 text-gray-900"
            >
              Login
            </Link>
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
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
