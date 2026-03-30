import { useState } from "react";
import Input from "../../component/Input.tsx";
// import useAuthStore from "../../store/useAuthStore.js";
import Logo from "../../component/logo.tsx";
import CommanSocialUI from "../../component/CommanSocialUI.tsx";

const Login = () => {
    const [email, setEmail] = useState("");
    // const login = useAuthStore((state) => state.login);

    return (
        <CommanSocialUI>
            <div className="w-full bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 sm:p-10">

                {/* Logo */}
                <div className="flex justify-center mb-5">
                    <Logo />
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
                    <p className="text-gray-500 text-sm mt-2">Log in to your account to continue</p>
                </div>

                {/* Inputs */}
                <div className="space-y-5">
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        labelName={"Email"}
                        placeholder="Enter your email"
                    />

                    <Input type="password" labelName={"Password"} placeholder="••••••••" />

                    <div className="flex justify-end">
                        <span className="text-sm font-medium text-primary cursor-pointer hover:text-primary-dark transition-colors">
                            Forgot Password?
                        </span>
                    </div>

                    <button
                        className="w-full bg-primary text-white py-3.5 rounded-xl font-semibold shadow-lg shadow-primary/30 hover:bg-primary-dark hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 mt-2"
                    >
                        Log In
                    </button>
                </div>

                {/* Signup */}
                <p className="text-sm text-center mt-8 text-gray-500">
                    Don't have an account?{" "}
                    <a href="/sign-up" className="text-primary font-bold hover:underline">
                        Sign up
                    </a>
                </p>

                <div className=" pt-2 border-t border-gray-100 flex justify-center">
                    <a
                        href="/"
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary font-medium transition-colors"
                    >
                        ← Back to Home
                    </a>
                </div>
            </div>
        </CommanSocialUI>
    );
};

export default Login;
