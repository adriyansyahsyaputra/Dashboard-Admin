import React, { useState } from "react";
import InputLabel from "../Elements/Input/InputLabel";
import {
  User,
  Mail,
  Lock,
  Calendar,
  UserRoundPlus,
  Shield,
  Upload,
} from "lucide-react";
import { useLogContext } from "../../context/LogContext";

export default function FormAddUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [role, setRole] = useState("");
    const [profilePreview, setProfilePreview] = useState(null);
    const [message, setMessage] = useState("");
    const { addLog } = useLogContext();

    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        setProfilePreview((prev) => ({
          ...prev,
          profileImage: file,
        }));

        const reader = new FileReader();
        reader.onloadend = () => {
          setProfilePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

    const generateUserId = (role) => {
      const prefix = {
        Admin: "ADM",
        Helper: "HLP",
        Staff: "STF",
      };
      const randomNum = Math.floor(100 + Math.random() * 900);
      return `${prefix[role]}${randomNum}`;
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      // Generate User ID based on role
      const userId = generateUserId(role);

      let users = [];
      try {
        const storedUsers = localStorage.getItem("users");
        users = storedUsers ? JSON.parse(storedUsers) : [];
      } catch (err) {
        console.error(err);
        users = [];
      }

      // Validasi jika username sudah ada
      const isUserExist = users.some(
        (user) => user.email === email || user.name === name
      );

      if (isUserExist) {
        setMessage("User name or email already exists.");
        return;
      }

      // Validasi jika password tidak sesuai
      if (password !== confirmPassword) {
        setMessage("Passwords do not match.");
        return;
      }

      // Simpan data user ke local storage
      const newUser = {
        userId,
        name,
        email,
        password,
        role,
        birthdate,
        profilePreview,
      };
      localStorage.setItem("users", JSON.stringify([...users, newUser]));

      // Reset input
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setBirthdate("");
      setRole("");
      setProfilePreview(null);
      setMessage("");

      // Rekam aktivitas ke log
      addLog(
        "Add User",
        "User Management",
        `User ${name} added successfully`
      );
    };

  return (
    <>
      <form className="p-6 space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Profile Image Upload */}
          <div className="col-span-full flex justify-center">
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
                id="profileUpload"
              />
              <label htmlFor="profileUpload" className="cursor-pointer">
                {profilePreview ? (
                  <img
                    src={profilePreview}
                    alt="Profile Preview"
                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                    <Upload className="text-gray-500" size={32} />
                    <span className="sr-only">Upload Profile Picture</span>
                  </div>
                )}
              </label>
            </div>
          </div>

          {/* Name */}
          <div>
            <InputLabel
              htmlFor="name"
              icon={<User className="text-gray-500" size={18} />}
              label="Full Name"
              type="text"
              id="name"
              placeholder="Enter your name"
              className="focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <InputLabel
              htmlFor="email"
              icon={<Mail className="text-gray-500" size={18} />}
              label="Email"
              type="email"
              id="email"
              placeholder="Enter your email"
              className="focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <InputLabel
              htmlFor="password"
              icon={<Lock className="text-gray-500" size={18} />}
              label="Password"
              type="password"
              id="password"
              placeholder="Enter your password"
              className="focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <InputLabel
              htmlFor="confirmPassword"
              icon={<Lock className="text-gray-500" size={18} />}
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className={`focus:ring-2 focus:ring-blue-500  ${
                message
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {message && <p className="text-red-500 text-xs mt-1">{message}</p>}
          </div>

          {/* Birth Date */}
          <div>
            <InputLabel
              htmlFor="birthDate"
              icon={<Calendar className="text-gray-500" size={18} />}
              label="Birth Date"
              type="date"
              id="birthDate"
              placeholder="Enter your birth date"
              className="focus:ring-2 focus:ring-blue-500"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 md:flex items-center">
              <Shield className="mr-2 text-gray-500" size={18} /> User Role
            </label>
            <select
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Helper">Helper</option>
              <option value="Staff">Staff</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent 
            rounded-lg shadow-sm text-sm font-medium text-white 
            bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 
            focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <UserRoundPlus size={20} className="mr-2" /> Create User
          </button>
        </div>
      </form>
    </>
  );
}
