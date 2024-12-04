import React from "react";
import { Settings, Sun, Moon, Monitor } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function GeneralSettings() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 space-y-6 border border-gray-100">
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center space-x-3">
          <Settings className="h-8 w-8 text-blue-600" />
          <span>{t("title.generalSettings") || "General Settings"}</span>
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Theme Selector */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            {t("theme") || "Theme"}
          </label>
          <div className="flex space-x-4">
            {[
              { icon: Sun, label: t("light") || "Light" },
              { icon: Moon, label: t("dark") || "Dark" },
              { icon: Monitor, label: t("system") || "System" },
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

        {/* Language Selector */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            {t("language") || "Language"}
          </label>
          <select
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
            onChange={changeLanguage}
          >
            <option value="en">English (US)</option>
            <option value="id">Bahasa Indonesia</option>
          </select>
        </div>
      </div>
    </div>
  );
}
