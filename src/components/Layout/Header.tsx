"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import TextLogo from "../TextLogo";
import NativeStatistics from "./NativeStatistics";
import Logo from "../svgs/Logo";
import Back from "@/assets/header-back.png";
import Hambuger from "../svgs/Hambuger";
import MobileNav from "./MobileNav";
import { useState } from "react";
import NetworkSwitch from "./NetworkSwitch";
import DarkModeSwitch from "../DarkModeSwitch";

const Header = () => {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const home = pathname === "/";

  return (
    <>
      <header className={`relative ${!home ? "bg-dark-blue" : ""}`}>
        {home && (
          <Image
            src={Back.src}
            width={Back.width}
            height={Back.height}
            alt="back"
            className="absolute top-0 left-0 right-0 md:w-full h-[150px] md:h-[250px] object-fill md:object-cover -z-[1] bg-dark-blue"
          />
        )}
        <div className="container flex justify-between items-center py-1.5 md:py-2.5">
          <div className="flex items-center max-md:order-2">
            <TextLogo />
            <NativeStatistics className="ml-4 lg:ml-[50px] max-md:hidden" />
          </div>
          <div className="flex items-center max-md:order-1">
            <div className="flex items-center max-md:hidden">
              <Link
                href={"/"}
                className="text-white hover:text-orange transition-all leading-[138%] mr-4 lg:mr-[26px]"
              >
                Home
              </Link>
              <Link
                href={"/transfer"}
                className="text-white hover:text-orange transition-all leading-[138%] mr-4 lg:mr-[26px]"
              >
                Transfer
              </Link>
              <Link
                href={"/block"}
                className="text-white hover:text-orange transition-all leading-[138%] mr-4 lg:mr-[26px]"
              >
                Block
              </Link>
              <Link
                href={"/address"}
                className="text-white hover:text-orange transition-all leading-[138%] mr-4 lg:mr-10"
              >
                Address
              </Link>
            </div>
            <DarkModeSwitch className="mr-5" />
            <NetworkSwitch />
          </div>
          <button
            className="border border-gray-800 rounded-[3px] py-1 px-1.5 order-3 md:hidden"
            onClick={() => setMobileNavOpen(true)}
          >
            <Hambuger className="text-white" />
          </button>
        </div>
      </header>
      <MobileNav open={mobileNavOpen} setOpen={setMobileNavOpen} />
    </>
  );
};

export default Header;
