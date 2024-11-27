import React from "react";
import { Bell, Search, User } from "lucide-react";

export default function HeaderNav() {

    return (
      <>
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center flex-1">
              <div className="relative max-w-md w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
                />
                <Search
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-lg hover:bg-gray-100 relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                <User size={20} />
                <span className="hidden sm:inline">John Doe</span>
              </button>
            </div>
          </div>
        </header>
      </>
    );
}