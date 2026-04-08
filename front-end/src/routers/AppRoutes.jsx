import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { MainLayout } from "../layout/MainLayout";
import { Home } from "../pages/Home/Home";
import { Login } from "../components/Login";
import { OtpVerification } from "../utils/OtpVerification";
import { SignUp } from "../components/SignUp";
import { Blog } from "../pages/Blog/Blog";
import { Student } from "../components/Students/Student";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { UpdateStudent } from "../components/Students/UpdateStudent"
import { UpdateAdmin } from "../components/Admin/UpdateAdmin";
import { ForgotPassword } from "../utils/ForgotPassword";
import { ChangeProfileAvatar } from "../components/ChangeProfileAvatar";
import { InstructorDashboard } from "../components/Instructor/InstructorDashboard";
import { CourseLayout } from "../components/Courses/CourseLayout";
import { UpdateCourse } from "../components/Courses/UpdateCourse";
import { CreateCourseView } from "../components/Courses/CreateCourseView";
import { InstructorUpdate } from "../components/Instructor/InstructorUpdate";
import { Courses } from "../pages/Courses/Courses";
import { AboutUs } from "../pages/About/About";
import { Unauthorized } from "../pages/Partials/Unauthorized"
import { NotFound } from "../pages/Partials/NotFound"
import { VerifyProfile } from "../pages/Partials/VerifyProfile";
import { Development } from "../pages/Courses/Course-Category/Development";
import { Design } from "../pages/Courses/Course-Category/Design";
import { Business } from "../pages/Courses/Course-Category/Business";
import { PersonalDevelopment } from "../pages/Courses/Course-Category/PersonalDevelopment";
import { ITSoftware } from "../pages/Courses/Course-Category/ITAndSoftware";
import { DataAI } from "../pages/Courses/Course-Category/DataAndAI";
import { Creative } from "../pages/Courses/Course-Category/Creative";
import { LanguageLearning } from "../pages/Courses/Course-Category/LanguageLearning";
import ContextData from "../Contexts/Context";


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
            <Route path="/courses" element={<ProtectedRoute loading={loading} user={loggedInUserProfile} allowedUserRoles={"student"}><Courses /></ProtectedRoute>} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/aboutus" element={<AboutUs />} />

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

            {/* Course category routes */}
            <Route path="/development" element={<Development />} />
            <Route path="/design" element={<Design />} />
            <Route path="/business" element={<Business />} />
            <Route path="/personal-development" element={<PersonalDevelopment />} />
            <Route path="/it-software" element={<ITSoftware />} />
            <Route path="/data-ai" element={<DataAI />} />
            <Route path="/creative" element={<Creative />} />
            <Route path="/language-learning" element={<LanguageLearning />} />

            {/* Unauthorized user route */}
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<NotFound />} />  {/* Fallback Route */}
            <Route path="/verify-profile" element={<VerifyProfile />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
};
