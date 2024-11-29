import React from "react";
import { Search } from "lucide-react";
import PropTypes from "prop-types";

const SearchFilter = ({ searchQuery, onSearchChange, statusFilter, onStatusChange, typeFilter, onTypeChange }) => {
  return (
    <div className="mt-4 grid gap-4 md:grid-cols-4">
      <div className="relative md:col-span-2">
        <span className="absolute left-2 top-2.5 text-gray-500">
          <Search size={18} />
        </span>
        <input
          type="text"
          placeholder="Search products..."
          className="pl-8 border rounded-md p-2 w-full"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <select
        className="border rounded-md p-2"
        value={statusFilter}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <option value="all">All Status</option>
        <option value="Ready">Ready</option>
        <option value="Pending">Pending</option>
        <option value="Soldout">Sold Out</option>
      </select>
      <select
        className="border rounded-md p-2"
        value={typeFilter}
        onChange={(e) => onTypeChange(e.target.value)}
      >
        <option value="all">All Types</option>
        <option value="Shoes">Shoes</option>
        <option value="T-shirts">T-shirts</option>
        <option value="Shirts">Shirts</option>
        <option value="Jackets">Jackets</option>
        <option value="Dresses">Dresses</option>
        <option value="Skirts">Skirts</option>
      </select>
    </div>
  );
};

export default SearchFilter;

SearchFilter.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  statusFilter: PropTypes.string.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  typeFilter: PropTypes.string.isRequired,
  onTypeChange: PropTypes.func.isRequired,
};