import React, { useState, useEffect } from "react";
import { User, Mail, Lock, Users, Calendar } from "lucide-react";
import PropTypes from "prop-types";

const FormEditUser = ({ setIsEditModalOpen }) => {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-6 mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
          <User className="mr-2 text-blue-600" size={24} />
          Edit User Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1 md:flex items-center"
            >
              <User className="mr-2 text-gray-500" size={16} />
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1 md:flex items-center"
            >
              <Mail className="mr-2 text-gray-500" size={16} />
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1 md:flex items-center"
            >
              <Lock className="mr-2 text-gray-500" size={16} />
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="birthDate"
              className="block text-sm font-medium text-gray-700 mb-1 md:flex items-center"
            >
              <Calendar className="mr-2 text-gray-500" size={16} />
              Birth Date
            </label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between space-x-4 pt-4">
            <button
              type="button"
              className="w-full py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
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

export default FormEditUser;