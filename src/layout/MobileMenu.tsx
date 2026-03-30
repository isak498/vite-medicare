import CloseIcon from "../assets/svg/close.tsx";
import { NavLink } from "react-router-dom";

interface Props {
    isOpen: boolean,
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: Props) {

    const menuLinks = [
        {
            path: "/features",
            name: "Features"
        },
        {
            path: "/reviews",
            name: "Reviews"
        },
        {
            path: "/about-us",
            name: "About"
        },
        {
            path: "/log-in",
            name: "Login"
        }, {
            path: "/sign-up",
            name: "Sign Up"
        },
    ]

    return (
        <>
            {/* Overlay */}
            {/* <div
                onClick={onClose}
                className={`fixed inset-0 bg-white backdrop-blur-sm z-100
    transition-opacity duration-300 ease-out
    ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            /> */}

            {/* Menu */}
            <div
                className={`fixed top-0 left-0 w-full bg-white z-50 shadow-xl
    transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
    ${isOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-full opacity-0"}`}
            >
                {/* Close Icon INSIDE menu (better UX) */}
                <div className="flex justify-end pt-4 pb-0 px-4">
                    <CloseIcon
                        onClick={onClose}
                        className="text-black w-[25px] h-[25px] cursor-pointer transition-transform duration-300 hover:rotate-90"
                    />
                </div>

                {/* Menu Items */}
                <div className="px-6 pb-6 flex flex-col space-y-2 ">
                    {menuLinks.map((menu, i) => (
                        <NavLink
                            key={menu.path}
                            to={menu.path}
                            className={`font-bold py-2 text-textColor text-[15px] ${i !== menuLinks.length - 1 ? "border-b-2 border-primary" : ""
                                }`}
                        >
                            {menu.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    );
}