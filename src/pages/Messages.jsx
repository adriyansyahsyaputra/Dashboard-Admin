import React, { useState } from "react";
import HeaderNav from "../components/template/HeaderNav/HeaderNav";
import Sidebar from "../components/template/Sidebar/Sidebar";
import MessageList from "../components/Layouts/Message/MessageList";
import MessageDetails from "../components/Layouts/Message/MessageDetails";
import Card from "../components/Fragments/Card";

export default function Messages() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyMode, setReplyMode] = useState(false);
  const [messages] = useState([
    {
      id: 1,
      customer: {
        name: "Emma Wilson",
        email: "emma.wilson@example.com",
        avatar: "/api/placeholder/50/50",
      },
      subject: "Product Return Request",
      excerpt: "I would like to return the blue dress I purchased last week...",
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Total Message",
                  value: "1,234",
                  color: "bg-blue-500",
                },
                {
                  title: "Read Message",
                  value: "567",
                  color: "bg-green-500",
                },
                { title: "Pending", value: "89", color: "bg-yellow-500" },
                { title: "Unread", value: "345", color: "bg-red-500" },
              ].map((card) => (
                <Card
                  key={card.title}
                  color={card.color}
                  title={card.title}
                  value={card.value}
                />
              ))}
            </div>

            <div className="max-w-6xl mt-8 mx-auto bg-white shadow-md rounded-lg overflow-hidden grid grid-cols-3">
              <MessageList
                messages={messages}
                selectedMessage={selectedMessage}
                setSelectedMessage={setSelectedMessage}
              />
              <MessageDetails
                selectedMessage={selectedMessage}
                replyMode={replyMode}
                setReplyMode={setReplyMode}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
