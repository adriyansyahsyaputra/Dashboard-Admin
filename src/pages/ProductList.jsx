import React, { useState, useEffect } from "react";
import Sidebar from "../components/template/Sidebar/Sidebar";
import HeaderNav from "../components/template/HeaderNav/HeaderNav";
import SearchFilter from "../components/Layouts/ProductsList/SearchFilter";
import Pagination from "../components/Layouts/ProductsList/Pagination";
import ProductTable from "../components/Layouts/ProductsList/ProductTable";
import EditModal from "../components/Layouts/ProductsList/EditModal";
import { X } from "lucide-react";
import Card from "../components/Fragments/Card";
import HeaderProductList from "../components/Layouts/ProductsList/HeaderProductList";

export default function ProductList() {
  const [products] = useState([
    {
      id: "PRD001",
      image: "/api/placeholder/80/80",
      name: "Nike Air Max",
      price: 1499000,
      type: "Shoes",
      status: "ready",
      quantity: 25,
      description: "Premium running shoes with air cushioning.",
    },
    {
      id: "PRD002",
      image: "/api/placeholder/80/80",
      name: "Adidas Ultraboost",
      price: 2299000,
      type: "Shoes",
      status: "pending",
      quantity: 10,
      description: "High-performance running shoes with boost technology.",
    },
    {
      id: "PRD003",
      image: "/api/placeholder/80/80",
      name: "Puma RS-X",
      price: 1299000,
      type: "Shoes",
      status: "soldout",
      quantity: 0,
      description: "Retro-style sneakers with modern comfort.",
    },
  ]);

  // State management
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const itemsPerPage = 5;

  // Filters and search
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || product.status === statusFilter;
    const matchesType = typeFilter === "all" || product.type === typeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "ready":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "soldout":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleDelete = (product) => {
    setProductToDelete(product);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    console.log("Deleting product:", productToDelete.id);
    setIsDeleteDialogOpen(false);
    setProductToDelete(null);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  // Toggle dropdown visibility
  const toggleDropdown = (productId) => {
    setDropdownOpen(dropdownOpen === productId ? null : productId);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    const target = event.target;
    if (!target.closest(".dropdown")) {
      setDropdownOpen(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="min-h-lvh flex bg-gray-100">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <div
          className={`flex-1 transition-all duration-300 ${
            isSidebarOpen ? "ml-64" : "ml-20"
          }`}
        >
          <HeaderNav />

          <main className="p-6">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Total Products", value: "1,234", color: "bg-blue-500" },
                {
                  title: "Quantity",
                  value: "567",
                  color: "bg-green-500",
                },
                { title: "Stock Ready", value: "89", color: "bg-yellow-500" },
                { title: "Soldout", value: "345", color: "bg-purple-500" },
              ].map((card) => (
                <Card
                  key={card.title}
                  color={card.color}
                  title={card.title}
                  value={card.value}
                />
              ))}
            </div>

            <div className="w-full p-6 mt-8 bg-white shadow-md rounded-lg">
              {/* Header */}
              <HeaderProductList />

              {/* Search and Filters */}
              <SearchFilter
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                typeFilter={typeFilter}
                setTypeFilter={setTypeFilter}
              />

              {/* Product Table */}
              <ProductTable
                products={products}
                formatPrice={formatPrice}
                getStatusColor={getStatusColor}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                toggleDropdown={toggleDropdown}
                dropdownOpen={dropdownOpen}
              />

              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                filteredProducts={filteredProducts}
                itemsPerPage={itemsPerPage}
              />

              {/* Edit Modal */}
              {isEditModalOpen && (
                <EditModal
                  selectedProduct={selectedProduct}
                  setIsEditModalOpen={setIsEditModalOpen}
                />
              )}

              {/* Delete Confirmation Dialog */}
              {isDeleteDialogOpen && (
                <>
                  {/* Background Overlay */}
                  <div
                    className="fixed inset-0 bg-black bg-opacity-60 z-40"
                    onClick={() => setIsDeleteDialogOpen(false)} // Tutup modal jika overlay diklik
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
                        Are you sure you want to delete product{" "}
                        {productToDelete?.name}? This action cannot be undone.
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
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
