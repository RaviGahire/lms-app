import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const togglePassword = () => setShowPassword(!showPassword);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const handleGoogleLogin = () => {
    console.log("Initiating Google Login...");
    // Logic for Google OAuth goes here
  };

  return (
    <div className="min-h-screen bg-gray-900 bg-[url('https://t4.ftcdn.net/jpg/05/39/10/47/360_F_539104776_BchIZKRhIUXDY0ZaVHxaoIDvRa2eAG3d.jpg')] bg-blend-soft-light  bg-cover bg-center bg-no-repeat">


      <div className="p-6 md:p-10">
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-0 lg:gap-10 max-w-7xl mx-auto">


          {/* login Form */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
            <div className="w-full max-w-md">

              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-100 mb-8">
                  Welcome back..!
                </h2>

                <div className="inline-flex p-1 bg-cyan-400/20 rounded-full">
                  <Link to={'/login'} className="px-10 py-2.5 bg-cyan-500 text-white rounded-full font-semibold shadow-md transition-all">
                    Login
                  </Link>
                  <Link to="/signin" className="px-10 py-2.5 text-cyan-600 rounded-full font-semibold hover:bg-cyan-500/10 transition-all">
                    Register
                  </Link>
                </div>
              </div>

              <p className="text-gray-100 text-center text-sm mb-10 leading-relaxed">
                Lorem ipsum is simply dummy text of the printing and typesetting industry.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-100 text-sm font-bold mb-2 ml-4">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your Email Address"
                    className="w-full px-6 py-3 border-2 border-cyan-200 rounded-full focus:outline-none focus:border-cyan-400 placeholder-gray-100 text-sm text-white bg-gray-900/90 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-100 text-sm font-bold mb-2 ml-4">
                    Password
                  </label>
                  <div className="relative group">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter your Password"
                      className="w-full px-6 py-3 border-2 border-cyan-200 rounded-full focus:outline-none focus:border-cyan-400 placeholder-gray-100 text-sm text-white bg-gray-900/90 transition-colors"
                    />
                    <button
                      type="button"
                      onClick={togglePassword}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cyan-500 transition-colors"
                    >
                      {showPassword ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between px-2">
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-cyan-500 border-cyan-300 rounded focus:ring-cyan-500 accent-cyan-500"
                    />
                    <span className="ml-2 text-sm text-gray-100 group-hover:text-gray-800 transition-colors">Remember me</span>
                  </label>
                  <a href="#" className="text-gray-100 hover:text-cyan-700 text-sm font-semibold transition-colors">
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-500 cursor-pointer text-white py-4 rounded-full font-bold text-lg hover:bg-cyan-600 hover:shadow-lg active:scale-[0.98] transition-all mt-6"
                >
                  Login
                </button>

                {/* Divider */}
                <div className=" flex items-center justify-around gap-1  my-4">
                  <div className=" w-1/2 border-t border-cyan-100"></div>
                  <div className="  text-white text-xs uppercase  font-bold tracking-wider">OR</div>
                  <div className="w-1/2 border-t border-cyan-100"></div>
                </div>

                {/* Google Button */}
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="w-full flex items-center cursor-pointer justify-center gap-3 bg-white border-2 border-gray-100 text-gray-700 py-3.5 rounded-full font-semibold text-md hover:bg-gray-50 hover:border-gray-200 transition-all active:scale-[0.98] shadow-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" />
                  </svg>
                  Continue with Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

