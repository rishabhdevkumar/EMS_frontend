import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./component/Navbar";
import AdminHeader from "./component/AdminHeader";
import Sidebar from "./component/Sidebar";

import EmployeeMenu from "./component/Employee_menu";
import EmployeeHeader from "./component/Employee_header";

import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import Employees from "./pages/Employees";
import Department from "./pages/Department";
import Salary from "./pages/Salary";
import Settings from "./pages/Settings";
import Add_Employee from "./pages/Add_Employee";
import Employee_Dashboard from "./pages/Employee_Dashboard";
import Employee_profile from "./pages/Employee_profile";
import { Typewriter } from "react-simple-typewriter";

function Layout() {
  const location = useLocation();
  const path = location.pathname;

  // Pages where Navbar should be hidden
  const hideNavbarRoutes = [
    "/admindashboard",
    "/employees",
    "/department",
    "/salary",
    "/settings",
    "/add_employee",
    "/employee_dashboard",
    "/employee_profile",
  ];

  // Admin pages
  const adminPages = [
    "/admindashboard",
    "/employees",
    "/department",
    "/salary",
    "/settings",
    "/add_employee",
  ];

  // Employee pages
  const employeePages = ["/employee_dashboard", "/employee_profile"];

  const isAdminPage = adminPages.includes(path);
  const isEmployeePage = employeePages.includes(path);

  return (
    <>
      {/* SHOW NAVBAR ONLY ON PUBLIC PAGES */}
      {!hideNavbarRoutes.includes(path) && <Navbar />}

      {/* ADMIN LAYOUT */}
      {isAdminPage && (
        <div>
          <Sidebar />
          <div className="w-full">
            {/* <AdminHeader /> */}
            <Routes>
              <Route path="/admindashboard" element={<AdminDashboard />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/department" element={<Department />} />
              <Route path="/salary" element={<Salary />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/add_employee" element={<Add_Employee />} />
            </Routes>
          </div>
        </div>
      )}

      {/* EMPLOYEE LAYOUT */}
      {isEmployeePage && (
        <div className="flex bg-gray-100 min-h-screen">
          <EmployeeMenu />
          <div className="ml-60 w-full">
            <EmployeeHeader />
            <Routes>
              <Route
                path="/employee_dashboard"
                element={<Employee_Dashboard />}
              />
              <Route path="/employee_profile" element={<Employee_profile />} />
            </Routes>
          </div>
        </div>
      )}

      {/* PUBLIC ROUTES */}
      {!isAdminPage && !isEmployeePage && (
        <Routes>
          <Route
            path="/"
            element={
              <div className="font-bold text-white text-5xl text-center mt-60">
                <Typewriter
                  words={["Employee Management System"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </div>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </>
  );
}

export default Layout;
