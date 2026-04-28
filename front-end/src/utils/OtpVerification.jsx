import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

  const API_URL = import.meta.env.VITE_API_URL
export const OtpVerification = () => {
    const [timer, setTimer] = useState(59); // Start at 59
    const [canResend, setCanResend] = useState(false);
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate(); // for redirect to one route to targeted route
    const { state } = useLocation(); // got email from verification status component
  

    

    const handleverifyOtp = async (e) => { // handle otp and user registration 
        e.preventDefault();

        if (otp.length !== 4) return; // initial checking of otp


        try {
            setLoading(true);
            setError('');
            setSuccess('');

            //calling verify OTP API
            const response = await axios.post(`${API_URL}/verify-otp`, { email: state?.email, otp }); //passed email for verification 

            if (!response.data.success) {
                return setError(response.data.message || "Invalid OTP")
            }

            alert("Account verified successfull")

        } catch (error) {
            setError(error.response?.data?.message || "Server error");
        } finally {
            setLoading(false);
        }
    };

    // resend otp function
    const handleResend = async () => {
        if (!canResend) return;

        try {
            setError('');
            setSuccess('');
            const response = await axios.post(`${API_URL}/send-email-otp`, { email: state?.email });

            if (response.data.success) {
                setTimer(59);
                setCanResend(false);
                setOtp(''); // Clear existing OTP 
                setSuccess("New OTP sent successfully!");
            } else {
                setError(err.response?.data?.message || "Server error");
            }
        } catch (error) {
            setError(error.response?.data?.message || "Server error");
        }
    };

    useEffect(() => {
        if (timer <= 0) { // time finished
            setCanResend(true);
            return;
        }

        const timeout = setTimeout(() => {
            setTimer(prev => prev - 1);
        }, 1000);

        return () => clearTimeout(timeout); // when otp pop open then start countdown
    }, [timer]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Blurred Backdrop:- Allow closing by clicking backdrop*/}
            <div className="fixed inset-0 bg-cyan-500/10 backdrop-blur-[2px]"></div>

            {/* The Modal Container */}
            <div className="relative p-1.5 rounded-md  overflow-hidden w-full max-w-sm">
                {/* Moving Gradient Border */}
                <div className="absolute inset-0 bg-linear-to-r from-cyan-900 via-zinc-900 to-cyan-950 bg-size-[400%_400%] animate-gradient"></div>
                {/* Content Area */}
                <div className="relative border border-zinc-50/50 bg-zinc-950/50 px-8 py-10 backdrop-blur-5xl rounded-md text-center">
                    {/* Close Button */}
                    <button
                        onClick={() => { navigate('/signup') }}
                        className="absolute cursor-pointer top-4 right-4 text-zinc-200 hover:text-white transition-colors"
                        aria-label="Close">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <h2 className="text-2xl font-semibold text-white mb-2">OTP VERIFICATION</h2>
                    <p className="text-zinc-300 text-sm mb-4 uppercase tracking-widest">
                        Enter the code sent to email
                    </p>
                    <p className="text-gray-200 text-sm font-mono my-2">
                        {state?.email}
                    </p>
                    {/* success Message */}
                    {success && (
                        <div className="mb-4 p-2 bg-green-500/20 border border-green-500 rounded-md uppercase text-white text-sm">
                            {success}
                        </div>
                    )}
                    {/* Error Message */}
                    {error && (
                        <div className="mb-4 p-2 bg-red-500/20 border border-red-500 rounded-md uppercase text-white text-sm">
                            {error}
                        </div>
                    )}

                    {/* OTP Input Form */}
                    <form onSubmit={handleverifyOtp} className="mb-10">
                        <input
                            type="text"
                            maxLength={4}
                            value={otp}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, ''); // Only digits
                                setOtp(value);
                                setError(''); // Clear error on input
                            }}
                            placeholder="Enter 4-digit OTP"
                            className="w-full h-14 text-center text-2xl font-bold text-white bg-black border-2 border-zinc-800 rounded-md focus:border-zinc-50/50 focus:ring-1 focus:ring-zinc-50/10 outline-none transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] placeholder:text-zinc-500 placeholder:text-base"
                            autoFocus
                            disabled={loading}
                        />
                        <button
                            type="submit"
                            disabled={loading || otp.length !== 4}
                            className="w-full mt-5 bg-cyan-800 cursor-pointer text-white font-black py-4 rounded-md  active:scale-95 transition-all uppercase tracking-widest  disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Verifying...
                                </span>
                            ) : 'Verify Now'}
                        </button>
                    </form>

                    {/* Timer & Resend */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-900/50 rounded-full border border-zinc-800">
                            <div className={`w-2 h-2 rounded-full ${timer > 0 ? 'bg-orange-500 animate-pulse' : 'bg-zinc-700'}`}></div>
                            <span className="text-cyan-500 font-mono font-medium">
                                00:{timer < 10 ? `0${timer}` : timer}
                            </span>
                        </div>

                        <p className="text-xs font-bold uppercase tracking-widest text-zinc-100">
                            Didn't receive it?{' '}
                            <button
                                onClick={handleResend}
                                disabled={!canResend}
                                className={`transition-colors duration-300 ${canResend
                                    ? 'text-cyan-500 hover:text-orange-400 underline cursor-pointer'
                                    : 'text-zinc-100 cursor-not-allowed opacity-50'
                                    }`}>
                                Resend Code
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};