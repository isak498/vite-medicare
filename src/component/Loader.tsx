import { FaHeartbeat } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm">
      <div className="relative flex flex-col items-center">
        {/* Pulsing heart icon */}
        <div className="text-primary text-6xl md:text-8xl animate-pulse flex justify-center items-center drop-shadow-xl">
          <FaHeartbeat className="animate-bounce" />
        </div>
        
        {/* Radiating circles behind the heart */}
        <div className="absolute top-0 w-24 h-24 md:w-32 md:h-32 bg-primary/20 rounded-full animate-ping -z-10"></div>
        <div className="absolute top-[-10%] w-32 h-32 md:w-40 md:h-40 bg-primary/10 rounded-full animate-ping animation-delay-300 -z-10"></div>

        <h2 className="mt-8 text-2xl md:text-3xl font-bold tracking-wider text-gray-800 animate-pulse">
          Medi<span className="text-primary">Care</span>
        </h2>
        <p className="mt-3 text-sm font-medium text-gray-500 uppercase tracking-widest animate-pulse">
          Preparing your health portal...
        </p>
        
        {/* Loading bar */}
        <div className="w-48 h-1.5 bg-gray-200 rounded-full mt-6 overflow-hidden">
          <div className="h-full bg-primary w-full animate-[progress_1.5s_ease-in-out_infinite] origin-left rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
