import Link from "next/link";

interface TextLogoProps {
  dark?: boolean;
  className?: string;
}

const TextLogo: React.FC<TextLogoProps> = ({ dark, className }) => {
  return (
    <Link
      href={"/"}
      className={`text-orange text-[21px] md:text-[28px] font-bold leading-[107%] ${
        className ?? ""
      }`}
    >
      Mazze
      <span
        data-dark={dark}
        className="text-white data-[dark=true]:text-gray-700"
      >
        Scan
      </span>
    </Link>
  );
};

export default TextLogo;
