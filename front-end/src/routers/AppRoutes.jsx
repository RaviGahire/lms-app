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
import { InstructorDashboard } from "../components/Instructor/InstructorDashboard";
import { CourseLayout } from "../components/Courses/CourseLayout";
import { UpdateCourse } from "../components/Courses/UpdateCourse";
import { CreateCourseView } from "../components/Courses/CreateCourseView";
import { InstructorUpdate } from "../components/Instructor/InstructorUpdate";


export const AppRoutes = () => {

  const [loggedInUser, setLoggedInUser] = useState(null); // getting loggedin user data from login component

  const [loading, setLoading] = useState(false);

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
            <Route path="/courses" element={<ProtectedRoute loading={loading} user={loggedInUserProfile} allowedUserRoles={"student"}><CourseCard /></ProtectedRoute>} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/aboutus" element={<div>aboutus Page</div>} />

            {/* Auth Routes */}
            <Route path="/signup" element={<SignUp />} />

            <Route path="/otp_pop_up" element={<OtpVerification />} />

            <Route path="/login" element={<Login loggedInUser={setLoggedInUser} />} />

            {/* Dashboard routes */}
            <Route
              path="/admin"
              element={<ProtectedRoute loading={loading} user={loggedInUserProfile} allowedUserRoles={"admin"}><h1>Admin</h1></ProtectedRoute>
              }
            />
            <Route
              path="/instructor"
              element={<ProtectedRoute loading={loading} user={loggedInUserProfile} allowedUserRoles={"instructor"}> <InstructorDashboard /> </ProtectedRoute>
              }
            />
            <Route
              path="/student"
              element={<ProtectedRoute loading={loading} user={loggedInUserProfile} allowedUserRoles={"student"}> <Student /> </ProtectedRoute>
              }
            />

            {/* CRUD route */}
            <Route path="/update-student" element={<UpdateStudent />} />
            <Route path="/update-instructor" element={<InstructorUpdate />} />

            <Route path="/change-profile/:id" element={<ChangeProfileAvatar />} />

            <Route path="/update-admin/" element={<UpdateAdmin />} />

            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Courses Routes */}
            <Route path="/create/courses" element={<CreateCourseView />} />
            <Route path="/update/course" element={<CourseLayout><UpdateCourse /></CourseLayout>} />
            <Route path="/all/course" element={<CourseLayout />} />
            <Route path="/enrolled/students" element={<CourseLayout />} />




            {/* unauthorized user route */}
            <Route path="/unauthorized" element={<h1>Unauthorized</h1>} />
            {/* Fallback Route */}
            <Route path="*" element={<><h1>Fallbackroute</h1></>} />

            <Route path="/verify-profile" element={<><h1>Please verify your profile to access this page</h1></>} />


          </Routes>
        </MainLayout>
      </Router>
    </>
  );
};
