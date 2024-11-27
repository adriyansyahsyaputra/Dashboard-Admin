import React from "react";
import { Server, Lock, Layout, Upload } from "lucide-react";

export default function SystemSettings() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 space-y-6 border border-gray-100">
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center space-x-3">
          <Server className="h-8 w-8 text-blue-600" />
          <span>System Settings</span>
        </h1>
      </div>

      <div className="space-y-6">
        <div className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Lock className="h-6 w-6 text-green-600" />
              <span className="font-medium">Backup & Restore</span>
            </div>
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition flex items-center space-x-2">
                <Upload className="h-5 w-5" />
                <span>Create Backup</span>
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition flex items-center space-x-2">
                <Upload className="h-5 w-5" />
                <span>Restore Backup</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Layout className="h-6 w-6 text-purple-600" />
              <span className="font-medium">Maintenance Mode</span>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
