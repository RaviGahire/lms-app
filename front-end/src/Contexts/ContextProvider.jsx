import ContextData from "../Contexts/Context"
import { useCallback, useEffect, useState } from "react"
import { getStoredToken } from "../utils/getStoredToken"
import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

const ContextProvider = ({ children }) => {
  const [loggedInUserProfile, setLoggedInUserProfile] = useState(null) // set the loggedIn user data to use globally

 const [loading, setLoading] = useState(!!getStoredToken())
  const [student, setStudent] = useState(null) // get current student data
  const [instructor, setInstructor] = useState(null)
  const [admin, setAdmin] = useState(null) 
  
 

  // console.log(instructor)
  // fetch user profile 
  const fetchUserProfile = useCallback(async () => {

    const token = getStoredToken() // get token from localstorage
    if (!token) {
      setLoading(false)
      return;
    }

    const student = await fetchStudentData(token)
    const instructor = await fetchInsrtuctorData(token)
    // const admin = await fetchAdminData(token)

    // console.log(instructor)

    setStudent({
      id: student.student?._id,
      phone: student.student?.phone,
      college: student.student?.college,
      dob: student.student?.dob,
      state: student.student?.state,
      city: student.student?.city,
      pincode: student.student?.pincode,
      gender: student.student?.gender,
      nationality: student.student?.nationality,
      qualification: student.student?.qualification,
      joined: student.student?.createdAt,
      course: student.student?.course

    })

    setInstructor({
      id: student.student?._id,
      phone: student.student?.phone,
      college: student.student?.college,
      dob: student.student?.dob,
      state: student.student?.state,
      city: student.student?.city,
      pincode: student.student?.pincode,
      gender: student.student?.gender,
      nationality: student.student?.nationality,
      qualification: student.student?.qualification,
      joined: student.student?.createdAt

    })


    setLoading(true);

    try {
      const response = await axios.get(`${API_URL}users/current-user`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const profile = response.data?.data || {}

      setLoggedInUserProfile({
        id: profile?._id,
        userName: profile?.userName,
        email: profile?.email,
        role: profile?.roles,
        isVerified: profile?.isVerified,
        avatar: profile?.avatar
      });
      // return profile || {}
    } catch (error) {
      console.error("Profile Fetch Error:", error);
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
    <ContextData.Provider value={{ loggedInUserProfile, loading, userLogout, student, instructor,admin, fetchUserProfile }}>
      {children}
    </ContextData.Provider>
  );
};

export default ContextProvider;


export const fetchStudentData = async (token) => {
  try {

    if (!token) {
      console.error("Fetch aborted: No authentication token provided.");
      return null;
    }
    const student = await axios.get(`${API_URL}students/current-studs`, { headers: { Authorization: `Bearer ${token}` } })

    if (!student) {
      console.error("Student not found yet");
      return null;
    }

    return student?.data

  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error(`Error fetching student data: ${errorMessage}`)
    throw error
  }


}

export const fetchInsrtuctorData = async (token)=>{
  try {

    if (!token) {
      console.error("Fetch aborted: No authentication token provided.");
      return null;
    }
    const student = await axios.get(`${API_URL}students/current-studs`, { headers: { Authorization: `Bearer ${token}` } })

    if (!student) {
      console.error("Student not found yet");
      return null;
    }

    return student?.data

  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error(`Error fetching student data: ${errorMessage}`)
    throw error
  }



}

export const fetchAdminData = async (token)=>{
  try {

    if (!token) {
      console.error("Fetch aborted: No authentication token provided.");
      return null;
    }
    const student = await axios.get(`${API_URL}students/current-studs`, { headers: { Authorization: `Bearer ${token}` } })

    if (!student) {
      console.error("Student not found yet");
      return null;
    }

    return student?.data

  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error(`Error fetching student data: ${errorMessage}`)
    throw error
  }



}