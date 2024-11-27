import React from "react";

export default function CardDashboard() {

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Total Users", value: "1,234", color: "bg-blue-500" },
          { title: "Total Products", value: "567", color: "bg-green-500" },
          { title: "New Messages", value: "89", color: "bg-yellow-500" },
          { title: "Revenue", value: "$12,345", color: "bg-purple-500" },
        ].map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-lg shadow-sm p-6 border"
          >
            <div className={`w-12 h-12 ${card.color} rounded-lg mb-4`}></div>
            <h3 className="text-gray-600 text-sm">{card.title}</h3>
            <p className="text-2xl font-bold text-gray-800">{card.value}</p>
          </div>
        ))}
      </div>
    );
}