import React, { useState, useEffect } from "react";
import { Bell, Search, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Menambahkan useNavigate untuk routing

export default function HeaderNav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

 useEffect(() => {
   const token = localStorage.getItem("token");
   if (token) {
     const currentUser = localStorage.getItem("currentUser");
     if (currentUser) {
       setUser(JSON.parse(currentUser));
     }
   } else {
     setUser(null);
   }
 }, []);

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("currentUser");
  navigate("/login");
};


  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center flex-1">
          <div className="relative max-w-md w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
            />
            <Search
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 relative">
          <button className="p-2 rounded-lg hover:bg-gray-100 relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
            >
              <User size={20} />
              <span className="hidden sm:inline">
                {user ? user.name : "Guest"}{" "}
              </span>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 p-3 text-left hover:bg-gray-100"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
