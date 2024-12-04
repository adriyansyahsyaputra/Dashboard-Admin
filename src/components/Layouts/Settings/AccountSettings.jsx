import React from "react";
import { User, ShieldCheck, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AccountSettings() {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-8 space-y-6 border border-gray-100">
        <div className="flex items-center justify-between border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center space-x-3">
            <User className="h-8 w-8 text-blue-600" />
            <span>{t("title.accountSettings") || "Account Settings"}</span>
          </h1>
        </div>

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium">
                {t("currentPassword") || "Current Password"}
              </label>
              <input
                type="password"
                placeholder="Enter current password"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                {t("newPassword") || "New Password"}
              </label>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-between border-t pt-4">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="h-6 w-6 text-green-600" />
              <span>{t("label.twoFactorAuthentication")}</span>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="border-t pt-4">
            <button className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
              <Trash2 className="h-5 w-5" />
              <span>{t("button.deleteAccount")}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
