import React from "react";
import { Bell } from "lucide-react";

export default function NotificationSettings() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 space-y-6 border border-gray-100">
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center space-x-3">
          <Bell className="h-8 w-8 text-blue-600" />
          <span>Notification Settings</span>
        </h1>
      </div>

      <div className="space-y-4">
        {[
          { label: "New Product Notifications", icon: Bell },
          { label: "Out of Stock Alerts", icon: Bell },
          { label: "Order Confirmation", icon: Bell },
          { label: "Promotional Emails", icon: Bell },
        ].map((notification, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition"
          >
            <div className="flex items-center space-x-3">
              <notification.icon className="h-6 w-6 text-blue-500" />
              <span className="text-gray-700">{notification.label}</span>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
