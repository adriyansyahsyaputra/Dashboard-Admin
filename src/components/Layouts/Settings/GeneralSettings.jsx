import React from "react";
import { Settings, Sun, Moon, Monitor } from "lucide-react";

export default function GeneralSettings() {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-8 space-y-6 border border-gray-100">
        <div className="flex items-center justify-between border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center space-x-3">
            <Settings className="h-8 w-8 text-blue-600" />
            <span>General Settings</span>
          </h1>
          <span className="text-gray-500">Customize your experience</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Theme
            </label>
            <div className="flex space-x-4">
              {[
                { icon: Sun, label: "Light" },
                { icon: Moon, label: "Dark" },
                { icon: Monitor, label: "System" },
              ].map((theme) => (
                <button
                  key={theme.label}
                  className="px-4 py-2 rounded-lg border hover:bg-blue-50 transition-colors flex items-center space-x-2"
                >
                  <theme.icon className="h-5 w-5" />
                  <span>{theme.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Language
            </label>
            <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all">
              <option>English (US)</option>
              <option>Bahasa Indonesia</option>
              <option>Español</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
