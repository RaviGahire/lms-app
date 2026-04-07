
import { useNavigate } from "react-router-dom";

export const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      
      <div className="text-center max-w-md">
        
        {/* Error Code */}
        <h1 className="text-6xl font-bold text-teal-500">403</h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Unauthorized Access
        </h2>

        {/* Description */}
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          You don’t have permission to access this page.  
          Please login with the correct account or go back to the homepage.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all duration-200 shadow-md"
          >
            Go Home
          </button>

          <button
            onClick={() => navigate("/login")}
            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200"
          >
            Login
          </button>

        </div>

      </div>

    </section>
  );
};

