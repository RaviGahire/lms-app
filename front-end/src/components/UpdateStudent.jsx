import React, { useState } from 'react'
import { UpdateButton } from "../utils/UpdateUser"
import { useParams,useLocation } from 'react-router-dom'
import axios from 'axios'


export const UpdateStudent = () => {
  const location = useLocation();

  const { currentUser } = location.state || {};

  const [update, setUpdate] = useState({ userName: currentUser?.userName, email:currentUser?.email, college:currentUser?.college, phone: currentUser?.phone, gender: currentUser?.gender, qualification: currentUser?.qualification, nationality: currentUser?.nationality, dob: currentUser?.dob, address: currentUser?.address })
 

console.log(currentUser)
  
  const handleChange = (e) => {

    const { name, value } = e.target
    setUpdate({ ...update, [name]: value })


  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Hello')
    console.log(update)

  }


  return (
    <section aria-label='update user profile data' className='max-w-7xl mx-auto py-12 px-4'>
      <div className="flex flex-col md:flex-row gap-12 items-start">

        {/* Left Side: Important Notes */}
        <div className="bg-amber-50 p-8 rounded-2xl border border-amber-200 md:w-1/3">
          <h2 className='text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2'>
            <span className="text-3xl">💡</span> Important Notes
          </h2>

          <ul className="space-y-5">
            <li className="flex gap-3">
              <div className="mt-1 bg-amber-200 rounded-full h-5 w-5 flex items-center justify-center shrink-0 text-xs font-bold text-amber-900">1</div>
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong className="block text-amber-900">Data Privacy</strong>
                Your data is encrypted and used solely to personalize your learning experience and improve our platform's algorithms.
              </p>
            </li>

            <li className="flex gap-3">
              <div className="mt-1 bg-amber-200 rounded-full h-5 w-5 flex items-center justify-center shrink-0 text-xs font-bold text-amber-900">2</div>
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong className="block text-amber-900">Verification</strong>
                Email and Phone verification are required to unlock premium features and ensure account security.
              </p>
            </li>

            <li className="flex gap-3">
              <div className="mt-1 bg-amber-200 rounded-full h-5 w-5 flex items-center justify-center shrink-0 text-xs font-bold text-amber-900">3</div>
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong className="block text-amber-900">Accuracy</strong>
                Please ensure your <strong>Date of Birth</strong> and <strong>Qualification</strong> match your official documents for certificate generation.
              </p>
            </li>

            <li className="flex gap-3">
              <div className="mt-1 bg-amber-200 rounded-full h-5 w-5 flex items-center justify-center shrink-0 text-xs font-bold text-amber-900">4</div>
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong className="block text-amber-900">Profile Strength</strong>
                A complete profile (100%) increases your visibility to potential mentors and recruiters by up to 3x.
              </p>
            </li>

            <li className="flex gap-3">
              <div className="mt-1 bg-amber-200 rounded-full h-5 w-5 flex items-center justify-center shrink-0 text-xs font-bold text-amber-900">5</div>
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong className="block text-amber-900">Support</strong>
                If you're having trouble updating your nationality or email, please contact our support team.
              </p>
            </li>
          </ul>

          <div className="mt-8 p-4 bg-amber-100/50 rounded-xl border border-dashed border-amber-300">
            <p className="text-xs text-amber-700 text-center italic">
              "Your progress is our priority. Keeping your data updated helps us serve you better."
            </p>
          </div>
        </div>

        {/* Right Side: Update Form */}
        <div className="w-full md:w-2/3 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className='text-3xl font-bold text-slate-800 mb-8'>Update your profile</h2>

          <form className='grid grid-cols-1 md:grid-cols-2 gap-6' method='post' onSubmit={handleSubmit}>

            {/* Full Width Field */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-semibold text-slate-700">User Name</label>
              <input type="text" name='userName' placeholder='johndoe123'
                value={update.userName}
                onChange={handleChange}
                className='w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all' />
            </div>

            {/* Email with Verify Button */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Email Address</label>
              <div className="flex gap-2">
                <input type="email" name='email' placeholder='mail@example.com'
                  value={update.email}
                  onChange={handleChange}
                  className='grow px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none' />
                {/* email Verfiy btn */}
                <button type="button" className='px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium'>
                  Verify
                </button>
              </div>
            </div>

            {/* Phone with Verify Button */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Phone Number</label>
              <div className="flex gap-2">
                <input type="text" name='phone' placeholder='+91 234...' maxLength={10}
                  value={update.phone}
                  onChange={handleChange}
                  className='grow px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none' />
                <button type="button" className='px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium'>
                  Verify
                </button>
              </div>
            </div>

            {/* Select Fields or Standard Inputs */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Gender</label>
              <select onChange={handleChange} value={update.gender} name="gender" className='w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none'>
                <option hidden value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Date of Birth</label>
              <input type="date" name='dob' value={update.dob} onChange={handleChange} className='w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none' />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-semibold text-slate-700">College / School</label>
              <input type="text" name='college' value={update.college} onChange={handleChange} placeholder='University Name' className='w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none' />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-semibold text-slate-700">Address</label>
              <input type="text" value={update.address} onChange={handleChange} name='address' placeholder='Street, City, Country' className='w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none' />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Qualification</label>
              <input onChange={handleChange} value={update.qualification} type="text" name='qualification' placeholder='e.g. Bachelor of Science' className='w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none' />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Nationality</label>
              <input type="text" value={update.nationality} onChange={handleChange} name='nationality' placeholder='e.g. American' className='w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none' />
            </div>

            <div className="md:col-span-2 pt-6 flex flex-col sm:flex-row items-center gap-4">

              {/* Save Button */}
              <UpdateButton userId={currentUser?._id} updatedData ={update}  />

              {/* Discard Button */}
              <button
                type="reset"
                onClick={() => window.confirm("Are you sure? All unsaved changes will be lost.")}
                className="w-full sm:w-max px-10 py-3 bg-white text-slate-600 font-semibold rounded-xl border border-slate-300 hover:bg-slate-50 hover:text-red-600 hover:border-red-200 transition-all active:scale-95"
              >
                Discard Changes
              </button>

            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
