import React from "react";
import { Search, Filter } from "lucide-react";
import PropTypes from "prop-types";

const MessageList = ({ messages, selectedMessage, setSelectedMessage }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "unread":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "read":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleMessageSelect = (message) => {
    setSelectedMessage(message);
  };

  return (
    <div className="col-span-1 bg-blue-50 border-r">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-5 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Messages</h2>
        <button className="hover:bg-white/20 p-2 rounded-lg">
          <Filter size={18} />
        </button>
      </div>

      <div className="p-4 border-b">
        <div className="relative">
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300"
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>
      </div>

      <div className="divide-y">
        {messages.map((msg) => (
          <div
            key={msg.id}
            onClick={() => handleMessageSelect(msg)}
            className={`p-4 cursor-pointer hover:bg-blue-100 transition 
              ${selectedMessage?.id === msg.id ? "bg-blue-100" : ""}`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <img
                  src={msg.customer.avatar}
                  alt={msg.customer.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-semibold">{msg.customer.name}</div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                      msg.status
                    )}`}
                  >
                    {msg.status.toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-500">{msg.date}</div>
            </div>
            <div className="text-sm text-gray-700">{msg.subject}</div>
            <div className="text-xs text-gray-500 truncate">{msg.excerpt}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  selectedMessage: PropTypes.object,
  setSelectedMessage: PropTypes.func.isRequired,
};