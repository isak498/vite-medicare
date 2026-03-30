import { useState } from "react";
import CommanSocialUI from "../../component/CommanSocialUI.tsx";
import Input from "../../component/Input.tsx";
import Logo from "../../component/logo.tsx";

const SignUp = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        address: "",
        birthdate: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (key: string, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = () => {
        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        console.log("Form Data:", form);
    };

    return (
        <CommanSocialUI>
            <div className="w-full bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 sm:p-10 my-4">

                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <Logo />
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">Create an Account</h1>
                    <p className="text-gray-500 text-sm mt-2">Join MediCare and start your health journey</p>
                </div>

                {/* Inputs */}
                <div className="space-y-4">
                    <Input
                        labelName="Full Name"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="e.g. John Doe"
                    />

                    <Input
                        labelName="Email"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="e.g. john@example.com"
                    />

                    <Input
                        labelName="Address"
                        value={form.address}
                        onChange={(e) => handleChange("address", e.target.value)}
                        placeholder="Your residential address"
                    />

                    <Input
                        labelName="Birthdate"
                        type="date"
                        value={form.birthdate}
                        onChange={(e) => handleChange("birthdate", e.target.value)}
                    />

                    <Input
                        labelName="Password"
                        type="password"
                        value={form.password}
                        onChange={(e) => handleChange("password", e.target.value)}
                        placeholder="••••••••"
                    />

                    <Input
                        labelName="Confirm Password"
                        type="password"
                        value={form.confirmPassword}
                        onChange={(e) => handleChange("confirmPassword", e.target.value)}
                        placeholder="••••••••"
                    />
                </div>

                {/* Button */}
                <button
                    onClick={handleSubmit}
                    className="w-full bg-primary text-white py-3.5 rounded-xl font-semibold shadow-lg shadow-primary/30 hover:bg-primary-dark hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 mt-8"
                >
                    Create Account
                </button>

                <p className="text-sm text-center mt-6 text-gray-500">
                    Already have an account?{" "}
                    <a href="/log-in" className="text-primary font-bold hover:underline">
                        Log In
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

export default SignUp;