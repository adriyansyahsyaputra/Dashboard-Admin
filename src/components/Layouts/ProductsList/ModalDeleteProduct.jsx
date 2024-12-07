import React, { useState } from "react";
import { X } from "lucide-react";
import PropTypes from "prop-types";

const ModalDeleteProduct = ({
  setIsDeleteDialogOpen,
  productToDelete,
  confirmDelete,
}) => {
  return (
    <>
      {/* Background Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-60 z-40"
        onClick={() => setIsDeleteDialogOpen(false)}
      ></div>

      {/* Modal Dialog */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 relative max-w-xl w-full m-4">
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            onClick={() => setIsDeleteDialogOpen(false)}
          >
            <X size={20} />
          </button>

          {/* Modal Content */}
          <h3 className="text-base font-bold">Confirm Deletion</h3>
          <p className="text-sm mt-2">
            Are you sure you want to delete product {productToDelete?.name}?
            This action cannot be undone.
          </p>
          <div className="flex justify-end space-x-2 mt-4">
            <button
              className="px-4 py-2 border rounded-md bg-gray-200"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 border rounded-md bg-red-600 text-white"
              onClick={confirmDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDeleteProduct;

ModalDeleteProduct.propTypes = {
  setIsDeleteDialogOpen: PropTypes.func.isRequired,
  productToDelete: PropTypes.object.isRequired,
  confirmDelete: PropTypes.func.isRequired,
};