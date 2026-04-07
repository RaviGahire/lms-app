import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      
      <div className="text-center max-w-md">
        
        <h1 className="text-6xl font-bold text-teal-500">404</h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all"
        >
          Go Home
        </button>

      </div>

    </section>
  );
};

