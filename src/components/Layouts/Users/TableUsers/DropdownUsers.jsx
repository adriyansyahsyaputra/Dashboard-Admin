import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import PropTypes from "prop-types";

export const DropdownUsers = ({ handleEditUser, users, handleDeleteUser }) => {
    return (
      <div className="absolute right-0 z-10 w-48 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          onClick={() => handleEditUser(users)}
          >
            <Pencil size={16} className="mr-2" /> Edit
          </button>
          <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
          onClick={() => handleDeleteUser(users.id)}
          >
            <Trash2 size={16} className="mr-2" /> Delete
          </button>
        </div>
      </div>
    );
}

DropdownUsers.propTypes = {
  handleEditUser: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
  handleDeleteUser: PropTypes.func.isRequired
};