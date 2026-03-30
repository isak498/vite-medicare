
import { motion } from "framer-motion";
import { FaHeartbeat, FaFlask, FaStethoscope, FaHeadset } from "react-icons/fa";
import OurTeam from "./team.tsx";
import Department from "./department.tsx";
import BannerHomePage from "./bannerImage.tsx";

const HomePage = () => {

    const categary = [
        {
            icon: <FaHeartbeat />,
            title: "Heart Surgery",
            content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
        {
            icon: <FaFlask />,
            title: "LAB TESTING",
            content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
        {
            icon: <FaStethoscope />,
            title: "SYMPTOM CHECK",
            content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
        {
            icon: <FaHeadset />,
            title: "ONLINE HELP",
            content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        }
    ];

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 60 },
        show: { opacity: 1, y: 0 }
    };
    return (
        <div className="w-full">
            {/* Banner block usually is full width or inner */}
            <BannerHomePage />

            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-16 md:gap-24">
                {/* Features Content */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {categary.map((itemData, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100 flex flex-col items-center justify-center"
                        >
                            <div className="text-primary text-5xl mb-6 flex justify-center drop-shadow-md">
                                {itemData.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 mb-3 tracking-wide uppercase text-sm">
                                {itemData.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed">
                                {itemData.content}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Our Team */}
                <OurTeam />

                {/* Our Department */}
                <Department />
            </div>
        </div>
    );
}

export default HomePage;