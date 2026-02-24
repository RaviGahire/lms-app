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

//   console.log(loggedInUser);

  // get user token from localStorage
  

  const handleAuthentication = async () => {
    const token = getStoredToken();
    if (!token) {
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
      const mapUserProfile = (apiData, currentStateData) => {
        return {
          USER_ID: apiData?._id ?? currentStateData?.USER_ID,
          USER_NAME: apiData?.userName ?? currentStateData?.USER_NAME,
          USER_EMAIL: apiData?.email ?? currentStateData?.USER_EMAIL,
          USER_ROLE: apiData?.role ?? currentStateData?.USER_ROLE,
          IS_VERIFIED: Boolean(
            apiData?.isVerified || currentStateData?.IS_VERIFIED,
          ),
        };
      };
      const userProfileData = mapUserProfile(API_DATA, loggedInUser);
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
            <Route
              path="/login"
              element={<Login loggedInUser={setLoggedInUser} />}
            />

            {/* Dashboard routes */}
            <Route
              path="/super_admin"
              element={
                <ProtectedRoute
                  loading={loading}
                  user={loggedInUser}
                  allowedRoles={["super-admin"]}
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
                  allowedRoles={["admin", "super-admin"]}
                >
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student"
              element={
                <ProtectedRoute
                  loading={loading}
                  user={loggedInUser}
                  allowedRoles={["student", "admin"]}
                >
                  <Student />{" "}
                </ProtectedRoute>
              }
            />
            {/* unauthorized user route */}
            <Route path="/unauthorized" element={<h1>Unauthorized</h1>} />

            {/* Update route */}
            <Route path="/update_student/:id" element={<UpdateStudent />} />
            
            <Route path="/update_admin/:id" element={<UpdateAdmin />} />

            <Route path="/update_super_admin/:id" element={<UpdateAdmin />} />

            {/* notification route */}
            <Route path="/notification" element={<Notifications />} />
         

            {/* Fallback Route */}
            <Route
              path="*"
              element={
                <>
                  <h1>Fallbackroute</h1>
                </>
              }
            />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
};
