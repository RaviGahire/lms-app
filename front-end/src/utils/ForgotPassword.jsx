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
                data?.message || "Password reset request submitted successfully."
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
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">

                <h2 className="text-2xl font-bold mb-6 text-center">
                    Forgot Password
                </h2>

                {message && (
                    <p className="text-green-600 text-sm mb-3">{message}</p>
                )}

                {error && (
                    <p className="text-red-600 text-sm mb-3">{error}</p>
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
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors disabled:bg-gray-400"
                    >
                        {loading ? "Processing..." : "Submit"}
                    </button>

                </form>
            </div>
        </div>
    );
};
