interface ArrowRightProps {
  className?: string;
}

const ArrowRight: React.FC<ArrowRightProps> = ({ className }) => (
  <svg
    width="14"
    height="6"
    viewBox="0 0 14 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <path
      d="M13.0384 3L8.0384 0.113249V5.88675L13.0384 3ZM0 3.5H8.5384V2.5H0L0 3.5Z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowRight;
