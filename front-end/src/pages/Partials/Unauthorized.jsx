
import { useNavigate } from "react-router-dom";

export const Unauthorized = ({ heading, subHeading,statusCode }) => {
  const navigate = useNavigate();

  const deafultMsg = {
    mainText: 'Unauthorized Access',
    subText: ` You don’t have permission to access this page.  
          Please login with the correct account or go back to the homepage.`
  }

  return (
    <section className="min-h-screen flex justify-center bg-gray-50 px-4">

      <div className="text-center mt-8 max-w-md">

        {/* Error Code */}
        <h1 className="text-3xl md:text-6xl font-bold text-red-500 ">{statusCode || 403}</h1>

        {/* Title */}
        <h2 className="mt-4 md:text-4xl font-semibold text-gray-800">
          {heading || deafultMsg.mainText}
        </h2>

        {/* Description */}
        <p className="mt-2 text-gray-600 text-xs md:text-sm sm:text-base">
          {subHeading || deafultMsg.subText}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">

          <button
            onClick={() => navigate("/")}
            className="px-3 py-1.5 md:px-6 md:py-3 font-semibold bg-teal-600 cursor-pointer text-sm md:text-lg text-white rounded-lg hover:bg-teal-600 transition-all duration-200 shadow-md"
          >
            Go Home
          </button>

          <button
            onClick={() => navigate("/login")}
            className="px-3 py-1.5 md:px-6 md:py-3 font-semibold border text-sm md:text-lg cursor-pointer border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200"
          >
            Login
          </button>

        </div>

      </div>

    </section>
  );
};

