"use client";

import { Menu, Transition } from "@headlessui/react";
import Magnifier from "./svgs/Magnifier";
import ChevronDown from "./svgs/ChevronDown";
import { Fragment, useState } from "react";

interface SearchInputProps {
  className?: string;
}

const FILTERS = [
  {
    name: "All Filters",
    filter: "all",
  },
  {
    name: "Address",
    filter: "address",
  },
  {
    name: "Block",
    filter: "block",
  },
  {
    name: "Transaction",
    filter: "tx",
  },
];

const SearchInput: React.FC<SearchInputProps> = ({ className }) => {
  const [filter, setFilter] = useState("all");

  return (
    <div
      className={`relative flex items-center rounded-full border border-gray-300 bg-white ${
        className ?? ""
      }`}
    >
      <Menu
        as="div"
        className="relative inline-block text-left text-xs md:text-lg pl-5 min-w-[105px] md:min-w-[160px]"
      >
        <div>
          <Menu.Button className="flex items-center justify-between whitespace-nowrap text-xs md:text-lg ">
            {FILTERS.find((item) => item.filter === filter)?.name}
            <ChevronDown className="text-gray-700 ml-3" />
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
          <Menu.Items className="absolute w-[160px] md:w-[196px] left-0 mt-5 md:mt-7 pt-3 pl-4 pr-[34px] pb-[26px] bg-white border border-gray-300 rounded-[10px]">
            {FILTERS.map((item) => (
              <Menu.Item key={item.name}>
                <button
                  data-active={item.filter === filter}
                  className="py-2 px-2.5 data-[active=true]:bg-gray-200 data-[active=true]:font-bold w-full text-left rounded-[10px] hover:bg-gray-200 transition-all"
                  onClick={() => setFilter(item.filter)}
                >
                  {item.name}
                </button>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>

      <input
        placeholder="Search transactions, blocks and tokens"
        className="placeholder:text-gray-500 text-gray-700 leading-[138%] py-3 md:py-5 outline-none w-full mr-12 md:mr-20 max-md:text-xs"
      />
      <button className="absolute top-[3px] bottom-[3px] right-[6px] rounded-full bg-orange text-gray-700 hover:bg-dark-blue hover:text-orange transition-all p-[8px] md:p-[19px]">
        <Magnifier className="m-auto" />
      </button>
    </div>
  );
};

export default SearchInput;
