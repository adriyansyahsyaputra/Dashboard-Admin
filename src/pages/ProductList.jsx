import React, { useState, useEffect } from "react";
import Sidebar from "../components/template/Sidebar/Sidebar";
import HeaderNav from "../components/template/HeaderNav/HeaderNav";
import SearchFilter from "../components/Layouts/ProductsList/SearchFilter";
import Pagination from "../components/Layouts/ProductsList/Pagination";
import ProductTable from "../components/Layouts/ProductsList/ProductTable";
import { X } from "lucide-react";
import Card from "../components/Fragments/Card";
import HeaderProductList from "../components/Layouts/ProductsList/HeaderProductList";
import { getProducts } from "../components/utils/products";
import FormEdit from "../components/Fragments/FormEditModal";
import FormUpload from "../components/Fragments/FormUploadModal";

export default function ProductList() {
  const [products, setProducts] = useState(getProducts);
  const ItemsPerPage = 10;

  // State management
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  // Fungsi untuk menghitung stats products
  const stats = products.reduce(
    (acc, product) => {
      acc.totalProducts += 1;
      acc.totalQuantity += product.quantity;

      if (product.status === "Ready") {
        acc.readyProducts += 1;
      } else if (product.status === "Soldout") {
        acc.soldoutProducts += 1;
      }

      return acc;
    },
    { totalProducts: 0, totalQuantity: 0, readyProducts: 0, soldoutProducts: 0 }
  )

  // Data produk yang ditampilkan berdasarkan halaman aktif
  const currentProducts = products.slice(
    (currentPage - 1) * ItemsPerPage,
    currentPage * ItemsPerPage
  );

  // Hitung total halaman
  const totalPages = Math.ceil(products.length / ItemsPerPage);

  // Fungsi untuk navigasi halaman
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Fungsi untuk Search Filter
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    // Filter berdasarkan status
    const matchesStatus =
      statusFilter === "all" || product.status === statusFilter;

    // Filter berdasarkan type
    const matchesType = typeFilter === "all" || product.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  // Fungsi edit produk
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleSaveChanges = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setIsEditModalOpen(false);
  };

  const handleDelete = (product) => {
    setProductToDelete(product);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    console.log("Deleting product:", productToDelete.id);
    setIsDeleteDialogOpen(false);

    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productToDelete.id)
    );
  };
  // Toggle dropdown visibility
  const toggleDropdown = (productId) => {
    setDropdownOpen(dropdownOpen === productId ? null : productId);
  };

  const handleAddProduct = (newProduct) => {
    setProducts((prevProduct) => [...prevProduct, newProduct]);
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
                {
                  title: "Total Products",
                  value: stats.totalProducts,
                  color: "bg-blue-500",
                },
                {
                  title: "Quantity",
                  value: stats.totalQuantity,
                  color: "bg-green-500",
                },
                { title: "Stock Ready", value: stats.readyProducts, color: "bg-yellow-500" },
                { title: "Soldout", value: stats.soldoutProducts, color: "bg-purple-500" },
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
              <HeaderProductList setIsUploadModalOpen={setIsUploadModalOpen} />

              {/* Search and Filters */}
              <SearchFilter
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                statusFilter={statusFilter}
                onStatusChange={setStatusFilter}
                typeFilter={typeFilter}
                onTypeChange={setTypeFilter}
              />

              {/* Product Table */}
              {filteredProducts.length > 0 ? (
                <ProductTable
                  products={filteredProducts.slice(
                    (currentPage - 1) * ItemsPerPage,
                    currentPage * ItemsPerPage
                  )}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                  toggleDropdown={toggleDropdown}
                  dropdownOpen={dropdownOpen}
                />
              ) : (
                <div className="text-center text-gray-500 py-6">
                  <p>Product not found</p>
                </div>
              )}

              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
              />

              {/* Edit Modal */}
              {isEditModalOpen && (
                <FormEdit
                  selectedProduct={selectedProduct}
                  setIsEditModalOpen={setIsEditModalOpen}
                  onSave={handleSaveChanges}
                />
              )}

              {/* Modal Upload */}
              {isUploadModalOpen && (
                <FormUpload
                  setIsUploadModalOpen={setIsUploadModalOpen}
                  handleAddProduct={handleAddProduct}
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
