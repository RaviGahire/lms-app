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
import { UpdateStudent } from "../components/UpdateStudent"
import { UpdateAdmin } from "../components/UpdateAdmin";
import { useEffect, useState } from "react";
import { getStoredToken } from "../utils/getStoredToken";
import ContextData from "../Contexts/Context";
import { useContext } from "react";
import axios from "axios";
import { LogoutButton } from "../utils/LogoutUser";
import { ForgotPassword } from "../utils/ForgotPassword";


export const AppRoutes = () => {

  const [loggedInUser, setLoggedInUser] = useState(null); // getting loggedin user data from login component

  const [loading, setLoading] = useState(true);

  const { fetchUserProfile } = useContext(ContextData)

  // console.log(loggedInUser)

  const handleAuthentication = async () => {

    const token = getStoredToken(); // get token from local-storage

    if (!token) { // if not avilable
      setLoggedInUser(null);
      setLoading(false);
      return;
    }


    try {

      const profile = await fetchUserProfile();

      const user = {
        userId: profile?.userId,
        userName: profile?.userName,
        email: profile?.email,
        role: profile?.role,
        isVerified: profile?.isVerified,
      };

      setLoggedInUser(user);


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

            <Route path="/login" element={<Login loggedInUser={setLoggedInUser} />} />

            {/* Dashboard routes */}
            <Route
              path="/super-admin"
              element={
                <ProtectedRoute
                  loading={loading}
                  user={loggedInUser}
                  allowedUserRoles={["super-admin"]}
                >
                  {/* <SuperAdmin /> */}
                 <div className="flex flex-col justify-center items-center gap-10 ">
                    <h1 className="text-center text-5xl font-bold">Super-Admin Page</h1>
                    <LogoutButton />
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute
                  loading={loading}
                  user={loggedInUser}
                  allowedUserRoles={["admin","super-admin"]}
                >
                  {/* <Admin /> */}
                  <div className="flex flex-col justify-center items-center gap-10 ">
                    <h1 className="text-center text-5xl font-bold">Admin Page</h1>
                    <LogoutButton />
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/student"
              element={<ProtectedRoute loading={loading} user={loggedInUser} allowedUserRoles={["student","admin"]}> <Student /> </ProtectedRoute>
              }
            />
            {/* unauthorized user route */}

            <Route path="/unauthorized" element={<h1>Unauthorized</h1>} />

            {/* Update route */}
            <Route path="/update_student/:id" element={<UpdateStudent />} />

            <Route path="/update_admin/:id" element={<UpdateAdmin />} />

            <Route path="/update_super_admin/:id" element={<UpdateAdmin />} />

            <Route path="/forgot-password" element={<ForgotPassword />} />


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
