import Link from "next/link";

interface TextLogoProps {
  dark?: boolean;
  className?: string;
}

const TextLogo: React.FC<TextLogoProps> = ({ dark, className }) => {
  return (
    <Link
      href={"/"}
      className={`text-[21px] md:text-[28px] font-bold leading-[107%] transition-all duration-300 hover:scale-105 ${
        className ?? ""
      }`}
    >
      <span className="mazze-text-gradient">Mazze</span>
      <span className="text-white">Scan</span>
    </Link>
  );
};

export default TextLogo;
