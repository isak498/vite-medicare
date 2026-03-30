import { motion } from "framer-motion";

const OurTeam = () => {

    const container = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.2 }
        }
    };

    const doctorLink = [
        {
            imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT67S-Kq1GmFYaxCGKx_JN2Quu0h36vp8Cdzw&s",
            name: "Dr. Meena Sharma",
            specialist: "Heart Doctor",
            email: "meena@gmail.com",
            description: "Dedicated and compassionate doctor focused on patient well-being."
        },
        {
            imageLink: "https://randomuser.me/api/portraits/men/32.jpg",
            name: "Dr. Raj Patel",
            specialist: "General Physician",
            email: "raj@gmail.com",
            description: "Experienced physician known for accurate diagnosis."
        },
        {
            imageLink: "https://randomuser.me/api/portraits/women/44.jpg",
            name: "Dr. Neha Gupta",
            specialist: "Dermatologist",
            email: "neha@gmail.com",
            description: "Provides personalized and compassionate treatment."
        },
        {
            imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT67S-Kq1GmFYaxCGKx_JN2Quu0h36vp8Cdzw&s",
            name: "Dr. Isha Sharma",
            specialist: "Liver Doctor",
            email: "meena@gmail.com",
            description: "Dedicated and compassionate doctor focused on patient well-being."
        },
    ];


    return (
        <div className="bg-background py-8 rounded-md px-6 md:px-16">

            {/* Title */}
            <h2 className="text-3xl lg:text-4xl uppercase font-bold text-center pb-5 text-primary ">
                Our Top Doctors
            </h2>

            <div className="mt-2 mb-8 text-center text-sm lg:text-base italic justify-center flex items-center w-full">Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut
                laoree Dolore magna aliquam erat volutpat.</div>

            {/* Grid */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
            >
                {doctorLink.map((doc, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="relative h-[350px] rounded-2xl overflow-hidden group cursor-pointer"
                    >
                        {/* Background Image */}
                        <img
                            src={doc.imageLink}
                            alt={doc.name}
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition duration-300" />

                        {/* Name (Always Visible) */}
                        <div className="absolute bottom-4 left-4 text-white z-10">
                            <h3 className="text-lg font-semibold">{doc.name}</h3>
                            <p className="text-sm text-gray-200">{doc.specialist}</p>
                        </div>

                        {/* Hover Content */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white opacity-0 group-hover:opacity-100 transition duration-500 z-10">

                            <p className="text-sm mb-3">
                                {doc.description}
                            </p>

                            <a
                                href={`mailto:${doc.email}`}
                                className="bg-white text-primary px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
                            >
                                {doc.email}
                            </a>
                        </div>

                    </motion.div>
                ))}
            </motion.div>

        </div>
    );
}

export default OurTeam;