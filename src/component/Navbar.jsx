import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "py-2" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`relative rounded-2xl border border-blue-950 px-6 py-2 transition-all duration-500 shadow-xl shadow-slate-600/30 ${
            isScrolled
              ? "bg-transparent/90 backdrop-blur-md shadow-lg"
              : "bg-transparent/70 backdrop-blur-sm shadow-sm"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-2xl font-black bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent"
            >
              EMS
            </Link>

            <ul className="flex gap-8 items-center text-sm font-semibold text-gray-300 absolute left-1/2 -translate-x-1/2">
              <li>
                <Link
                  to="/"
                  className="hover:text-teal-600 transition-colors text-lg"
                  title="Home"
                >
                  <FaHome />
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="hover:text-teal-600 transition-colors"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="hover:text-teal-600 transition-colors"
                >
                  Employee
                </Link>
              </li>
            </ul>

            <div className="flex gap-4 ml-auto">
              <Link
                to="/register"
                className="mt-2 text-sm font-semibold text-gray-300 hover:text-teal-600 transition-colors"
              >
                Register
              </Link>

              <Link
                to="/login"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-300 hover:from-purple-500 hover:to-pink-400 text-gray-200 transition-all"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
