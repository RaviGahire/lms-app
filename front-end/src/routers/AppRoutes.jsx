import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { Home } from "../pages/Home";
import { Login } from "../components/Login";
import { OtpPopup } from "../utils/OtpPopup";
import { SignUp } from "../components/SignUp";
import { BlogPage } from "../pages/BlogPage";
import { CourseCard } from "../pages/CourseCard";
import { Student } from "../components/Student";
import { Admin } from "../components/Admin";
import { SuperAdmin } from "../components/SuperAdmin";
import { ProtectedRoute } from "../components/ProtectedRoute";
import  {UpdateStudent} from "../components/UpdateStudent"
import { UpdateAdmin } from "../components/UpdateAdmin";
import { useEffect, useState } from "react";
import { getStoredToken } from "../utils/getStoredToken";
import axios from "axios";

export const AppRoutes = () => {
  const [loggedInUser, setLoggedInUser] = useState(""); // getting loggedin user data from login component
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;

  // console.log(loggedInUser)
  
  const handleAuthentication = async () => {

    const token = getStoredToken(); // get token from local storage

    if (!token) { // if not avilable
      setLoggedInUser(null);
      setLoading(false);
      return;
    }

    //userprofile data
    try {
      const response = await axios.get(`${API_URL}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const API_DATA = response.data.data;
      
      //map user profile data
      const mapUserProfile = (apiData) => {
        return {
       id: apiData?._id,
       userName: apiData?.userName,
       email: apiData?.email,
       role: apiData?.role,
       isVerified: Boolean(apiData?.isVerified),
        };
      };
      
      const userProfileData = mapUserProfile(API_DATA);

      setLoggedInUser(userProfileData);

    } catch (error) {
      console.error("Auth error:", error);
      localStorage.removeItem("token");
      setLoggedInUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleAuthentication();
  }, []);

  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            {/* Pages routes */}
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CourseCard />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/aboutus" element={<div>aboutus Page</div>} />

            {/* Auth Routes */}
            <Route path="/signup" element={<SignUp />} />

            <Route path="/otp_pop_up" element={<OtpPopup />} />

            <Route path="/login" element={<Login loggedInUser={setLoggedInUser}/>}/>

            {/* Dashboard routes */}
            <Route
              path="/super-admin"
              element={
                <ProtectedRoute
                  loading={loading}
                  user={loggedInUser}
                  allowedUserRoles={["super-admin"]}
                >
                  <SuperAdmin />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute
                  loading={loading}
                  user={loggedInUser}
                  allowedUserRoles={["admin", "super-admin"]}
                >
                  <Admin />
                </ProtectedRoute>
              }
            />
           <Route
              path="/student"
              element={<ProtectedRoute loading={loading} user={loggedInUser} allowedUserRoles={["student"]}> <Student /> </ProtectedRoute>
              }
            /> 
            {/* unauthorized user route */}

            <Route path="/unauthorized" element={<h1>Unauthorized</h1>} />

            {/* Update route */}
            <Route path="/update_student/:id" element={<UpdateStudent />} />
            
            <Route path="/update_admin/:id" element={<UpdateAdmin />} />

            <Route path="/update_super_admin/:id" element={<UpdateAdmin />} />

            {/* notification route */}
            {/* <Route path="/notification" element={<Notifications />} /> */}
         

            {/* Fallback Route */}
            {/* <Route
              path="*"
              element={
                <>
                  <h1>Fallbackroute</h1>
                </>
              }
            /> */}
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
};
