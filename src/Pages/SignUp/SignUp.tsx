import { useFormik } from "formik";
import * as Yup from "yup";
import { useRegisterMutation } from "../../hooks/queries/useAuthMutations";
import CommanSocialUI from "../../component/CommanSocialUI.tsx";
import Input from "../../component/Input.tsx";
import Logo from "../../component/logo.tsx";
import ErrorMsg from "../../component/ErrorMsg.tsx";

const SignUpSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Name is too short!")
        .max(50, "Name is too long!")
        .required("Full name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    address: Yup.string().required("Address is required"),
    birthdate: Yup.date().required("Birthdate is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm password is required"),
});

const SignUp = () => {
    // Pass dynamic onSuccess and onError from the component!
    const mutation = useRegisterMutation({
        onSuccess: (data) => {
            // Here you can set state, interact with Formik, navigate to a new page, etc!
            alert(`Thanks for joining us! We've registered ${data.name || "you"}!`);
            console.log("Success payload:", data);
        },
        onError: (error) => {
            alert("Something went wrong with the registration API!");
            console.error("Component Error context:", error);
        }
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            address: "",
            birthdate: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: SignUpSchema,
        onSubmit: (values) => {
            // Call API implementation
            mutation.mutate({
                name: values.name,
                email: values.email,
                address: values.address,
                birthdate: values.birthdate,
                password: values.password
            });
        },
    });

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

                {/* Form */}
                <form onSubmit={formik.handleSubmit} className="space-y-4">
                    <div>
                        <Input
                            labelName="Full Name"
                            placeholder="e.g. John Doe"
                            {...formik.getFieldProps("name")}
                        />
                        {formik.touched.name && formik.errors.name && (
                            <ErrorMsg message={formik.errors.name} />
                        )}
                    </div>

                    <div>
                        <Input
                            labelName="Email"
                            type="email"
                            placeholder="e.g. john@example.com"
                            {...formik.getFieldProps("email")}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <ErrorMsg message={formik.errors.email} />
                        )}
                    </div>

                    <div>
                        <Input
                            labelName="Address"
                            placeholder="Your residential address"
                            {...formik.getFieldProps("address")}
                        />
                        {formik.touched.address && formik.errors.address && (
                            <ErrorMsg message={formik.errors.address} />
                        )}
                    </div>

                    <div>
                        <Input
                            labelName="Birthdate"
                            type="date"
                            {...formik.getFieldProps("birthdate")}
                        />
                        {formik.touched.birthdate && formik.errors.birthdate && (
                            <ErrorMsg message={formik.errors.birthdate} />
                        )}
                    </div>

                    <div>
                        <Input
                            labelName="Password"
                            type="password"
                            placeholder="••••••••"
                            {...formik.getFieldProps("password")}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <ErrorMsg message={formik.errors.password} />
                        )}
                    </div>

                    <div>
                        <Input
                            labelName="Confirm Password"
                            type="password"
                            placeholder="••••••••"
                            {...formik.getFieldProps("confirmPassword")}
                        />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                            <ErrorMsg message={formik.errors.confirmPassword} />
                        )}
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={mutation.isPending}
                        className={`w-full text-white py-3.5 rounded-xl font-semibold shadow-lg hover:-translate-y-0.5 transition-all duration-300 mt-8 ${mutation.isPending ? "bg-gray-400 cursor-not-allowed" : "bg-primary shadow-primary/30 hover:bg-primary-dark hover:shadow-xl"
                            }`}
                    >
                        {mutation.isPending ? "Creating Account..." : "Create Account"}
                    </button>
                    {mutation.isError && <ErrorMsg message="Server error. Please try again later." className="text-center mt-2" />}
                </form>

                <p className="text-sm text-center mt-6 text-gray-500">
                    Already have an account?{" "}
                    <a href="/log-in" className="text-primary font-bold hover:underline">
                        Log In
                    </a>
                </p>

                <div className=" pt-2 border-t border-gray-100 flex justify-center mt-3 ">
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
