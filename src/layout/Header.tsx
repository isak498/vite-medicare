import { Link, NavLink } from "react-router-dom";
import MenuOpen from "../assets/svg/menuOpen.tsx";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu.tsx";
import useWindowWidth from "../hooks/useWindowWidth.tsx";
import Logo from "../component/logo.tsx";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const windowWidth = useWindowWidth();
    const isTabletView = windowWidth > 767;

    const menuLinks = [
        { path: "/features", name: "Features" },
        { path: "/reviews", name: "Reviews" },
        { path: "/about-us", name: "About" },
    ];

    useEffect(() => {
        setIsMenuOpen(false);
    }, [isTabletView]);

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    <Logo />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {menuLinks.map((menu) => (
                        <NavLink
                            key={menu.path}
                            to={menu.path}
                            className={({ isActive }) =>
                                `text-base font-semibold transition-all duration-300 hover:text-primary ${isActive ? 'text-primary' : 'text-gray-600'}`
                            }
                        >
                            {menu.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Desktop Auth Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <NavLink
                        to="/log-in"
                        className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors"
                    >
                        Log In
                    </NavLink>
                    <Link
                        to="/sign-up"
                        className="text-sm font-semibold bg-primary text-white px-5 py-2.5 rounded-full shadow-lg shadow-primary/30 hover:bg-primary-dark hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Sign Up
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                    <button
                        title="menu"
                        onClick={() => setIsMenuOpen(prev => !prev)}
                        className="p-2 text-gray-600 hover:text-primary transition-colors focus:outline-none"
                    >
                        <MenuOpen isOpen={isMenuOpen} toggleMenu={() => { }} />
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && !isTabletView && (
                    <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
                )}
            </div>
        </header>
    );
}

export default Header;
