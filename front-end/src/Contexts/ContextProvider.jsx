import ContextData from "../Contexts/Context";
import { useCallback, useEffect, useState } from "react";
import { getStoredToken } from "../utils/getStoredToken";
import axios from "axios";

const ContextProvider = ({ children }) => {
  const [loggedInUserProfile, setLoggedInUserProfile] = useState(null);// set the loggedIn user data to use globally
  const [loading, setLoading] = useState(!!getStoredToken());
  const API_URL = import.meta.env.VITE_API_URL

  // console.log(loggedInUserProfile)

  // fetch user profile function
  const fetchUserProfile = useCallback(async () => {

    const token = getStoredToken() // get token from localstorage
    if (!token) {
      setLoading(false)
      return;
    }
    setLoading(true);

    try {
      const response = await axios.get(`${API_URL}/current-user`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const profile = response.data?.data || {}

      setLoggedInUserProfile({
        userId: profile?._id,
        userName: profile?.userName,
        email: profile?.email,
        role: profile?.role,
        isVerified: profile?.isVerified
      });

      return profile || {}
     

    } catch (error) {
      console.error("Profile Fetch Error:", err);
      setLoggedInUserProfile(null);
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  }, [API_URL])



  // handle logout globally
  const userLogout = () => {
    localStorage.removeItem("token");
    setLoggedInUserProfile(null);
  }

  useEffect(() => {
    fetchUserProfile()
  }, [fetchUserProfile])




  return (
    <ContextData.Provider value={{ loggedInUserProfile, loading, userLogout, fetchUserProfile }}>
      {children}
    </ContextData.Provider>
  );
};

export default ContextProvider;






