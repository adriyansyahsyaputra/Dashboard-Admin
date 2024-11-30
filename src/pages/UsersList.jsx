import React, { useState } from "react";
import HeaderNav from "../components/template/HeaderNav/HeaderNav";
import Sidebar from "../components/template/Sidebar/Sidebar";
import TableUsers from "../components/Layouts/Users/TableUsers/TableUsers";

export default function UsersList() {
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
                <TableUsers />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
