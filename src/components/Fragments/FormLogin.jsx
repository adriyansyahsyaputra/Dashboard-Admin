import React, { useState } from "react";
import { User, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const generateToken = () => {
    const token = Math.random().toString(36).substring(2);
    return token;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Ambil data dari users di local storage
    let users = [];
    try {
      const storedUser = localStorage.getItem("users");
      users = storedUser ? JSON.parse(storedUser) : [];
    } catch (err) {
      console.error(err);
      users = [];
    }

    // Cari user berdasarkan name dan password serta role
    const user = users.find(
      (user) =>
        user.name === username &&
        user.password === password
    );

    if (user) {
      // Jika user ditemukan, simpan token ke localStorage
      localStorage.setItem("token", generateToken());
      localStorage.setItem("role", user.role); 
      navigate("/");
    } else {
      setMessage("Invalid username or password.");
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-8 space-y-6">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <User className="text-white/50 w-5 h-5" />
        </div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full pl-10 pr-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
          required
        />
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Lock className="text-white/50 w-5 h-5" />
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full pl-10 pr-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
          required
        />
      </div>
      <p className="mb-2 text-sm text-red-500">{message}</p>
      <button
        type="submit"
        className="w-full py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30"
      >
        Login
      </button>
    </form>
  );
};

export default FormLogin;
