import { useFormik } from "formik";
import * as Yup from "yup";
import { useLoginMutation } from "../../hooks/queries/useAuthMutations.ts";
import Input from "../../component/Input.tsx";
import Logo from "../../component/logo.tsx";
import CommanSocialUI from "../../component/CommanSocialUI.tsx";
import ErrorMsg from "../../component/ErrorMsg.tsx";

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});

const Login = () => {
    const mutation = useLoginMutation({
        onSuccess: (data) => {
            alert(`Welcome back!`);
            console.log("Login successful:", data);
            // Handle post-login actions like storing token, navigating, etc.
        },
        onError: (error) => {
            alert("Login failed. Check your credentials.");
            console.error("Login error:", error);
        }
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: LoginSchema,
        onSubmit: (values) => {
            mutation.mutate(values);
        },
    });

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

                {/* Form */}
                <form onSubmit={formik.handleSubmit} className="space-y-5">
                    <div>
                        <Input
                            {...formik.getFieldProps("email")}
                            labelName={"Email"}
                            placeholder="Enter your email"
                        />
                        {formik.touched.email && formik.errors.email && (
                            <ErrorMsg message={formik.errors.email} />
                        )}
                    </div>

                    <div>
                        <Input
                            {...formik.getFieldProps("password")}
                            type="password"
                            labelName={"Password"}
                            placeholder="••••••••"
                        />
                        {formik.touched.password && formik.errors.password && (
                            <ErrorMsg message={formik.errors.password} />
                        )}
                    </div>

                    <div className="flex justify-end">
                        <span className="text-sm font-medium text-primary cursor-pointer hover:text-primary-dark transition-colors">
                            Forgot Password?
                        </span>
                    </div>

                    <button
                        type="submit"
                        disabled={mutation.isPending}
                        className={`w-full text-white py-3.5 rounded-xl font-semibold shadow-lg hover:-translate-y-0.5 transition-all duration-300 mt-2 ${mutation.isPending ? "bg-gray-400 cursor-not-allowed" : "bg-primary shadow-primary/30 hover:bg-primary-dark hover:shadow-xl"
                            }`}
                    >
                        {mutation.isPending ? "Logging in..." : "Log In"}
                    </button>
                    {mutation.isError && <ErrorMsg message="Login error. Please try again." className="text-center mt-2" />}
                </form>

                {/* Signup */}
                <p className="text-sm text-center mt-8 text-gray-500">
                    Don't have an account?{" "}
                    <a href="/sign-up" className="text-primary font-bold hover:underline">
                        Sign up
                    </a>
                </p>

                <div className=" pt-2 border-t border-gray-100 flex justify-center mt-3">
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
