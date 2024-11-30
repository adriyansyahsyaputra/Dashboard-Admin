import React, { useState } from "react";
import Sidebar from "../components/template/Sidebar/Sidebar";
import HeaderNav from "../components/template/HeaderNav/HeaderNav";
import LogActivity from "../components/Layouts/Users/Activity/LogActivity";

export default function LogActivityUsers() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="min-h-lvh flex bg-gray-100">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <div
          className={`flex-1 transition-all duration-300 ${
            isSidebarOpen ? "ml-64" : "ml-20"
          }`}
        >
          <HeaderNav />

          <main className="p-6">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <LogActivity />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
