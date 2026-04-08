
import { useNavigate } from "react-router-dom";

export const VerifyProfile = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      
      <div className="max-w-md w-full bg-white rounded-xl shadow-sm p-8 text-center">
        
        {/* Icon */}
        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-yellow-100 rounded-full">
          <span className="text-2xl">⚠️</span>
        </div>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-semibold text-red-500">
          Verify Your Profile
        </h2>

        {/* Description */}
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          Your profile is incomplete or not verifyed. Please verify your profile to access all features.
        </p>

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          
          <button
            onClick={() => navigate("/profile")}
            className="px-3 py-1.5 md:px-6 md:py-3 font-semibold cursor-pointer  bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all duration-200 shadow-md"
          >
            Complete Profile
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-3 py-1.5 md:px-6 md:py-3 font-semibold cursor-pointer border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200"
          >
            Go Home
          </button>

        </div>

      </div>

    </section>
  );
};

