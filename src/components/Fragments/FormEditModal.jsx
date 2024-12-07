import React, { useState } from "react";
import PropTypes from "prop-types";
import { Edit, Save, X } from "lucide-react";
import InputLabel from "../Elements/Input/InputLabel";
import { useLogContext } from "../../context/LogContext";

export default function FormEdit({
  selectedProduct,
  setIsEditModalOpen,
  onSave,
}) {
  const [productData, setProductData] = useState({
    name: selectedProduct?.name || "",
    price: selectedProduct?.price || "",
    quantity: selectedProduct?.quantity || "",
    type: selectedProduct?.type || "t-shirts",
    status: "Ready",
  });

  const { addLog } = useLogContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const productTypes = [
    { value: "t-shirts", label: "T-shirts" },
    { value: "shirts", label: "Shirts" },
    { value: "jackets", label: "Jackets" },
    { value: "dresses", label: "Dresses" },
    { value: "pants", label: "Pants" },
    { value: "skirts", label: "Skirts" },
    { value: "shoes", label: "Shoes" },
  ];

  const statusOptions = [
    { value: "Ready", label: "Ready" },
    { value: "Pending", label: "Pending" },
    { value: "Soldout", label: "Sold Out" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...selectedProduct, ...productData });
    setIsEditModalOpen(false);

    addLog("Edit Product", "Product", `Edit product ${selectedProduct.name}`);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl border border-gray-200 animate-fade-in-up">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center">
            <Edit className="mr-3 text-blue-600" size={24} />
            Edit Product
          </h3>
          <button
            onClick={() => setIsEditModalOpen(false)}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <InputLabel 
            htmlFor="Name"
            label="Product Name"
            type="text"
            id="name"
            value={productData.name}
            onChange={handleChange}
            className="border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <InputLabel 
              htmlFor="Price"
              label="Product Price"
              type="number"
              id="price"
              value={productData.price}
              onChange={handleChange}
              className="border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <div>
              <InputLabel 
              htmlFor="Quantity"
              label="Quantity"
              type="number"
              id="quantity"
              value={productData.quantity}
              onChange={handleChange}
              className="border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Product Type
              </label>
              <select
                name="type"
                id="type"
                value={productData.type}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              >
                {productTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Status
              </label>
              <select
                name="status"
                id="status"
                value={productData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              >
                {statusOptions.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={() => setIsEditModalOpen(false)}
              className="px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md flex items-center transition-colors"
            >
              <Save size={18} className="mr-2" />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

FormEdit.propTypes = {
  selectedProduct: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    type: PropTypes.string,
  }),
  setIsEditModalOpen: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};
