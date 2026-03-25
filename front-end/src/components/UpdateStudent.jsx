import { useContext, useState } from 'react'
import { UpdateUserDetails } from "../utils/UpdateUserDetails"
import { useLocation } from 'react-router-dom'
import { Input } from './Input'
import ContextData from "../Contexts/Context"


export const UpdateStudent = () => {

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
              label='Phone'
              type='text'
              name='phone'
              id='phone'
              placeholder='Enter your phone number'
              value={update.phone}
              onChange={handleChange}
            // isEditable={true}
            // className={'cursor-not-allowed'}
            />
            {/* college*/}
                <Input
              label='College / School'
              type='text'
              name='college'
              id='college'
              placeholder='Enter your city'
              value={update.college}
              onChange={handleChange}
            />
            <Input
              label='City'
              type='text'
              name='city'
              id='city'
              placeholder='Enter your city'
              value={update.city}
              onChange={handleChange}
            />
            <Input
              label='Pincode'
              type='text'
              name='pincode'
              id='pincode'
              placeholder='Enter your pincode'
              value={update.pincode}
              onChange={handleChange}
            />
            <Input
              label='State'
              type='text'
              name='state'
              id='state'
              placeholder='Enter your state'
              value={update.state}
              onChange={handleChange}
            />
            <Input
              label='Nationality'
              type='text'
              name='nationality'
              id='nationality'
              placeholder='Enter your nationality'
              value={update.nationality}
              onChange={handleChange}
            />
            <Input
              label='Gender'
              type='text'
              name='gender'
              id='gender'
              placeholder='Enter your gender'
              value={update.gender}
              onChange={handleChange}
            />
            <Input
              label='Date of Birth'
              type='text'
              name='dob'
              id='dob'
              placeholder='Enter your dob'
              value={update.dob}
              onChange={handleChange}
            />
            <Input
              label='Qualification'
              type='text'
              name='qualification'
              id='qualification'
              placeholder='Enter your qualification'
              value={update.qualification}
              onChange={handleChange}
            />
            {/* Avatar/profile image */}
            <Input
              label='Profile Image'
              type='file'
              name='avatar'
              id='profile-image'
              value={update.avatar}
              onChange={handleChange}
              className={'md:col-span-2'}
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
