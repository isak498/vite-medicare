import { Link } from "react-router-dom";
import { FaAmbulance } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      {/* Icon Area */}
      <div className="relative mb-8">
        <div className="text-primary text-9xl drop-shadow-xl animate-bounce">
          <FaAmbulance />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      </div>

      {/* Text Content */}
      <h1 className="text-8xl font-extrabold text-gray-800 tracking-tighter mb-2">
        404
      </h1>
      <h2 className="text-3xl font-bold text-gray-700 mb-4">
        Oops! Page Not Found.
      </h2>
      <p className="text-lg text-gray-500 max-w-md mx-auto mb-10 leading-relaxed">
        It looks like we can't find the page you're searching for. It might have been moved or removed entirely.
      </p>

      {/* Action Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-primary text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-primary/30 hover:bg-primary-dark hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <span>&larr;</span> Back to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
