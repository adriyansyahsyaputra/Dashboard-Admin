import React from "react";
import { Shield } from "lucide-react";

const HeaderLogin = () => {
  return (
    <div className="bg-white/20 text-white p-8 text-center">
      <div className="flex justify-center mb-4">
        <Shield size={64} className="text-white" />
      </div>
      <h2 className="text-3xl font-bold mb-2">Admin Dashboard</h2>
      <p className="text-white/80">Secure Access Portal</p>
    </div>
  );
};

export default HeaderLogin;
