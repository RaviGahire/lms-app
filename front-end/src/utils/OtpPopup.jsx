import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'; // ADD THIS


export const OtpPopup = () => { // Fixed props
    const [timer, setTimer] = useState(59); // Start at 59
    const [canResend, setCanResend] = useState(false);
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const nav = useNavigate(); // for redirect to one route to targeted route

    const { state } = useLocation(); // accessing the email 

    //check email is there in state
    if (!state?.email) {
        nav("/signup");
        return null
    }

    const handleverifyOtp = async (e) => {
        e.preventDefault();

        if (!otp || otp.length !== 4) { // to check a otp is 4 digit or not 
            setError('Please enter a valid 4-digit OTP');
            return;
        }

        try {
            setLoading(true);
            setError('');

            const response = await axios.post(
                'http://localhost:3000/api/verify-otp',
                { email: state?.email, otp } //passed email for verification
            );

            console.log('Verify OTP response:', response.data);

            if (response.data.success === true) { // if response is ok 
                alert('OTP verified successfully!');
                nav('/login')

            } else {
                setError(response.data.message || 'Invalid OTP');
            }

        } catch (error) {
            console.error('OTP verification error:', error);
            setError(error.response?.data?.message || 'Server error');
        } finally {
            setLoading(false);
        }
    };

    // resend otp
    const handleResend = async () => {
        if (!canResend) return;

        try {
            setError('');
            const response = await axios.post(`http://localhost:3000/api/generate-otp`, { email });

            if (response.data.success) {
                setTimer(59);
                setCanResend(false); // FIX: Should be false
                setOtp(''); // Clear existing OTP
                alert('New OTP sent to your email');
            } else {
                setError('Failed to resend OTP');
            }
        } catch (error) {
            console.error('Resend OTP error:', error);
            setError('Failed to resend OTP');
        }
    };

    useEffect(() => {
        if (timer <= 0) {
            setCanResend(true);
            return;
        }

        const countdown = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(countdown);
    }, [timer]);

    return (
        <div className="fixed left-0 bottom-0 top-0 right-0 z-50 flex items-center justify-center p-4">
            {/* Blurred Backdrop */}
            <div
                className="fixed left-0 bottom-0 top-0 right-0 bg-gray-500/30 backdrop-blur-md"
            // Allow closing by clicking backdrop
            ></div>

            {/* The Modal Container */}
            <div className="relative p-px rounded-3xl overflow-hidden w-full max-w-sm">
                {/* Moving Gradient Border */}
                <div className="absolute inset-0 bg-linear-to-r from-orange-500 via-zinc-900 to-orange-500 bg-size-[400%_400%] animate-gradient"></div>
                {/* Content Area */}
                <div className="relative bg-zinc-950 px-8 py-10 rounded-[23px] text-center">
                    {/* Close Button */}
                    <button

                        className="absolute cursor-pointer top-4 right-4 text-zinc-400 hover:text-white transition-colors"
                        aria-label="Close">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <h2 className="text-2xl font-semibold text-white mb-2">OTP VERIFICATION</h2>
                    <p className="text-zinc-300 text-sm mb-4 uppercase tracking-widest">
                        Enter the code sent to email
                    </p>
                    <p className="text-orange-500 text-xs font-mono my-2">
                        {state?.email}
                    </p>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-200 text-sm">
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
                            className="w-full h-14 text-center text-2xl font-bold text-orange-500 bg-black border-2 border-zinc-800 rounded-2xl focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] placeholder:text-zinc-700 placeholder:text-base"
                            autoFocus
                            disabled={loading}
                        />
                        <button
                            type="submit"
                            disabled={loading || otp.length !== 4}
                            className="w-full mt-5 bg-orange-500 cursor-pointer text-zinc-900 font-black py-4 rounded-2xl hover:bg-orange-400 active:scale-95 transition-all uppercase tracking-widest shadow-lg shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
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
                            <span className="text-orange-500 font-mono font-medium">
                                00:{timer < 10 ? `0${timer}` : timer}
                            </span>
                        </div>

                        <p className="text-xs font-bold uppercase tracking-widest text-zinc-100">
                            Didn't receive it?{' '}
                            <button
                                onClick={handleResend}
                                disabled={!canResend}
                                className={`transition-colors duration-300 ${canResend
                                    ? 'text-orange-500 hover:text-orange-400 underline cursor-pointer'
                                    : 'text-zinc-100 cursor-not-allowed opacity-50'
                                    }`}
                            >
                                Resend Code
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};