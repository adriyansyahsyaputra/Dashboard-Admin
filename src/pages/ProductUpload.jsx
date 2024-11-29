import React, { useState } from "react";
import Sidebar from "../components/template/Sidebar/Sidebar";
import HeaderNav from "../components/template/HeaderNav/HeaderNav";
import FormUpload from "../components/Fragments/FormUploadModal";
import HeaderProductUpload from "../components/Layouts/ProductsUpload/HeaderProductUpload";
import { getProducts as initialProducts } from "../components/utils/products";

export default function ProductUpload() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [products, setProducts] = useState(initialProducts);

  const handleAddProduct = (newProduct) => {
    setProducts((prevProduct) => [...prevProduct, newProduct]);
  };

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
            <div className="min-h-screen p-8">
              <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <HeaderProductUpload />
                <FormUpload handleAddProduct={handleAddProduct} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
