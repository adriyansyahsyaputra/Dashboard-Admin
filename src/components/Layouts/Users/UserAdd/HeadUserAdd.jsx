import React from "react";
import {
  User,
} from "lucide-react";

const HeadUserAdd = () => {

  return (
    <div className="bg-gray-50 px-6 py-4 border-b">
      <h2 className="text-xl font-semibold text-gray-800 flex items-center">
        <User className="mr-3 text-gray-600" />
        Add New User
      </h2>
    </div>
  );
};

export default HeadUserAdd;
