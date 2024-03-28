interface CircleLinkProps {
  className?: string;
}

const CircleLink: React.FC<CircleLinkProps> = ({ className }) => (
  <svg
    width="16"
    height="18"
    viewBox="0 0 16 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <rect
      x="0.727234"
      y="1.23914"
      width="14.5455"
      height="14.7826"
      rx="7.27273"
      stroke="currentColor"
    />
    <ellipse
      cx="9.94694"
      cy="5.91301"
      rx="0.962567"
      ry="0.978261"
      stroke="currentColor"
      strokeWidth="0.666667"
    />
    <ellipse
      cx="5.32621"
      cy="8.65197"
      rx="0.962567"
      ry="0.978261"
      stroke="currentColor"
      strokeWidth="0.666667"
    />
    <path
      d="M8.98416 6.50023L6.28898 8.06545"
      stroke="currentColor"
      strokeWidth="0.666667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.09627 9.43458L8.98397 11.1955"
      stroke="currentColor"
      strokeWidth="0.666667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ellipse
      cx="9.94694"
      cy="11.7828"
      rx="0.962567"
      ry="0.978261"
      stroke="currentColor"
      strokeWidth="0.666667"
    />
  </svg>
);

export default CircleLink;
