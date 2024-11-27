import React from "react";
import { Reply, Send, Mail } from "lucide-react";
import PropTypes from "prop-types";

export default function MessageDetails({
  selectedMessage,
  replyMode,
  setReplyMode,
}) {
  return (
    <div className="col-span-2 p-6">
      {selectedMessage ? (
        <div>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <img
                src={selectedMessage.customer.avatar}
                alt={selectedMessage.customer.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-2xl font-bold">
                  {selectedMessage.customer.name}
                </h3>
                <p className="text-gray-600">
                  {selectedMessage.customer.email}
                </p>
              </div>
            </div>
            <button
              onClick={() => setReplyMode(!replyMode)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition flex items-center"
            >
              <Reply className="mr-2" /> Reply
            </button>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl">
            <h4 className="text-xl font-semibold mb-4">
              {selectedMessage.subject}
            </h4>
            <p>{selectedMessage.excerpt}</p>
          </div>

          {replyMode && (
            <div className="mt-6">
              <textarea
                placeholder="Write your reply..."
                className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-300 h-40"
              />
              <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition flex items-center">
                <Send className="mr-2" /> Send Reply
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-gray-400">
          <Mail size={64} className="mb-4" />
          <p>Select a message to view details</p>
        </div>
      )}
    </div>
  );
}

MessageDetails.propTypes = {
  selectedMessage: PropTypes.object,
  replyMode: PropTypes.bool,
  setReplyMode: PropTypes.func,
};