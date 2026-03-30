import DoctorLogo from "../../assets/jpg/doctor.jpg";
import { motion } from "framer-motion";

const BannerHomePage = () => {
    return (<div className="bg-primary py-5 flex flex-col md:flex-row justify-center items-center md:h-[500px] rounded overflow-hidden">
        <motion.img
            src={DoctorLogo}
            alt="logo"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="py-8 px-5 rounded-full max-w-[200px] md:max-w-[350px]  max-h-[400px]  w-full object-contain"
        />


        <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white italic text-base md:text-lg flex md:w-[50%] text-center justify-center items-center px-6"
        >
            <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                A highly accomplished and respected medical professional, known for exceptional expertise, precision in diagnosis, and a patient-first approach. With years of experience and a commitment to excellence, this doctor delivers world-class healthcare with compassion and integrity. Dedicated to continuous learning and advanced medical practices, they ensure every patient receives personalized, effective, and trustworthy treatment. Their calm demeanor, professionalism, and attention to detail make them a trusted name in modern healthcare
            </motion.span>
        </motion.div>

    </div>);
}

export default BannerHomePage;