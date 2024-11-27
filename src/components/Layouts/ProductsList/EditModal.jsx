import React from "react";
import PropTypes from "prop-types";

const EditModal = ({ selectedProduct, setIsEditModalOpen }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-bold">Edit Product</h3>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              defaultValue={selectedProduct?.name}
              className="border rounded-md p-2"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              defaultValue={selectedProduct?.price}
              className="border rounded-md p-2"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              className="px-4 py-2 text-white bg-gray-500 rounded-md"
              onClick={() => setIsEditModalOpen(false)}
            >
              Cancel
            </button>
            <button className="px-4 py-2 text-white bg-blue-500 rounded-md">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;

EditModal.propTypes = {
  selectedProduct: PropTypes.object.isRequired,
  setIsEditModalOpen: PropTypes.func.isRequired,
};