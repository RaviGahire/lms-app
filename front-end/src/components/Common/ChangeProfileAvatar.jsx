import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getStoredToken } from "../../utils/getStoredToken";
import { useContext } from "react";
import { IconX } from "@tabler/icons-react";
import { Input } from "../../pages/Auth/FormFields";
import axios from "axios";
import ContextData from "../../contexts/Context";
const API_URL = import.meta.env.VITE_API_URL;

export const ChangeProfileAvatar = () => {
    const [avatar, setAvatar] = useState(null);
    const [preview, setPreview] = useState(null);
    const [isClose, setClose] = useState(true);
    const { fetchUserProfile, loggedInUserProfile } = useContext(ContextData);

    const userAvtar = loggedInUserProfile?.avatar;

    const navigate = useNavigate();
    // console.log(avatar)

    const handleClose = () => {
        setClose(!isClose);
        navigate("/student");
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("avatar", avatar);

        console.log(formData);
        const token = getStoredToken();
        try {
            const res = await axios.patch(`${API_URL}auth/users/me`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // console.log(res)

            if (res.data.success) {
                alert("Avatar updated successfully");
                navigate("/student");
            }

            await fetchUserProfile();
        } catch (error) {
            console.error(error);
            alert("Error uploading avatar");
        }
    };

    return (
        <>
            {isClose ? (
                <div className="absolute inset-0 bg-cyan-950/90 z-50 flex justify-center items-center">
                    {/* Line wraper */}
                    <div className=" h-screen  flex justify-center items-center">
                        {/* Horizontal lines-1 */}
                        <div className="h-14 w-full z-10  absolute mx-auto top-0 bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-size-[10px_10px] border-y border-gray-50/50">
                        </div>
                     
                        {/* card */}
                        <div className="max-w-md mx-auto relative bg-cyan-600 px-6 py-3 rounded-lg z-60">
                            <div className="flex justify-end absolute left-0 right-2">
                                <IconX
                                    onClick={handleClose}
                                    className="  text-neutral-200 hover:text-neutral-50 cursor-pointer"
                                    stroke={2}
                                />
                            </div>
                            {/* Preview */}
                            {preview ? (
                                <div className="size-32 rounded-full mx-auto mt-6 overflow-hidden border-2 border-neutral-100">
                                    <img
                                        src={preview}
                                        alt="avatar preview"
                                        className="size-full object-cover mx-auto"
                                    />
                                </div>
                            ) : (
                                <div className="size-32 rounded-full mx-auto mt-6 overflow-hidden border-2 border-neutral-100">
                                    <img
                                        src={userAvtar}
                                        alt="avatar preview"
                                        className=" size-full object-cover"
                                    />
                                </div>
                            )}
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                {/* File Input */}
                                <Input
                                    type="file"
                                    name="avatar"
                                    id="avatar"
                                    accept="image/*"
                                    onChange={handleChange}
                                    className={"cursor-pointer"}
                                />
                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="bg-black text-white py-2 rounded cursor-pointer"
                                >
                                    Upload{" "}
                                </button>
                            </form>
                            <p>Please select </p>
                        </div>
                        {/* Line-2 */}
                        <div className="h-14 w-full z-10  absolute mx-auto bottom-0 bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-size-[10px_10px] border-y border-gray-50/50">
                        </div>

                    </div>
                </div>
            ) : null}
        </>
    );
};
