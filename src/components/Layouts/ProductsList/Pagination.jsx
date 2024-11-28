import React from "react";
import PropTypes from "prop-types";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <div className="mt-4 flex items-center justify-between">
      <p className="text-sm text-gray-500">
        Showing page {currentPage} of {totalPages}
      </p>
      <div className="flex items-center space-x-2">
        {/* Tombol Previous */}
        <button
          className="px-2 py-1 border rounded-md bg-gray-200 hover:bg-gray-300"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ArrowLeft size={16} />
        </button>

        {/* Tombol untuk setiap halaman */}
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            className={`px-2 py-1 text-xs border rounded-md ${
              currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        {/* Tombol Next */}
        <button
          className="px-2 py-1 border rounded-md bg-gray-200 hover:bg-gray-300"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};