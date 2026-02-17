import ContextData from "../Contexts/Context";
import { useCallback, useEffect, useState } from "react";
import { getStoredToken } from "../utils/getStoredToken";
import axios from "axios";

const ContextProvider = ({ children }) => {

  const [loggedInUser, setLoggedInUser] = useState(null);// getting data of user to use in any component
  const [loading, setLoading] = useState(!!getStoredToken());

  const API_URL = import.meta.env.VITE_API_URL

  // user profile function 
  const fetchUserProfile = useCallback(async () => {
    const token = getStoredToken() // get token from localstorage

    if (!token) {
      setLoading(false)
      return;
    }
    setLoading(true);

    try {
      const res = await axios.get(`${API_URL}/profile`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const { _id, userName, email, role, isVerified } = res.data.data || {};
      setLoggedInUser({
        USER_ID: _id,
        USER_NAME: userName,
        USER_EMAIL: email,
        USER_ROLE: role,
        
      });

    } catch (error) {
      console.error("Profile Fetch Error:", err);
      setLoggedInUser(null);
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  }, [API_URL])

  // handle logout globally
  const userLogout = () => {
    localStorage.removeItem("token");
    setLoggedInUser(null);
  }

  useEffect(() => {
    fetchUserProfile()
  }, [fetchUserProfile])




  return (
    <ContextData.Provider value={{ loggedInUser, loading, userLogout, fetchUserProfile }}>
      {children}
    </ContextData.Provider>
  );
};

export default ContextProvider;






