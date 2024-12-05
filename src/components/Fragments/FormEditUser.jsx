import React, { useState, useEffect } from "react";
import { User, Mail, Lock, Users, Calendar, Eye, EyeOff } from "lucide-react";
import PropTypes from "prop-types";
import InputLabel from "../Elements/Input/InputLabel";

const FormEditUser = ({
  setIsEditModalOpen,
  selectedUser,
  onSave,
  generateUserId,
}) => {
  const [userData, setUserData] = useState({
    id: selectedUser?.id || null,
    name: selectedUser?.name || "",
    email: selectedUser?.email || "",
    password: selectedUser?.password || "",
    role: selectedUser?.role || "Staff",
    birthdate: selectedUser?.birthdate || "",
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Generate new ID if role changes or no ID exists
    if (!userData.id || userData.role !== selectedUser?.role) {
      const newId = generateUserId(userData.role);
      setUserData((prevData) => ({
        ...prevData,
        id: newId,
      }));
    }
  }, [userData.role, userData.id, selectedUser, generateUserId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure all required fields are filled
    if (!userData.name || !userData.email || !userData.role) {
      alert("Please fill in all required fields");
      return;
    }

    onSave(userData);
    setIsEditModalOpen(false);
  };

   const togglePasswordVisibility = () => {
     setShowPassword(!showPassword);
   };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-6 mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
          <User className="mr-2 text-blue-600" size={24} />
          Edit User Profile
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <InputLabel 
            htmlFor="name"
            label="Name"
            icon={<User className="text-gray-500" size={16} />}
            type="text"
            id="name"
            value={userData.name}
            onChange={handleInputChange}
            className="border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <InputLabel 
            htmlFor="email"
            label="Email"
            icon={<Mail className="text-gray-500" size={16} />}
            type="email"
            id="email"
            value={userData.email}
            onChange={handleInputChange}
            className="border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <InputLabel 
            htmlFor="password"
            label="Password"
            icon={<Lock className="text-gray-500" size={16} />}
            type={showPassword ? "text" : "password"}
            id="password"
            value={userData.password}
            onChange={handleInputChange}
            className="border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-12 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700 mb-1 md:flex items-center"
            >
              <Users className="mr-2 text-gray-500" size={16} />
              Role
            </label>
            <select
              id="role"
              name="role"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userData.role}
              onChange={handleInputChange}
            >
              <option value="Admin">Admin</option>
              <option value="Staff">Staff</option>
              <option value="Helper">Helper</option>
            </select>
          </div>

          <div>
            <InputLabel 
            htmlFor="birthdate"
            label="Birth Date"
            icon={<Calendar className="text-gray-500" size={16} />}
            type="date"
            id="birthdate"
            value={userData.birthdate}
            onChange={handleInputChange}
            className="border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between space-x-4 pt-4">
            <button
              type="button"
              className="w-full py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsEditModalOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

FormEditUser.propTypes = {
  setIsEditModalOpen: PropTypes.func,
  selectedUser: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string,
    role: PropTypes.oneOf(["Admin", "Staff", "Helper"]).isRequired,
    birthdate: PropTypes.string,
  }),
  onSave: PropTypes.func,
  generateUserId: PropTypes.func,
};

export default FormEditUser;