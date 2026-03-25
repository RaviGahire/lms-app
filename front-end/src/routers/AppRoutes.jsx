import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { Home } from "../pages/Home"; 
import { Login } from "../components/Login";
import { OtpVerification } from "../utils/OtpVerification";
import { SignUp } from "../components/SignUp";
import { BlogPage } from "../pages/BlogPage";
import { CourseCard } from "../pages/CourseCard";
import { Student } from "../components/Students/Student";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { UpdateStudent } from "../components/Students/UpdateStudent"
import { UpdateAdmin } from "../components/Admin/UpdateAdmin";
import { useEffect, useState } from "react";
import ContextData from "../Contexts/Context";
import { useContext } from "react";
import { ForgotPassword } from "../utils/ForgotPassword";
import { ChangeProfileAvatar } from "../components/ChangeProfileAvatar";


export const AppRoutes = () => {

  const [loggedInUser, setLoggedInUser] = useState(null); // getting loggedin user data from login component

  const [loading, setLoading] = useState(true);

  const { loggedInUserProfile, fetchUserProfile } = useContext(ContextData)

  // console.log(loggedInUserProfile)

  useEffect(() => {
    fetchUserProfile()
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

            <Route path="/otp_pop_up" element={<OtpVerification />} />

            <Route path="/login" element={<Login loggedInUser={setLoggedInUser} />} />

            {/* Dashboard routes */}
            <Route
              path="/admin"
              element={<ProtectedRoute loading={loading} user={loggedInUser} allowedUserRoles={["admin"]}><h1>Admin</h1></ProtectedRoute>
              }
            />
            <Route
              path="/instructor"
              element={<ProtectedRoute loading={loading} user={loggedInUser} allowedUserRoles={["instructor"]}> <h1>Instructer</h1> </ProtectedRoute>
              }
            />
            <Route
              path="/student"
              element={<ProtectedRoute loading={loading} user={loggedInUserProfile} allowedUserRoles={["student"]}> <Student /> </ProtectedRoute>
              }
            />

            {/* CRUD route */}
            <Route path="/update_student" element={<UpdateStudent />} />

            <Route path="/change-profile/:id" element={<ChangeProfileAvatar />} />

            <Route path="/update_admin/:id" element={<UpdateAdmin />} />

            <Route path="/forgot-password" element={<ForgotPassword />} />




            {/* unauthorized user route */}
            <Route path="/unauthorized" element={<h1>Unauthorized</h1>} />
            {/* Fallback Route */}
            <Route path="*" element={<><h1>Fallbackroute</h1></>}/>
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
};
