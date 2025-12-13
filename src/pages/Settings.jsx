import React from "react";
import AdminHeader from "../component/AdminHeader";
import Sidebar from "../component/Sidebar";

function Settings() {
  return (
    <div className="flex bg-sky-100 min-h-screen">
      <Sidebar />
      <div className="ml-60 w-full text-white">
        <AdminHeader />
        <div className="p-4">
          <h2 className="text-2xl font-bold text-black mb-6">
            Personal Setting
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Settings;
