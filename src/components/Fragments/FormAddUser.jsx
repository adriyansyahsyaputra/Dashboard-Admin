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

export default function FormAddUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    role: "",
    profileImage: null,
  });

  const [passwordError, setPasswordError] = useState("");
  const [profilePreview, setProfilePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear password error when typing
    if (name === "confirmPassword") {
      setPasswordError("");
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
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

    // Password validation
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    // Generate User ID based on role
    const userId = generateUserId(formData.role);

    // Prepare submission data
    const submissionData = {
      ...formData,
      id: userId,
    };

    // Here you would typically send this to your backend
    console.log("Submitting user data:", submissionData);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      birthDate: "",
      role: "",
      profileImage: null,
    });
    setProfilePreview(null);
  };

  return (
    <>
      <form className="p-6 space-y-6">
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
                passwordError
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
            />
            {passwordError && (
              <p className="text-red-500 text-xs mt-1">{passwordError}</p>
            )}
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
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 md:flex items-center">
              <Shield className="mr-2 text-gray-500" size={18} /> User Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
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
