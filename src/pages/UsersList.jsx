import React, { useState, useEffect } from "react";
import HeaderNav from "../components/template/HeaderNav/HeaderNav";
import Sidebar from "../components/template/Sidebar/Sidebar";
import TableUsers from "../components/Layouts/Users/TableUsers/TableUsers";
import FormEditUser from "../components/Fragments/FormEditUser";

export default function UsersList() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };


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

              {isEditModalOpen && (
                <FormEditUser setIsEditModalOpen={setIsEditModalOpen} />
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
