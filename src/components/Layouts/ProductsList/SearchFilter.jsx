import React from "react";
import { Search } from "lucide-react";
import PropTypes from "prop-types";

const SearchFilter = ({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  typeFilter,
  setTypeFilter,
}) => {
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
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="border rounded-md p-2"
      >
        <option value="all">All Status</option>
        <option value="ready">Ready</option>
        <option value="pending">Pending</option>
        <option value="soldout">Sold Out</option>
      </select>
      <select
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
        className="border rounded-md p-2"
      >
        <option value="all">All Types</option>
        <option value="Shoes">Shoes</option>
        <option value="Clothing">Clothing</option>
        <option value="Accessories">Accessories</option>
      </select>
    </div>
  );
};

export default SearchFilter;

SearchFilter.propTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
  statusFilter: PropTypes.string,
  setStatusFilter: PropTypes.func,
  typeFilter: PropTypes.string,
  setTypeFilter: PropTypes.func,
};