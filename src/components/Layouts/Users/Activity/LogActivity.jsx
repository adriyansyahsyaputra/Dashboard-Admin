import React, { useState } from "react";
import {
  Search,
  Filter,
  Clock,
  User,
  Server,
  Activity,
  Calendar,
} from "lucide-react";
import { useLogContext } from "../../../../context/LogContext";

const LogActivity = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const { logs } = useLogContext();
  console.log("Logs:", logs);

  const filterOptions = [
    "All",
    "User Management",
    "Authentication",
    "Access Control",
    "Employee Records",
  ];

  const getActionColor = (action) => {
    switch (action) {
      case "User Created":
        return "bg-green-100 text-green-800";
      case "Data Updated":
        return "bg-blue-100 text-blue-800";
      case "System Login":
        return "bg-purple-100 text-purple-800";
      case "Permission Changed":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };


  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 px-6 py-4 border-b flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <Activity className="mr-3 text-gray-600" />
          Activity Log
        </h2>
        <div className="flex space-x-3">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search logs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          </div>

          {/* Filter Dropdown */}
          <div className="relative">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 appearance-none"
            >
              {filterOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <Filter className="absolute left-3 top-3 text-gray-400" size={18} />
          </div>
        </div>
      </div>

      {/* Activity Log Table */}
      <table className="w-full">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <User size={16} className="inline mr-2" /> User
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <Clock size={16} className="inline mr-2" /> Timestamp
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <Activity size={16} className="inline mr-2" /> Action
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <Server size={16} className="inline mr-2" /> Module
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <Calendar size={16} className="inline mr-2" /> Description
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              IP Address
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {logs.map((log, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                {log.user}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                {log.timestamp}
              </td>
              <td className="px-4 py-3">
               {log.action}   
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                {log.module}
              </td>
              <td className="px-4 py-3 text-sm text-gray-500">
                {log.description}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                {log.ipAddress}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* No Results State */}
      {/* {filteredLogs.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          <p>No activity logs found</p>
        </div>
      )} */}

      {/* Pagination */}
      <div className="bg-gray-50 px-6 py-4 border-t flex justify-between items-center">
        <span className="text-sm text-gray-600">
          Showing 1 of 3 logs
        </span>
        <div className="space-x-2">
          <button className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-100">
            Previous
          </button>
          <button className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-100">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogActivity;