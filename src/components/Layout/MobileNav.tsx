import Link from "next/link";
import Close from "../svgs/Close";
import NativeStatistics from "./NativeStatistics";
import DarkModeSwitch from "../DarkModeSwitch";

interface MobileNavProps {
  open: boolean;
  setOpen: any;
  className?: string;
}

const MobileNav: React.FC<MobileNavProps> = ({ open, setOpen, className }) => {
  return (
    <div
      data-open={open}
      className={`fixed w-[270px] top-0 right-0 z-20 data-[open=false]:translate-x-full transition-all ${
        className ?? ""
      }`}
    >
      <div className="flex items-center justify-between bg-light-blue py-4 pl-6 pr-7">
        <span className="font-bold text-white leading-[107%]">MENU</span>
        <button onClick={() => setOpen(false)}>
          <Close className="text-white" />
        </button>
      </div>
      <div className="flex flex-col bg-dark-blue px-8 pb-[52px] pt-[42px] rounded-es-2xl rounded-ee-2xl">
        <Link href={"/"} className="text-white" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link
          href={"/transfer"}
          className="text-white mt-9"
          onClick={() => setOpen(false)}
        >
          Transfer
        </Link>
        <Link
          href={"/block"}
          className="text-white mt-9"
          onClick={() => setOpen(false)}
        >
          Block
        </Link>
        <Link
          href={"/accounts"}
          className="text-white mt-9"
          onClick={() => setOpen(false)}
        >
          Accounts
        </Link>
        <DarkModeSwitch className="mt-10" />
        <NativeStatistics className="mt-[30px]" />
      </div>
    </div>
  );
};

export default MobileNav;
