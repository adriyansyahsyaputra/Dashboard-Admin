import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom"; // Tambahkan useLocation
import {
  LayoutDashboard,
  Package,
  Users,
  Settings,
  MessageSquare,
  History,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Dot,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, to: "/" },
  {
    name: "Products",
    icon: Package,
    hasDropdown: true,
    dropdownItems: [
      { name: "Products List", to: "/products/list" },
      { name: "Products View", to: "/products/view" },
      { name: "Products Upload", to: "/products/upload" },
    ],
  },
  { name: "Users", icon: Users, to: "/users" },
  { name: "Settings", icon: Settings, to: "/settings" },
  { name: "Message", icon: MessageSquare, to: "/messages" },
  { name: "History", icon: History, to: "/history" },
];

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const location = useLocation(); // Ambil lokasi rute saat ini
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (itemName) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white shadow-lg transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-20"
        } flex flex-col z-20`}
      >
        {/* Logo Area */}
        <div className="flex items-center justify-between p-4 border-b">
          <h1
            className={`font-bold text-xl text-blue-600 ${
              !isSidebarOpen && "hidden"
            }`}
          >
            Dashboard Admin
          </h1>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="p-4 flex-1 overflow-y-auto">
          {menuItems.map((item) => (
            <div key={item.name} className="mb-2">
              <Link to={item.to}>
                <button
                  onClick={() => {
                    if (item.hasDropdown) {
                      handleDropdown(item.name);
                    }
                  }}
                  className={`w-full flex items-center gap-4 p-3 rounded-lg transition-colors ${
                    location.pathname === item.to && !item.hasDropdown
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <item.icon size={20} />
                  <span className={`${!isSidebarOpen && "hidden"}`}>
                    {item.name}
                  </span>
                  {item.hasDropdown && (
                    <span className="ml-auto">
                      {isSidebarOpen &&
                        (openDropdown === item.name ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        ))}
                    </span>
                  )}
                </button>
              </Link>

              {/* Dropdown Items */}
              {item.hasDropdown && (
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openDropdown === item.name ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div className="mt-2 pl-5 space-y-2">
                    {item.dropdownItems.map((subItem) => (
                      <Link key={subItem.name} to={subItem.to}>
                        <button
                          className={`w-full text-left text-sm text-gray-600 p-2 rounded-lg flex items-center gap-2 transition-colors ${
                            location.pathname === subItem.to
                              ? "bg-blue-50 text-blue-600"
                              : "hover:bg-gray-50"
                          }`}
                        >
                          <Dot size={24} />
                          {subItem.name}
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  setIsSidebarOpen: PropTypes.func.isRequired,
};
