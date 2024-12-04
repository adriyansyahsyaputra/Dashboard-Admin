import React from "react";
import { Palette, Upload, Monitor, Layout, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CustomizationSettings() {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-md p-8 space-y-6 border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center space-x-3">
          <Palette className="h-8 w-8 text-blue-600" />
          <span>{t("title.customizationSettings") || "Customization Settings"}</span>
        </h1>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Brand Logo */}
        <div className="border rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Upload className="h-6 w-6 text-blue-600" />
              <span className="font-medium">Brand Logo</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                Logo Preview
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition flex items-center space-x-2">
                <Upload className="h-5 w-5" />
                <span>{t("button.uploadLogo")}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Color Scheme */}
        <div className="border rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Palette className="h-6 w-6 text-purple-600" />
              <span className="font-medium">{t("label.colorScheme")}</span>
            </div>
            <div className="flex space-x-2">
              {[
                "bg-blue-500",
                "bg-green-500",
                "bg-purple-500",
                "bg-red-500",
              ].map((color, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 rounded-full ${color} hover:scale-110 transition`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Display Options */}
        <div className="border rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Monitor className="h-6 w-6 text-teal-600" />
              <span className="font-medium">{t("label.displayOptions")}</span>
            </div>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600 rounded focus:ring-blue-500"
                />
                <span>{t("label.compactView")}</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600 rounded focus:ring-blue-500"
                />
                <span>{t("label.highContrast")}</span>
              </label>
            </div>
          </div>
        </div>

        {/* Layout Settings */}
        <div className="border rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Layout className="h-6 w-6 text-orange-600" />
              <span className="font-medium">{t("label.layoutSettings")}</span>
            </div>
            <div className="flex space-x-2">
              {["Default", "Grid", "Minimal"].map((layout) => (
                <button
                  key={layout}
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition"
                >
                  {layout} Layout
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Advanced Settings */}
        <div className="border rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Settings className="h-6 w-6 text-yellow-600" />
              <span className="font-medium">{t("label.advancedSettings")}</span>
            </div>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-yellow-600 rounded focus:ring-yellow-500"
                />
                <span>{t("label.enableAnimation")}</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-yellow-600 rounded focus:ring-yellow-500"
                />
                <span>{t("label.enableNotifications")}</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-yellow-600 rounded focus:ring-yellow-500"
                />
                <span>{t("label.showTooltips")}</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition font-medium">
          Save Changes
        </button>
      </div>
    </div>
  );
}
