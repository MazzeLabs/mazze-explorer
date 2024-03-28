interface CircleMinusProps {
  className?: string;
}

const CircleMinus: React.FC<CircleMinusProps> = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <rect
      x="1.33331"
      y="1.33331"
      width="13.3333"
      height="13.3333"
      rx="6.66667"
      stroke="currentColor"
    />
    <path
      d="M6 8H10"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CircleMinus;
