import { useState } from "react";

interface Props {
    title: string;
    children: React.ReactNode
}

const AccordionItem = ({ title, children }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b  border-slate-200">
            <button
                onClick={() => setOpen(!open)}
                className="w-full rounded-[10px] bg-primary px-5 flex justify-between items-center py-5 text-slate-800"
            >
                <span className="text-white text-left font-bold text-base">{title}</span>

                <span className="transition-all duration-300">
                    {open ? (
                        // ➖ Minus Icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="white"
                            className="w-4 h-4"
                        >
                            <path d="M3.75 8a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7A.75.75 0 0 1 3.75 8Z" />
                        </svg>
                    ) : (
                        // ➕ Plus Icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="white"
                            className="w-4 h-4"
                        >
                            <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                        </svg>
                    )}
                </span>
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "" : "max-h-0"
                    }`}
            >
                <div className="pb-5 text-sm text-slate-500">{children}</div>
            </div>
        </div>
    );
};

export default AccordionItem;