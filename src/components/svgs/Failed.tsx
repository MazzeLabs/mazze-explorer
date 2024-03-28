interface CircleCloseProps {
  className?: string;
}

const CircleClose: React.FC<CircleCloseProps> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="10"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M9.8787 14.1215L14.1213 9.87891"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.8787 9.87894L14.1213 14.1216"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CircleClose;
