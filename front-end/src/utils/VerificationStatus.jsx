import { useNavigate } from "react-router-dom"
import axios from "axios"
import { IconCircleDashedCheck } from "@tabler/icons-react";

export const VerificationStatus = ({labelOne,labelTwo, isUserVerified, userEmail, Error }) => {
    const API_URL = import.meta.env.VITE_API_URL

    const navigate = useNavigate()

    const verifyMe = async () => {
        try {
            const res = await axios.post(`${API_URL}/send-email-otp`, {
                email: userEmail,
            });

            if (res?.data?.success) {
                alert('Please check your email')
                navigate("/otp_pop_up");
            } else {
                console.log("Verification failed");
                alert('Verification failed')
            }
        } catch (error) {
            console.error("Error while verifying:", error);
        }
    };

    return (
        <div className="w-full text-center"> 
      {isUserVerified ? (
        // Already Verified (Badge)
        <div
          className="inline-flex items-center mx-auto gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 cursor-default"
          title="Verified"
        >
          <p className="text-sm font-semibold capitalize">{labelTwo}</p>
          <IconCircleDashedCheck size={20} className="text-blue-600" />
        </div>
      ) : (
        // Unverified (Action Button)
        <button
          onClick={verifyMe}
          className="inline-flex items-center mx-auto gap-2 px-4 py-2 rounded-full bg-blue-50 text-red-700 hover:bg-blue-100 transition-colors border border-blue-200"
        >
          <p className="text-sm font-bold capitalize">{labelOne}</p>
          <IconCircleDashedCheck size={20} className="animate-pulse" />
        </button>
      )}
    </div>
    );
};
