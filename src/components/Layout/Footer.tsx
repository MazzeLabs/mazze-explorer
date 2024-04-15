import Link from "next/link";
import TextLogo from "../TextLogo";
import Github from "../svgs/Github";
import Telegram from "../svgs/Telegram";
import X from "../svgs/X";
import ScrollTop from "../ScrollTop";

const Footer = () => {
  return (
    <footer className="bg-gray-300 dark:bg-dark-blue-200">
      <div className="relative container flex max-md:flex-col items-center justify-between pt-7 md:pt-9 pb-10 md:pb-12">
        <ScrollTop className="absolute top-0 right-2 -translate-y-1/2" />
        <TextLogo dark className="!text-[28px]" />
        <span className="text-gray-500 leading-[138%] max-md:order-1 max-md:mt-7 text-center">
          MazzeScan © 2024 - Developed by MazzeLabs
        </span>
        <div className="flex items-center space-x-3 max-md:mt-9">
          <Link
            href={"https://github.com/MazzeLabs"}
            target="_blank"
            rel="noreferrer"
            className="border rounded-sm border-transparent hover:border-gray-800 transition-all p-0.5"
          >
            <Github />
          </Link>
          <Link
            href={"https://t.me/MazzeLabs"}
            target="_blank"
            rel="noreferrer"
            className="border rounded-sm border-transparent hover:border-gray-800 transition-all p-0.5"
          >
            <Telegram />
          </Link>
          <Link
            href={"https://x.com/MazzeLabs"}
            target="_blank"
            rel="noreferrer"
            className="border rounded-sm border-transparent hover:border-gray-800 transition-all p-0.5"
          >
            <X />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
