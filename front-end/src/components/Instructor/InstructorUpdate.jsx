import { useContext, useState } from 'react'
import { UpdateUserDetails } from "../../utils/UpdateUserDetails"
import { useLocation } from 'react-router-dom'
import { Input } from '../Input'
import ContextData from "../../Contexts/Context"

export const InstructorUpdate = () => {
 const location = useLocation()

  const { student } = useContext(ContextData)

  
  const { currentUser } = location.state || {};

  const [update, setUpdate] = useState({
    college: student?.college,
    city: student?.city,
    phone: student?.phone,
    gender: student?.gender,
    qualification: student?.qualification,
    nationality: student?.nationality,
    dob: student?.dob,
    state: student?.state,
    pincode: student?.pincode,
    gender: student?.gender,
    pincode: student?.pincode,

  })

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
  
            <h2 className='text-3xl font-bold text-slate-800 mb-8'>Update your details</h2>
  
            <form className='grid grid-cols-1 md:grid-cols-2 gap-6' method='post' onSubmit={handleSubmit}>
  
              {/* phone*/}
              <Input
                label='Bio'
                type='text'
                name='bio'
                id='bio'
                placeholder='Enter your phone number'
                value={update.bio}
                onChange={handleChange}
              // isEditable={true}
              // className={'cursor-not-allowed'}
              />
              {/* college*/}
                  <Input
                label='experience'
                type='text'
                name='experience'
                id='experience'
                placeholder='Enter your experience'
                value={update.experience}
                onChange={handleChange}
              />
              <Input
                label='expertise'
                type='text'
                name='expertise'
                id='expertise'
                placeholder='Enter your expertise'
                value={update.expertise}
                onChange={handleChange}
              />
              <Input
                label='phone'
                type='text'
                name='phone'
                id='phone'
                placeholder='Enter your phone'
                value={update.phone}
                onChange={handleChange}
              />         
                <div>
                <UpdateUserDetails
                  label='Save Changes'
                  endpoint={`students/update-studs/${student?.id}`}
                  payload={update}
                  redirectTo='/student'
                />
                </div>
            </form>
          </div>
        </div>
      </section>
  )
}
