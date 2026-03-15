import React, { useState } from 'react'
import axios from 'axios';



export const ForgotPassword = () => {

    const [formData, setFormData] = useState({
        email: "",
        userName: "",
        newPassword: "",
        confirmPassword: ""
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL;

    const handleInputChange = ({ target: { name, value } }) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleForgotPassword = async (e) => {
        e.preventDefault();

        const { email, userName, newPassword, confirmPassword } = formData;

        setError("");
        setMessage("");

        if (newPassword !== confirmPassword) {
            return setError("Passwords do not match");
        }

        try {
            setLoading(true);

            const { data } = await axios.patch(`${API_URL}/forgot-password`, {
                email,
                userName,
                newPassword
            });

            console.log(data)

            setMessage(
                data?.message || "Password reset successfully."
            );

            setFormData({
                email: "",
                userName: "",
                newPassword: "",
                confirmPassword: ""
            });

        } catch (err) {
            setError(
                err?.response?.data?.message ||
                "Something went wrong. Please try again."
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

                <form onSubmit={handleForgotPassword}>

                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">
                            Username / Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email or username"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">
                            New Password
                        </label>

                        <input
                            type="password"
                            name="newPassword"
                            required
                            value={formData.newPassword}
                            onChange={handleInputChange}
                            placeholder="Enter new password"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            name="confirmPassword"
                            required
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder="Confirm password"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
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
