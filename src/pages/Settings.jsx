import React, { useState } from "react";
import Sidebar from "../components/template/Sidebar/Sidebar";
import HeaderNav from "../components/template/HeaderNav/HeaderNav";
import GeneralSettings from "../components/Layouts/Settings/GeneralSettings";
import AccountSettings from "../components/Layouts/Settings/AccountSettings";
import NotificationSettings from "../components/Layouts/Settings/NotificationSettings";
import SystemSettings from "../components/Layouts/Settings/SystemSettings";
import CustomizationSettings from "../components/Layouts/Settings/CustomizationSettings";

export default function Settings() {
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
            <div className="min-h-screen">

              <div className="mb-10">
                <GeneralSettings />
              </div>

              <div className="mb-10">
                <AccountSettings />
              </div>

              <div className="mb-10">
                <NotificationSettings />
              </div>

              <div className="mb-10">
                <SystemSettings />
              </div>

              <div className="mb-10">
                <CustomizationSettings />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
