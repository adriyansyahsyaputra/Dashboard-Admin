import React from "react";
import HeaderLogin from "../components/Layouts/Login/HeaderLogin";
import FormLogin from "../components/Fragments/FormLogin";

const Login = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
          <HeaderLogin />
          <FormLogin />
        </div>
      </div>
    </>
  );
};

export default Login;
