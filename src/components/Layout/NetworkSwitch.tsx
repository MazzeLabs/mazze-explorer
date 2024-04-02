"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Logo from "../svgs/Logo";
import { usePathname } from "next/navigation";

interface NetworkSwitchProps {
  className?: string;
}

const NetworkSwitch: React.FC<NetworkSwitchProps> = ({ className }) => {
  const pathname = usePathname();

  const home = pathname === "/";

  return (
    <Menu as="div" className="relative inline-block text-left z-20">
      <div>
        <Menu.Button
          className={`p-1.5 md:p-2.5 ${
            home ? "" : "border"
          } border-gray-700 bg-dark-blue text-white rounded-[3px] md:rounded-[5px]`}
        >
          <Logo className="max-md:w-6 max-md:h-5" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute flex flex-col items-start max-md:left-0 md:right-0 mt-2 rounded-[10px] bg-white border border-[#E2E2E2]">
          <div className="pl-2.5 pt-1">
            <Menu.Item>
              <button className="pl-2.5 pt-2.5 pb-3 pr-5 text-left group">
                <div className="text-xs leading-[138%] font-bold">Mainnet</div>
                <div className="text-lg leading-[138%] mt-1 group-hover:text-orange transition-all">
                  Mazze
                </div>
              </button>
            </Menu.Item>
            <Menu.Item>
              <button className="pl-2.5 pt-2.5 pb-3 pr-5 border-t border-gray-300 text-left group">
                <div className="text-xs leading-[138%] font-bold">Testnet</div>
                <div className="text-lg leading-[138%] mt-1 group-hover:text-orange transition-all">
                  Mazze Testnet
                </div>
              </button>
            </Menu.Item>
          </div>
          <div className="pl-5 pb-3 pr-3.5 pt-2.5">
            <Menu.Item>
              <button className="text-orange leading-[138%] py-1 px-3 border border-orange hover:border-gray-700 transition-all rounded-[5px] whitespace-nowrap">
                Join MazzeScan
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NetworkSwitch;
