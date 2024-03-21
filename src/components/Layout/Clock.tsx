interface ClockProps {
  className?: string;
}

const Clock: React.FC<ClockProps> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <circle cx="12" cy="14" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M10 2H14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 2L12 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 14L15 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M18.5 7L19 6.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default Clock;
