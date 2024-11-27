import React, { useState } from "react";
import Sidebar from "../components/template/Sidebar/Sidebar";
import HeaderNav from "../components/template/HeaderNav/HeaderNav";
import TableHistory from "../components/Layouts/History/TableHistory";
import HeaderHistory from "../components/Layouts/History/HeaderHistory";

export default function History() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [messages, setMessages] = useState([
      {
        id: 1,
        customer: {
          name: "Emma Wilson",
          email: "emma.wilson@example.com",
          avatar: "/api/placeholder/50/50",
        },
        subject: "Product Return Request",
        excerpt:
          "I would like to return the blue dress I purchased last week...",
        status: "unread",
        date: "2024-02-18 10:30",
      },
      {
        id: 2,
        customer: {
          name: "Alex Rodriguez",
          email: "alex.rodriguez@example.com",
          avatar: "/api/placeholder/50/50",
        },
        subject: "Shipping Delay",
        excerpt:
          "My order seems to be delayed. Can you provide more information...",
        status: "pending",
        date: "2024-02-17 15:45",
      },
      {
        id: 3,
        customer: {
          name: "Sophie Chen",
          email: "sophie.chen@example.com",
          avatar: "/api/placeholder/50/50",
        },
        subject: "Product Inquiry",
        excerpt: "Do you have this dress in size medium?",
        status: "read",
        date: "2024-02-16 09:15",
      },
    ]);

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
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <HeaderHistory />

              <div className="p-6">
                {/* Table data */}
                <TableHistory />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
