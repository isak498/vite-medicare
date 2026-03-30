import { lazy } from "react";

const Home = lazy(() => import("../Pages/Home/home.tsx"));
const Login = lazy(() => import("../Pages/Login/Login.tsx"));
const SignUp = lazy(() => import("../Pages/SignUp/SignUp.tsx"));
const NotFound = lazy(() => import("../Pages/NotFound/NotFound.tsx"));

export const CommonRouter = [
    {
        path: "/",
        element: Home
    },
    {
        path: "/log-in",
        element: Login
    },
    {
        path: "/sign-up",
        element: SignUp
    },
    {
        path: "*",
        element: NotFound
    }
]