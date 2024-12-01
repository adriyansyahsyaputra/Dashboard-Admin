import React, { useState, useEffect } from "react";
import { Eye, EyeOff, MoreVertical, Pencil, Trash2 } from "lucide-react";

const TableUsers = () => {
  const [visiblePasswords, setVisiblePasswords] = useState({});
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const togglePasswordVisibility = (userId) => {
    setVisiblePasswords((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  };

  const toggleDropdown = (userId) => {
    setActiveDropdown(activeDropdown === userId ? null : userId);
  };

  const getRoleColor = (role) => {
    switch (role) {
      case "Admin":
        return "bg-red-100 text-red-800";
      case "Helper":
        return "bg-green-100 text-green-800";
      case "Staff":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4 bg-gray-50 border-b">
        <h2 className="text-xl font-semibold text-gray-800">User Management</h2>
      </div>
      <table className="w-full">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Password
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Birth Date
            </th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.userId} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                {user.userId}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                {user.name}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                {user.email}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm">
                <div className="flex items-center space-x-2">
                  {visiblePasswords[user.userId]
                    ? user.password
                    : "*".repeat(user.password.length)}
                  <button
                    onClick={() => togglePasswordVisibility(user.userId)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    {visiblePasswords[user.userId] ? (
                      <Eye size={16} />
                    ) : (
                      <EyeOff size={16} />
                    )}
                  </button>
                </div>
              </td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(
                    user.role
                  )}`}
                >
                  {user.role}
                </span>
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                {user.birthdate}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-right">
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown(user.userId)}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    <MoreVertical size={20} />
                  </button>
                  {activeDropdown === user.userId && (
                    <div className="absolute right-0 z-10 w-48 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          <Pencil size={16} className="mr-2" /> Edit
                        </button>
                        <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                          <Trash2 size={16} className="mr-2" /> Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUsers;
