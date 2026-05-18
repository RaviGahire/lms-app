import React, { useState } from 'react';

export const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log("Subscribed with:", email);
        // subscription logic 
        setEmail("");
    };

    return (
        <footer className="w-full py-10 bg-[#1B1D3C] text-gray-300">
            <div className="flex flex-col items-center justify-center text-center gap-3 px-4">
                    <div className="flex items-center gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="border-2 border-teal-300 hover:border-linear-to transition-all duration-150 cursor-pointer px-3 py-2 rounded-md">
                            <span className="text-white font-semibold text-base md:text-lg leading-tight">
                                Master-Track
                            </span>
                        </div>
                    </div>
                       <div className="w-px h-10 bg-gray-600"></div>
                    {/* Right Text */}
                    <div className="text-left">
                        <p className="text-white font-semibold text-base md:text-lg leading-tight">Virtual Class</p>
                        <p className="text-white font-semibold text-base md:text-lg leading-tight">for Students</p>
                    </div>
                </div>

                {/* Newsletter Text */}
                <h2 className="text-xl md:text-2xl text-gray-200 font-semibold mt-10">
                    Subscribe to get our Newsletter
                </h2>

                {/* Input + Subscribe Form */}
                <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row gap-4 mt-6 bg-[#23254A] p-2 sm:p-4 rounded-3xl sm:rounded-full shadow-lg w-full max-w-lg"
                >
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        required
                        className="flex-1 px-6 py-3 rounded-full bg-transparent outline-none text-gray-300 placeholder-gray-500 border border-gray-600 focus:border-teal-400 transition-colors"
                    />

                    <button
                        type="submit"
                        className="px-10 py-3 rounded-full bg-linear-to-r from-teal-400 to-blue-400 text-white font-semibold shadow-lg hover:brightness-110 active:scale-95 transition"
                    >
                        Subscribe
                    </button>
                </form>
            </div>

            {/* Footer Links */}
            <nav className="mt-16 flex flex-wrap items-center justify-center gap-4 md:gap-10 text-gray-400 text-sm px-4">
                <a href="/careers" className="hover:text-white transition-colors">Careers</a>
                <span className="hidden md:block text-gray-600">|</span>

                <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <span className="hidden md:block text-gray-600">|</span>

                <a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
            </nav>

            {/* COPYRIGHT */}
            <p className="mt-8 text-center text-gray-500 text-xs md:text-sm">
                © {new Date().getFullYear()} MasterTrack.com
            </p>
        </footer>
    );
}

 