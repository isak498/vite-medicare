import React from "react";

type MenuOpenProps = {
    isOpen: boolean;
    toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MenuOpen({ isOpen, toggleMenu }: MenuOpenProps) {
    return (
        <button title="button" onClick={() => toggleMenu((prev) => !prev)}>
            <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                stroke="black"
                strokeWidth="2"
                fill="none"
            >
                {isOpen ? (
                    <>
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </>
                ) : (
                    <>
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                )}
            </svg>
        </button>
    );
}