import React, { useState } from "react";
import { Calendar } from "lucide-react";

export default function TableHistory() {
    const [transactions, setTransactions] = useState([
      {
        id: 1,
        type: "in",
        productName: "Classic White T-Shirt",
        productImage: "/api/placeholder/100/100",
        category: "Shirts",
        quantity: 50,
        admin: {
          name: "Sarah Johnson",
          avatar: "/api/placeholder/40/40",
        },
        date: "2024-02-15",
        totalValue: 1499.5,
      },
      {
        id: 2,
        type: "out",
        productName: "Summer Floral Dress",
        productImage: "/api/placeholder/100/100",
        category: "Dresses",
        quantity: 25,
        admin: {
          name: "Mike Rodriguez",
          avatar: "/api/placeholder/40/40",
        },
        date: "2024-02-16",
        totalValue: 1499.75,
      },
      {
        id: 3,
        type: "in",
        productName: "Denim Jacket",
        productImage: "/api/placeholder/100/100",
        category: "Outerwear",
        quantity: 30,
        admin: {
          name: "Emily Chen",
          avatar: "/api/placeholder/40/40",
        },
        date: "2024-02-17",
        totalValue: 2699.7,
      },
    ]);

    const getTransactionBadge = (type) => {
      return type === "in"
        ? "bg-green-100 text-green-800"
        : "bg-red-100 text-red-800";
    };

    return (
      <>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-50 text-blue-800">
                <th className="p-4 text-left rounded-tl-xl">Product</th>
                <th className="p-4 text-left">Type</th>
                <th className="p-4 text-left">Quantity</th>
                <th className="p-4 text-left">Admin</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left rounded-tr-xl">Total Value</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="hover:bg-blue-50/50 transition border-b"
                >
                  <td className="p-4 flex items-center space-x-4">
                    <img
                      src={transaction.productImage}
                      alt={transaction.productName}
                      className="w-16 h-16 rounded-xl object-cover shadow-md"
                    />
                    <div>
                      <div className="font-bold">{transaction.productName}</div>
                      <div className="text-sm text-gray-500">
                        {transaction.category}
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getTransactionBadge(
                        transaction.type
                      )}`}
                    >
                      {transaction.type.toUpperCase()} TRANSACTION
                    </span>
                  </td>
                  <td className="p-4 font-medium">
                    {transaction.quantity} pcs
                  </td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <img
                        src={transaction.admin.avatar}
                        alt={transaction.admin.name}
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                      />
                      <div>
                        <div className="font-semibold">
                          {transaction.admin.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar size={16} className="mr-2" />
                      {transaction.date}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="font-bold text-blue-600">
                      ${transaction.totalValue.toFixed(2)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
}