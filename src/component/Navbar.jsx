import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 min-h-screen overflow-y-scroll ${
        isScrolled ? "py-2" : "py-6"
      }`}
    >
      <div
        className={`relative rounded-4xl border border-blue-950 px-4 py-2 ml-4 mr-4 transition-all duration-500 shadow-xl shadow-slate-600/30 ${
          isScrolled
            ? "bg-transparent/90 backdrop-blur-md"
            : "bg-transparent/70 backdrop-blur-sm"
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
              className="text-sm py-2 font-semibold text-gray-300 hover:text-teal-600"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="px-3 py-1.5 rounded-full bg-linear-to-r from-purple-400 to-pink-300 text-gray-200 hover:from-purple-500 hover:to-pink-400"
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
            <ul className="flex flex-col gap-4 text-gray-300 font-semibold">
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Employee
                </Link>
              </li>
              <hr className="border-gray-700" />
              <li>
                <Link to="/register" onClick={() => setMenuOpen(false)}>
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center rounded-full bg-linear-to-r from-purple-400 to-purple-600 text-gray-900"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* </div> */}
    </nav>
  );
}

export default Navbar;
