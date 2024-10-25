"use client";

import { Menu, Transition } from "@headlessui/react";
import Magnifier from "./svgs/Magnifier";
import ChevronDown from "./svgs/ChevronDown";
import { Fragment, useState } from "react";

interface SearchInputProps {
  className?: string;
}


// TODO: enable all filters when we have the pages (addresses, blocks)
const FILTERS = [
  // {
  //   name: "All Filters",
  //   filter: "all",
  // },
  // {
  //   name: "Address",
  //   filter: "address",
  // },
  // {
  //   name: "Block",
  //   filter: "block",
  // },
  {
    name: "Transaction",
    filter: "tx",
  },
];

const SearchInput: React.FC<SearchInputProps> = ({ className }) => {
  const [filter, setFilter] = useState("tx");

  return (
    <div
      className={`relative flex items-center rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-blue-200 ${className ?? ""
        }`}
    >
      <Menu
        as="div"
        className="relative inline-block text-left text-xs md:text-lg pl-5 min-w-[105px] md:min-w-[160px]"
      >
        <div>
          <Menu.Button className="flex items-center justify-between whitespace-nowrap text-xs md:text-lg ">
            {FILTERS.find((item) => item.filter === filter)?.name}
            <ChevronDown className="text-gray-800 dark:text-gray-350 ml-3" />
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
          <Menu.Items className="absolute w-[160px] md:w-[196px] left-0 mt-5 md:mt-7 pt-3 pl-4 pr-[34px] pb-[26px] bg-white dark:bg-dark-blue-200 border border-gray-300 dark:border-gray-600 rounded-[10px]">
            {FILTERS.map((item) => (
              <Menu.Item key={item.name}>
                <button
                  data-active={item.filter === filter}
                  className="py-2 px-2.5 data-[active=true]:bg-gray-200 dark:data-[active=true]:bg-dark-blue-100 data-[active=true]:font-bold w-full text-left rounded-[10px] hover:bg-gray-200 dark:hover:bg-dark-blue-100 transition-all"
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
        placeholder="Search transactions"
        className="placeholder:text-gray-500 text-gray-800 dark:text-gray-350 leading-[138%] py-3 md:py-5 outline-none w-full mr-12 md:mr-20 max-md:text-xs dark:bg-dark-blue-200"
      />
      <button className="absolute top-[3px] bottom-[3px] right-[6px] rounded-full bg-orange text-gray-800 dark:text-white hover:bg-dark-blue hover:text-orange transition-all p-[8px] md:p-[19px]">
        <Magnifier className="m-auto" />
      </button>
    </div>
  );
};

export default SearchInput;
