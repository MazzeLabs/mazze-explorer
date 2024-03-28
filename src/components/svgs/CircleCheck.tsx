interface CircleCheckProps {
  className?: string;
}

const CircleCheck: React.FC<CircleCheckProps> = ({ className }) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <rect
      x="2.64795"
      y="2"
      width="20"
      height="20"
      rx="10"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M10.1479 11.5L12.1479 13.5L16.1479 9.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CircleCheck;
