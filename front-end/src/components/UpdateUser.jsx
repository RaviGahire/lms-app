import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { UpdateButton } from './ActionButtons'


export const UpdateUser = () => {
    const [update, setUpdate] = useState({ userName: '', email: '', college: '', phone: '', location: '', gender: '', qualification: '', nationality: '', dob: '' })

    const { id } = useParams() // user id get from student profile
    const api = `http://localhost:3000/api/users`

    // console.log(id)

    const handleChange = (e) => {
        const { name, value } = e.target
        setUpdate({ ...update, [name]: value })
    }

    return (
        <>
            <div className="bg-gray-300">
                <h1>Upadte user profile</h1>

                <form className="max-w-2xl mx-auto space-y-4 rounded-xl border p-6 shadow">

                    {/* Username */}
                    <div>
                        <label className="block text-sm font-medium mb-1">User Name</label>
                        <input
                            type="text"
                            name="userName"
                            value={update.userName}
                            onChange={handleChange}
                            placeholder="Enter username"
                            className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={update.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>


                    {/* College */}
                    <div>
                        <label className="block text-sm font-medium mb-1">College</label>
                        <input
                            type="text"
                            name="college"
                            value={update.college}
                            onChange={handleChange}
                            placeholder="College name"
                            className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Phone</label>
                        <input
                            type="number"
                            name="phone"
                            maxLength={10}
                            value={update.phone}
                            onChange={handleChange}
                            placeholder="Phone number"
                            className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={update.location}
                            onChange={handleChange}
                            placeholder="Location"
                            className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Gender</label>
                        <select
                            name="gender"
                            className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"

                            onChange={handleChange}
                        >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Qualification */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Qualification</label>
                        <input
                            type="text"
                            name="qualification"
                            value={update.qualification}
                            onChange={handleChange}
                            placeholder="Highest qualification"
                            className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Nationality */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Nationality</label>
                        <input
                            type="text"
                            name="nationality"
                            placeholder="Nationality"
                            value={update.nationality}
                            onChange={handleChange}
                            className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Date of birth */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            value={update.dob}
                            onChange={handleChange}
                            className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>


                    {/* Submit */}
                    <div className="flex justify-between"> <UpdateButton componetRoute='/student'
                        apiUrl={api}
                        userId={id}
                        updatedData={update} 
                      
                        /> <button type='reset'>Reset</button></div>

                </form>


            </div>



        </>
    )
}
