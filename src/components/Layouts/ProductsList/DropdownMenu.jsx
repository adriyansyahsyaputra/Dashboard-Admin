import React from "react";
import { PencilLine, Trash } from "lucide-react";
import PropTypes from "prop-types";

const DropdownMenu = ({ product, handleEdit, handleDelete }) => {
  return (
    <div className="absolute right-0 z-10 mt-2 w-40 bg-white ring-1 ring-black ring-opacity-5">
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <button
          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          onClick={() => handleEdit(product)}
        >
          <PencilLine size={16} />
          <span>Edit</span>
        </button>
        <button
          className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
          onClick={() => handleDelete(product)}
        >
          <Trash size={16} />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default DropdownMenu;

DropdownMenu.propTypes = {
  product: PropTypes.object.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};