import React from "react";
import PropTypes from "prop-types";

const HeaderProductList = ({ setIsUploadModalOpen }) => {
  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-bold">Product Management</h2>
        <button className="px-4 py-2 bg-black font-semibold text-sm text-white rounded-md"
        onClick={() => setIsUploadModalOpen(true)}
        >
          Add New Product
        </button>
      </div>
    </>
  );
};

export default HeaderProductList;

HeaderProductList.propTypes = {
  setIsUploadModalOpen: PropTypes.func.isRequired,
};