import { useEffect, useState } from "react";

export default function ScrollTopLoader() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const progress = (scrollTop / height) * 100;
            setScroll(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ✅ Always smooth scroll (custom animation)
    const scrollToTop = () => {
        const start = window.scrollY;
        const duration = 500;
        const startTime = performance.now();

        const animateScroll = (currentTime) => {
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            window.scrollTo(0, start * (1 - progress));

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    const radius = 24;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (scroll / 100) * circumference;

    if (scroll < 5) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                onClick={scrollToTop}
                className="relative w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-lg hover:scale-110 transition"
            >
                {/* SVG Progress Circle */}
                <svg className="absolute w-full h-full -rotate-90">
                    <circle
                        cx="28"
                        cy="28"
                        r={radius}
                        stroke="#e5e7eb"
                        strokeWidth="4"
                        fill="transparent"
                    />

                    <circle
                        cx="28"
                        cy="28"
                        r={radius}
                        stroke="#0d968b"
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        className="transition-all duration-200"
                    />
                </svg>

                {/* Arrow */}
                <span className="text-primary text-lg font-bold">↑</span>
            </button>
        </div>
    );
}