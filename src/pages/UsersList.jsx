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
    try {
      const storedUsers = localStorage.getItem("users");
      if (storedUsers) {
        setUsers(JSON.parse(storedUsers));
      }
    } catch (error) {
      console.error("Error parsing users from localStorage:", error);
      // Optionally, clear localStorage or set a default value
      localStorage.removeItem("users");
    }
  }, []);

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const generateUserId = (role) => {
    const prefix = {
      Admin: "ADM",
      Helper: "HLP",
      Staff: "STF",
    };
    const randomNum = Math.floor(100 + Math.random() * 900);
    return `${prefix[role]}${randomNum}`;
  };

  const handleSaveUser = (updatedUser) => {
    const updatedUsers = users.map((user) => {
      if (user.id === selectedUser.id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });

    setUsers(updatedUsers);

    // Simpan ke localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Tutup modal edit
    setIsEditModalOpen(false);
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);

    // Perbarui state
    setUsers(updatedUsers);

    // Simpan perubahan ke localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));
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
              <TableUsers
                handleEditUser={handleEditUser}
                users={users}
                handleDeleteUser={handleDeleteUser}
              />

              {isEditModalOpen && (
                <FormEditUser
                  setIsEditModalOpen={setIsEditModalOpen}
                  selectedUser={selectedUser}
                  onSave={handleSaveUser}
                  generateUserId={generateUserId}
                />
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
