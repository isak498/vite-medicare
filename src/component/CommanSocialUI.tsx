import type { ReactNode } from "react";
import LoginBGDoctor from "../assets/jpg/login-doctor-bg.png";

interface Props {
    children: ReactNode;
}

const CommanSocialUI = ({ children }: Props) => {
    return (
        <div className="min-h-screen w-full flex bg-gray-50 flex-col md:flex-row">
            {/* LEFT SIDE (Sticky Hero Image) */}
            <div className="hidden md:flex w-full md:w-1/2 bg-gradient-to-br from-primary to-primary-dark text-white items-center justify-center p-10 relative overflow-hidden sticky top-0 h-screen">
                {/* Decorative circles */}
                <div className="absolute top-[-10%] left-[-10%] w-[40%] aspect-square rounded-full bg-white/10 blur-3xl"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square rounded-full bg-white/10 blur-3xl"></div>

                <div className="max-w-md text-center z-10 flex flex-col items-center">
                    <img
                        src={LoginBGDoctor}
                        alt="Doctor"
                        className="w-full max-w-[320px] mx-auto mb-8 drop-shadow-2xl object-contain object-bottom"
                    />

                    <h2 className="text-4xl font-extrabold mb-4 tracking-tight leading-tight">
                        Your Health, <br/> Our Priority
                    </h2>

                    <p className="text-white/80 text-base leading-relaxed max-w-sm mx-auto">
                        Access top doctors, book appointments, and manage your health seamlessly with MediCare.
                    </p>
                </div>
            </div>

            {/* RIGHT SIDE (Scrollable Content) */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 overflow-y-auto min-h-screen relative">
                {/* Background patterns */}
                <div className="absolute inset-0 bg-slate-50 opacity-50 z-0"></div>

                <div className="w-full max-w-md z-10 relative">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default CommanSocialUI;