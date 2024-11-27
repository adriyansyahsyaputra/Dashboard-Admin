import React, { useState } from "react";
import Sidebar from "../components/template/Sidebar/Sidebar";
import HeaderNav from "../components/template/HeaderNav/HeaderNav";
import CardDashboard from "../components/Layouts/Dashboard/CardDashboard";
import SalesCharts from "../components/Layouts/Dashboard/SalesCharts";
import FinancialCharts from "../components/Layouts/Dashboard/FinancialCharts";
import TableActivity from "../components/Layouts/Dashboard/TableActivity";

export default function DashboardPage() {
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
            <CardDashboard />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              {/* Sales Chart */}
              <SalesCharts />

              {/* Fionancial Chart */}
              <FinancialCharts />
            </div>
            {/* Table Activity */}
            <TableActivity />
          </main>
        </div>
      </div>
    </>
  );
}
