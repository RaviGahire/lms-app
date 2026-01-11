import React, { useState } from 'react';

const LoginPage = () => {
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="p-4 border-b">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-cyan-500">Logo</div>
          <ul className="hidden md:flex gap-6 text-gray-600 font-medium cursor-pointer">
            <li className="hover:text-cyan-500 transition-colors">Home</li>
            <li className="hover:text-cyan-500 transition-colors">Courses</li>
            <li className="hover:text-cyan-500 transition-colors">About</li>
          </ul>
        </nav>
      </header>

      <div className="p-6 md:p-10">
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-0 lg:gap-10 max-w-7xl mx-auto">
          
          {/* Left Side - Image & Branding */}
          <div className="hidden lg:flex w-1/2 relative overflow-hidden rounded-3xl min-h-[600px]">
            <img 
              src="https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg" 
              alt="Students in classroom" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-16">
              <h1 className="text-white text-5xl font-bold mb-4 leading-tight">
                Lorem ipsum is simply
              </h1>
              <p className="text-white/90 text-xl font-light">
                Lorem ipsum is simply dummy text of the printing.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
              
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Welcome back..!
                </h2>

                <div className="inline-flex p-1 bg-cyan-400/20 rounded-full">
                  <button className="px-10 py-2.5 bg-cyan-500 text-white rounded-full font-semibold shadow-md transition-all">
                    Login
                  </button>
                  <a href="/register" className="px-10 py-2.5 text-cyan-600 rounded-full font-semibold hover:bg-cyan-500/10 transition-all">
                    Register
                  </a>
                </div>
              </div>

              <p className="text-gray-500 text-center text-sm mb-10 leading-relaxed">
                Lorem ipsum is simply dummy text of the printing and typesetting industry.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2 ml-4">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your Email Address"
                    className="w-full px-6 py-3.5 border-2 border-cyan-100 rounded-full focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all bg-gray-50/50" 
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2 ml-4">
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
                      className="w-full px-6 py-3.5 border-2 border-cyan-100 rounded-full focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all bg-gray-50/50 pr-14" 
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
                    <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Remember me</span>
                  </label>
                  <a href="#" className="text-cyan-600 hover:text-cyan-700 text-sm font-semibold transition-colors">
                    Forgot Password?
                  </a>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-cyan-500 text-white py-4 rounded-full font-bold text-lg hover:bg-cyan-600 hover:shadow-lg active:scale-[0.98] transition-all mt-6"
                >
                  Login
                </button>

                {/* Divider */}
                <div className="relative flex items-center justify-center my-6">
                  <div className="flex-grow border-t border-gray-200"></div>
                  <span className="flex-shrink mx-4 text-gray-400 text-xs uppercase font-bold tracking-widest">OR</span>
                  <div className="flex-grow border-t border-gray-200"></div>
                </div>

                {/* Google Button */}
                <button 
                  type="button"
                  onClick={handleGoogleLogin}
                  className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-100 text-gray-700 py-3.5 rounded-full font-semibold text-md hover:bg-gray-50 hover:border-gray-200 transition-all active:scale-[0.98] shadow-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"/>
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

export default LoginPage;