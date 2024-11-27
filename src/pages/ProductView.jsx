import React, { useState } from "react";
import HeaderNav from "../components/template/HeaderNav/HeaderNav";
import Sidebar from "../components/template/Sidebar/Sidebar";
import { Search, Filter } from "lucide-react";
import SearchFilter from "../components/Layouts/ProductView/SearchFilter";
import CardProduct from "../components/Layouts/ProductView/CardProduct";

export default function ProductView() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
              
              <CardProduct />
              
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
