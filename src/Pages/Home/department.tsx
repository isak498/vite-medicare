import AccordionItem from "../../component/Accordian.tsx";

const Department = () => {

    const medicalDepartments = [
        {
            department: "Cardiology (Heart)",
            doctor: {
                name: "Dr. Rajesh Mehta",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            description:
                "Cardiology focuses on diagnosing and treating heart-related conditions such as coronary artery disease, heart failure, arrhythmias, and hypertension. Cardiologists use advanced tests and procedures to ensure proper heart function and overall cardiovascular health.",
        },
        {
            department: "Gastroenterology (Stomach)",
            doctor: {
                name: "Dr. Priya Shah",
                image: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            description:
                "Gastroenterology focuses on the digestive system, including the stomach, intestines, liver, and pancreas. It deals with conditions like acidity, ulcers, liver diseases, and digestive disorders, helping patients maintain a healthy digestive tract.",
        },
        {
            department: "Pulmonology (Lungs)",
            doctor: {
                name: "Dr. Amit Patel",
                image: "https://randomuser.me/api/portraits/men/65.jpg"
            },
            description:
                "Pulmonology specializes in the respiratory system, including lungs and airways. It focuses on diagnosing and treating conditions like asthma, chronic obstructive pulmonary disease (COPD), infections, and other breathing-related disorders.",
        }
    ];

    return (
        <div className="bg-background py-8 rounded-md px-6 md:px-16">
            <h2 className="text-3xl lg:text-4xl  uppercase font-bold text-center pb-5 text-primary ">
                Our Department
            </h2>

            <div className="mt-2 mb-8 text-center text-sm lg:text-base italic justify-center flex items-center w-full">Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut
                laoree Dolore magna aliquam erat volutpat.</div>

            <div className="flex flex-col gap-5">
                {medicalDepartments.map((m) => {
                    return (
                        <AccordionItem
                            key={m.department}
                            title={m.department}
                            children={

                                <div className="flex mt-5 gap-3 ">
                                    <p className="text-textColor text-sm">{m.description}</p>

                                    <div>
                                        <img
                                            width={100}
                                            alt="doctorimage"
                                            className="rounded-[10px] min-w-[50px]"
                                            height={50}
                                            src={m.doctor.image} />
                                        <p className="text-textColor font-bold text-xs md:text-sm text-center  mt-2">{m.doctor.name}</p>
                                    </div>
                                </div>
                            }
                        />
                    )
                })}
            </div>
        </div>


    );
}

export default Department;