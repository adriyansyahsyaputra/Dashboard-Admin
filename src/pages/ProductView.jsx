import React, { useState } from "react";
import HeaderNav from "../components/template/HeaderNav/HeaderNav";
import Sidebar from "../components/template/Sidebar/Sidebar";
import SearchFilter from "../components/Layouts/ProductView/SearchFilter";
import CardProduct from "../components/Layouts/ProductView/CardProduct";
import { getProducts } from "../components/utils/products";

export default function ProductView() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const products = getProducts;

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
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <SearchFilter />

              <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-5 p-6">
                {products.map((product) => (
                  <CardProduct key={product.id} {...product} />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
