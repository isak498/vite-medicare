const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        {...props}
    >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

export default CloseIcon