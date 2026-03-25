import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//Main component
export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('')

  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const API_URL = import.meta.env.VITE_API_URL
  const navigate = useNavigate()



  // Handle Input Change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, });
  };

  // Toggle Password
  const togglePassword = () => { setShowPassword(!showPassword); };


  // register User
  const handleSignUp = async (e) => {
    e.preventDefault();

    const { userName, email, password, confirmPassword } = formData;

    setError("");
    setSuccess("");
    setLoading(true);

    // validate password match
    if (password !== confirmPassword) {
      setLoading(false);
      return setError("Passwords do not match");
    }
    try {
      //API call to register user
      const { data } = await axios.post(`${API_URL}users/register`, {
        userName,
        email,
        password
      });

      setSuccess(data.message || "Registration successful!");

      setTimeout(() => navigate("/login"), 2000);

    } catch (error) {
      setError(error?.response?.data?.message || "Something went wrong during registration.");
    } finally {
      setLoading(false);
    }
  };

  //google login
  const handleGoogleLogin = () => {
    console.log('Initiating Google Login...');
  };

  //FORM UI
  return (
    <div className="min-h-screen bg-gray-900 bg-[url('https://t4.ftcdn.net/jpg/05/39/10/47/360_F_539104776_BchIZKRhIUXDY0ZaVHxaoIDvRa2eAG3d.jpg')] bg-blend-soft-light  bg-cover bg-center bg-no-repeat ">
      <div className="p-4 md:p-10">
        <div className="flex justify-center max-w-7xl mx-auto">
          {/* Right Side - Form */}
          <div className="w-full lg:w-1/2 flex items-center justify-center md:p-8">
            <div className="w-full max-w-md">
              <div className="text-center md:mb-8">
                <h2 className="text-lg md:text-4xl font-bold text-gray-100 mb-4">Welcome to MasterTrack</h2>
                {/* Btns */}
                <div className="inline-flex p-1 gap-2 bg-cyan-400/20 rounded-full text-xs md:text-[16px]">
                  <Link to="/login" className="px-10 py-2.5 text-cyan-600 rounded-full font-semibold hover:bg-cyan-500/10 transition-all">
                    Login
                  </Link>
                  <Link to={'/signup'} className="px-10 py-2.5 bg-cyan-500 text-white rounded-full font-semibold shadow-md transition-all">
                    Register
                  </Link>
                </div>
              </div>

              {/* Error */}
              <div className='max-w-md relative h-5 my-4'>
                {error && (
                  <div className="absolute text-white mx-auto text-center p-1 w-full bg-red-500/40 border border-red-500 rounded-lg font-semibold text-xs md:text-sm">
                    {error}
                  </div>
                )}
                {/* Success */}
                {success && (
                  <div className="absolute text-white mb-2 text-center p-2 bg-green-500/40 border border-green-500 rounded-lg font-semibold text-sm">
                    {success}
                  </div>
                )}

              </div>

              {/* SignUP form */}
              <form onSubmit={handleSignUp} className="space-y-2.5 md:space-y-5">
                {/* 1. User Name  */}
                <div>
                  <label className="block text-gray-100 text-sm font-semibold md:mb-2 ml-2 md:ml-4">User name</label>
                  <input
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleInputChange}
                    placeholder="Enter your user name"
                    required
                    className="w-full text-xs md:text-sm px-3 py-1.5 md:px-6 md:py-3 border md:border-2 border-cyan-200/50 rounded-full focus:outline-none focus:border-cyan-400 placeholder-gray-100 text-white bg-gray-900/90 transition-colors"
                  />
                </div>

                {/* 2. Email Address */}
                <div>
                  <label className="block text-gray-100 text-sm font-semibold md:mb-2 ml-2 md:ml-4">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your Email Address"
                    required
                    className="w-full text-xs md:text-sm px-3 py-1.5 md:px-6 md:py-3 border md:border-2 border-cyan-200/50 rounded-full focus:outline-none focus:border-cyan-400 placeholder-gray-100  text-white bg-gray-900/90 transition-colors"
                  />
                </div>

                {/* 3. Password */}
                <div>
                  <label className="block text-gray-100 text-sm font-semibold md:mb-2 ml-2 md:ml-4">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter your Password"
                      required
                    className="w-full text-xs md:text-sm  px-3 py-1.5 md:px-6 md:py-3 border md:border-2 border-cyan-200/50 rounded-full focus:outline-none focus:border-cyan-400 placeholder-gray-100 text-white bg-gray-900/90 transition-colors"
                    />
                    <button type="button" onClick={togglePassword} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500">
                      {showPassword ? (
                        <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      )}
                    </button>
                  </div>
                </div>
                {/* 4. Confirm Password (Added) */}
                <div className='relative'>
                  <label className="block text-gray-100 text-sm font-semibold md:mb-2 ml-2 md:ml-4">Confirm Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your Password"
                    required
                    className="w-full text-xs md:text-sm  px-3 py-1.5 md:px-6 md:py-3 border md:border-2 border-cyan-200/50 rounded-full focus:outline-none focus:border-cyan-400 placeholder-gray-100 text-white bg-gray-900/90 transition-colors"
                  />
                  <button type="button" onClick={togglePassword} className="absolute right-5 top-9 md:top-13 -translate-y-1/2 text-gray-500">
                    {showPassword ? (
                      <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    )}
                  </button>
                </div>
                {/* send otp on email loading btn */}
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-cyan-500 text-white py-2 md:py-4 rounded-full font-bold md:text-lg hover:bg-cyan-600 active:scale-[0.98] transition md:mt-6 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Sign Up
                </button>
                {/*5. devider */}
                <div className=" flex items-center justify-around gap-1  md:my-4">
                  <div className=" w-1/2 border-t border-cyan-100"></div>
                  <div className="  text-white text-xs uppercase  font-bold tracking-wider">OR</div>
                  <div className="w-1/2 border-t border-cyan-100"></div>
                </div>
                {/* 6. Continue with Google btn */}
                  <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="w-full flex items-center cursor-pointer justify-center md:text-lg gap-1.5 md:gap-3 bg-white border-2 border-gray-100 text-gray-700 py-1.5 md:py-3.5 rounded-full font-semibold hover:bg-gray-50 hover:border-gray-200 transition-all active:scale-[0.98]"
                >
                  <svg className="size-3 md:size-5" viewBox="0 0 24 24">
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