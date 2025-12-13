import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full bg-purple-800 px-2 py-2">
      <nav className="flex gap-10 px-3 py-2">
        <ul className="flex gap-10 list-none text-white">
          <li>
            <Link to="/register" className="no-underline text-white">
              Register
            </Link>
          </li>
          <li>
            <Link to="/login" className="no-underline text-white">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
