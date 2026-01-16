import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Content from "./component/Content";
import Register from "./pages/Register";
import Login from "./pages/Login";

import Sidebar from "./component/Sidebar";
import EmployeeMenu from "./component/Employee_menu";
import EmployeeHeader from "./component/Employee_header";

import AdminDashboard from "./pages/AdminDashboard";
import Employees from "./pages/Employees";
import Department from "./pages/Department";
import Salary from "./pages/Salary";
import Settings from "./pages/Settings";
import Leaves from "./pages/Leaves";
import Add_Employee from "./pages/Add_Employee";
import Employee_Dashboard from "./pages/Employee_Dashboard";
import Employee_profile from "./pages/Employee_profile";

function Layout() {
  const { pathname } = useLocation();

  const adminPages = [
    "/admindashboard",
    "/employees",
    "/department",
    "/salary",
    "/settings",
    "/leaves",
    "/add_employee",
  ];

  const employeePages = ["/employee_dashboard", "/employee_profile"];

  const hideNavbarFooter = [...adminPages, ...employeePages];

  const isAdminPage = adminPages.includes(pathname);
  const isEmployeePage = employeePages.includes(pathname);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {!hideNavbarFooter.includes(pathname) && <Navbar />}

      <main className="flex-1">
        {/* ADMIN */}
        {isAdminPage && (
          <div className="flex">
            <Sidebar />
            <div className="w-full">
              <Routes>
                <Route path="/admindashboard" element={<AdminDashboard />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/department" element={<Department />} />
                <Route path="/salary" element={<Salary />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/leaves" element={<Leaves />} />
                <Route path="/add_employee" element={<Add_Employee />} />
              </Routes>
            </div>
          </div>
        )}

        {isEmployeePage && (
          <div className="flex min-h-screen bg-gray-100">
            <EmployeeMenu />
            <div className="ml-60 w-full">
              <EmployeeHeader />
              <Routes>
                <Route
                  path="/employee_dashboard"
                  element={<Employee_Dashboard />}
                />
                <Route
                  path="/employee_profile"
                  element={<Employee_profile />}
                />
              </Routes>
            </div>
          </div>
        )}

        {!isAdminPage && !isEmployeePage && (
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        )}
      </main>

      {/* {!hideNavbarFooter.includes(pathname) && <Footer />} */}
    </div>
  );
}

export default Layout;
