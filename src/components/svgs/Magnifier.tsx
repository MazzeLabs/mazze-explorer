interface MagnifierProps {
  className?: string;
}

const Magnifier: React.FC<MagnifierProps> = ({ className }) => (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <circle
      cx="8.75"
      cy="8.25"
      r="6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.875 12.7185L16.625 16.4685"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Magnifier;
