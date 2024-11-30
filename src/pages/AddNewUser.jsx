import React, { useState } from "react";
import Sidebar from "../components/template/Sidebar/Sidebar";
import HeaderNav from "../components/template/HeaderNav/HeaderNav";
import HeadUserAdd from "../components/Layouts/Users/UserAdd/HeadUserAdd";
import FormAddUser from "../components/Fragments/FormAddUser";

export default function AddNewUser() {
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
            <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <HeadUserAdd />
            <FormAddUser />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
