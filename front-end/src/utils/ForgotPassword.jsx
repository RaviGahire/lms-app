import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";

const API_URL = import.meta.env.VITE_API_URL;

export const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  //Handle Input Change
  const handleInputChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //Handle Forgot Password function
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const { email, userName, newPassword, confirmPassword } = formData;
    setError("");
    setMessage("");
    if (newPassword !== confirmPassword) {
      return setError("Passwords do not match");
    }
    // try catch block
    try {
      setLoading(true);
      const { data } = await axios.patch(`${API_URL}auth/password/forgot`, {
        email,
        userName,
        newPassword,
      });

      // console.log(data)
      setMessage(data?.message || "Password reset successfully.");

      setTimeout(() => {
        navigate("/login");
      }, 2000);

      //clear the state
      setFormData({
        email: "",
        userName: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      setError(
        error?.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-cyan-800 p-4">
        <div className="w-full max-w-md bg-cyan-950 p-4 md:p-8 text-white rounded shadow-cyan-300 cursor-pointer hover:shadow-md transition-all duration-200 ">
          <h2 className="text-2xl font-bold mb-6 text-center ">
            Forgot Password
          </h2>
          {message && (
            <div className="bg-green-500/80 text-white text-center p-2 rounded mb-2 border border-white/40">
              <p className=" text-sm  font-bold tracking-wide">{message}</p>
            </div>
          )}
          {error && (
            <div className="bg-red-500/80 text-white text-center p-2 rounded mb-2 border border-white/40">
              <p className=" text-sm  font-bold tracking-wide">{error}</p>
            </div>
          )}
          {/* Form */}
          <form onSubmit={handleForgotPassword}>
           <div className="flex flex-col gap-2 mb-2">
             {/* Email */}
            <Input
              label={"Email/Username"}
              name={"email"}
              placeholder="Enter your email or username"
              type="email"
              id={"email"}
              value={formData.email}
              onChange={handleInputChange}
              labelStyle={"text-white"}
            />

            {/* New Password */}
            <Input
              label={"New Password"}
              type="password"
              name="newPassword"
              id={"newPassword"}
              required
              value={formData.newPassword}
              onChange={handleInputChange}
              placeholder="Enter new password"
              labelStyle={"text-white"}
            />

            {/* confirm Password */}
            <Input
              type="password"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm password"
              label={"Confirm Password"}
              labelStyle={"text-white"}
            />
           </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 cursor-pointer text-white font-bold tracking-wide py-2 rounded hover:bg-blue-600 transition-colors disabled:bg-cyan-600"
            >
              {loading ? "Processing..." : "Change"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
