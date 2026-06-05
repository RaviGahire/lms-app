import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Input } from './FormFields';
import { AuthService } from '../../services/AuthService';
import { IconEye, IconMail, IconShieldCheck, IconUser } from '@tabler/icons-react';

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
  const handleSignUp = (e) => {
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

    const { data } = AuthService.register(formData)




    // try {
    //   //API call to register user
    //   const { data } = await axios.post(`${API_URL}auth/register`, {
    //     userName,
    //     email,
    //     password
    //   });

    //   setSuccess(data.message || "Registration successful!");

    //   setTimeout(() => navigate("/login"), 2000);

    // } catch (error) {
    //   setError(error?.response?.data?.message || "Something went wrong during registration.");
    // } finally {
    //   setLoading(false);
    // }
  };




  //google login
  const handleGoogleLogin = () => {
    console.log('Initiating Google Login...');
  };

  //FORM UI
  return (
    <div className="bg-gray-900 bg-[url('https://t4.ftcdn.net/jpg/05/39/10/47/360_F_539104776_BchIZKRhIUXDY0ZaVHxaoIDvRa2eAG3d.jpg')] bg-blend-soft-light  bg-cover bg-center bg-no-repeat ">
      <div className="p-1 ">
        <div className="min-h-screen flex justify-center max-w-7xl mx-auto">
          {/* Right Side*/}
          <div className="w-full lg:w-1/2 flex items-center justify-center md:p-8">
            <div className="w-full max-w-md">
              <div className="text-center md:mb-8">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-100 mb-4 capitalize">Welcome to master track</h2>
                
              </div>
              {/* SignUP form */}
              <form onSubmit={handleSignUp} className="space-y-2.5 md:space-y-5 p-3 md:p-0">
                {/* 1. User Name  */}
                <div>
                  <Input
                    label={"User Name"}
                    name={"userName"}
                    id={"userName"}
                    type={"text"}
                    placeholder={"Please enter your user name"}
                    value={formData.userName}
                    onChange={handleInputChange}
                    error={'error'}
                      />
                </div>

                {/* 2. Email Address */}
                <div>
                  <Input
                    label={"Email Address"}
                    name={"email"}
                    id={"email"}
                    type={"email"}
                    placeholder={"Please enter your email"}
                    value={formData.email}
                    onChange={handleInputChange}
                    error={'error'}
                  />
                </div>

                {/* 3. Password */}
                <div>
                  <Input
                    label={"Password"}
                    name={"password"}
                    id={"password"}
                    type={"password"}
                    placeholder={"Please enter your password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    error={'error'}

                  />
                </div>
                {/* 4. Confirm Password (Added) */}
                <div>
                  <Input
                    label={"Confirm Password"}
                    name={"confirmPassword"}
                    id={"confirmPassword"}
                    type={"password"}
                    placeholder={"Please confirm your password"}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    error={'error'}
                  />

                </div>
                {/* send otp on email loading btn */}
                <button
                  type="submit"
                  className="w-full cursor-pointer  bg-cyan-500 text-white py-2 md:py-4 rounded-full font-bold md:text-lg hover:bg-cyan-600 active:scale-[0.98] transition md:mt-6 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
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