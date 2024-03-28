interface TriArrowRightProps {
  className?: string;
}

const TriArrowRight: React.FC<TriArrowRightProps> = ({ className }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <path
      d="M6.75 12.894V5.10599L12.8655 8.99999L6.75 12.894Z"
      fill="currentColor"
    />
  </svg>
);

export default TriArrowRight;
