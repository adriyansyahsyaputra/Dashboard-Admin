import React from "react";
import { EllipsisVertical} from "lucide-react";
import DropdownMenu from "./DropdownMenu";
import PropTypes from "prop-types";

const ProductTable = ({
  products,
  formatPrice,
  getStatusColor,
  handleEdit,
  handleDelete,
  toggleDropdown,
  dropdownOpen,
}) => {
  return (
    <div className="overflow-x-auto rounded-lg border mt-4">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4 text-left text-sm font-medium text-gray-500">
              ID
            </th>
            <th className="p-4 text-left text-sm font-medium text-gray-500">
              Photo
            </th>
            <th className="p-4 text-left text-sm font-medium text-gray-500">
              Name
            </th>
            <th className="p-4 text-left text-sm font-medium text-gray-500">
              Price
            </th>
            <th className="p-4 text-left text-sm font-medium text-gray-500">
              Type
            </th>
            <th className="p-4 text-left text-sm font-medium text-gray-500">
              Status
            </th>
            <th className="p-4 text-left text-sm font-medium text-gray-500">
              Quantity
            </th>
            <th className="p-4 text-left text-sm font-medium text-gray-500">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="p-4 text-sm text-gray-900">{product.id}</td>
              <td className="p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-12 w-12 rounded-lg object-cover"
                />
              </td>
              <td className="p-4 text-sm font-medium text-gray-900">
                {product.name}
              </td>
              <td className="p-4 text-sm text-gray-900">
                {formatPrice(product.price)}
              </td>
              <td className="p-4 text-sm text-gray-900">{product.type}</td>
              <td className="p-4">
                <span
                  className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                    product.status
                  )}`}
                >
                  {product.status}
                </span>
              </td>
              <td className="p-4 text-sm text-gray-900">{product.quantity}</td>
              <td className="p-4">
                <div className="relative inline-block text-left dropdown">
                  <button
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                    onClick={() => toggleDropdown(product.id)}
                  >
                    <EllipsisVertical size={16} />
                  </button>
                  {dropdownOpen === product.id && (
                    <DropdownMenu
                      product={product}
                      handleEdit={handleEdit}
                      handleDelete={handleDelete}
                    />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;


ProductTable.propTypes = {
  products: PropTypes.array.isRequired,
  formatPrice: PropTypes.func.isRequired,
  getStatusColor: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  dropdownOpen: PropTypes.oneOf([null, "string", "number"]),
};