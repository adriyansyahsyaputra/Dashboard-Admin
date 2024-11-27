import React from "react";
import { Search, Filter } from "lucide-react";

export default function SearchFilter() {

    return (
      <div className="flex justify-between items-center p-4">
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 px-6 py-2 border-2 border-blue-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <Search className="absolute left-3 top-3.5 text-blue-400" size={20} />
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition border">
            <Filter size={16} className="mr-2" />
            Filter
          </button>
        </div>
      </div>
    );
}