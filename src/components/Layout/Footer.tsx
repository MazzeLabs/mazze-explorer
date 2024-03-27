import Link from "next/link";
import TextLogo from "../TextLogo";
import Github from "../svgs/Github";
import Telegram from "../svgs/Telegram";
import X from "../svgs/X";

const Footer = () => {
  return (
    <footer className="bg-gray-300 pt-9 pb-12">
      <div className="container flex items-center justify-between">
        <TextLogo dark />
        <span className="text-gray-500 leading-[138%]">
          MazzeScan © 2024 - Developed by MazzeScan Team
        </span>
        <div className="flex items-center space-x-3">
          <Link
            href={"/"}
            target="_blank"
            rel="noreferrer"
            className="border rounded-sm border-transparent hover:border-gray-700 transition-all p-0.5"
          >
            <Github />
          </Link>
          <Link
            href={"/"}
            target="_blank"
            rel="noreferrer"
            className="border rounded-sm border-transparent hover:border-gray-700 transition-all p-0.5"
          >
            <Telegram />
          </Link>
          <Link
            href={"/"}
            target="_blank"
            rel="noreferrer"
            className="border rounded-sm border-transparent hover:border-gray-700 transition-all p-0.5"
          >
            <X />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
