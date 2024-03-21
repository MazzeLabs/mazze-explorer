import Link from "next/link";
import TextLogo from "../TextLogo";
import NativeStatistics from "./NativeStatistics";
import Logo from "../svgs/Logo";

const Header = () => {
  return (
    <header className="bg-dark-blue">
      <div className="container flex justify-between items-center py-2.5">
        <div className="flex items-center">
          <TextLogo />
          <NativeStatistics className="ml-[50px]" />
        </div>
        <div className="flex items-center">
          <Link
            href={"/"}
            className="text-white hover:brightness-90 active:brightness-95 transition-all leading-[138%] mr-[26px]"
          >
            Home
          </Link>
          <Link
            href={"/transfer"}
            className="text-white hover:brightness-90 active:brightness-95 transition-all leading-[138%] mr-[26px]"
          >
            Transfer
          </Link>
          <Link
            href={"/block"}
            className="text-white hover:brightness-90 active:brightness-95 transition-all leading-[138%] mr-[26px]"
          >
            Block
          </Link>
          <Link
            href={"/address"}
            className="text-white hover:brightness-90 active:brightness-95 transition-all leading-[138%] mr-10"
          >
            Address
          </Link>
          <div className="p-2.5 bg-dark-blue text-white rounded-[5px]">
            <Logo />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
