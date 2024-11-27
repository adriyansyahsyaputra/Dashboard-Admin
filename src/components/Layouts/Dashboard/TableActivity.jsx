import React from "react";

const TableActivity = () => {
  return (
    <div className="mt-6 bg-white rounded-lg shadow-sm p-6 border">
      <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full"></div>
              <div>
                <p className="font-medium">Activity {item}</p>
                <p className="text-sm text-gray-600">2 minutes ago</p>
              </div>
            </div>
            <button className="text-blue-600 hover:underline">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableActivity;
