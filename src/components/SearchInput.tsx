"use client";

import { Menu, Transition } from "@headlessui/react";
import Magnifier from "./svgs/Magnifier";
import ChevronDown from "./svgs/ChevronDown";
import { Fragment, useState } from "react";
import { useRouter } from 'next/navigation';
import { TransactionIcon } from "@/utils/icons";

interface SearchInputProps {
  className?: string;
}

const FILTERS = [
  {
    name: "Transaction",
    filter: "tx",
    icon: <TransactionIcon className="w-4 h-4" />
  },
  {
    name: "Block",
    filter: "block",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
      </svg>
    )
  }
] as const;

const SearchInput: React.FC<SearchInputProps> = ({ className }) => {
  const [filter, setFilter] = useState("tx");
  const [searchInput, setSearchInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch();
  };

  const onSearch = () => {
    if (!searchInput.trim()) {
      return;
    }

    const cleanedInput = searchInput.trim().toLowerCase();
    const txHash = cleanedInput.startsWith('0x') ? cleanedInput.substring(2) : cleanedInput;

    if (/^[a-f0-9]{64}$/i.test(txHash)) {
      router.push(`/transactions/${txHash}`);
    } else {
      // TODO: Show an error message to the user
      console.log("Invalid transaction hash", searchInput);
    }
  };

  const currentFilter = FILTERS.find((item) => item.filter === filter);

  return (
    <div className={`relative ${className ?? ""}`}>
      {/* Hero section for home page */}
      <div className="text-center mb-8">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          <span className="text-white">Explore the </span>
          <span className="mazze-text-gradient">Mazze</span>
          <span className="text-white"> Blockchain</span>
        </h1>
        <p className="text-lg lg:text-xl text-white/70 max-w-2xl mx-auto">
          Fast. Secure. Private. Discover transactions, blocks, and network analytics in real-time.
        </p>
      </div>

      {/* Search Container */}
      <div className="max-w-4xl mx-auto">
        <div className={`relative flex items-center rounded-2xl border-2 transition-all duration-300 ${
          isFocused 
            ? 'border-mazze-orange shadow-mazze-glow bg-mazze-darkBlueLight/80' 
            : 'border-mazze-stroke/30 bg-mazze-darkBlueLight/50'
        } backdrop-blur-sm`}>
          
          {/* Filter Dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center space-x-2 px-6 py-4 text-white/90 hover:text-white transition-colors duration-200">
              <span className="text-lg">{currentFilter?.icon}</span>
              <span className="font-medium">{currentFilter?.name}</span>
              <ChevronDown className="w-4 h-4 text-white/60" />
            </Menu.Button>
            
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-150"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 mt-2 w-48 bg-mazze-darkBlueLight/95 backdrop-blur-md border border-mazze-stroke/30 rounded-xl shadow-mazze-card z-50">
                <div className="py-2">
                  {FILTERS.map((item) => (
                    <Menu.Item key={item.name}>
                      <button
                        className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-mazze-orange/10 transition-colors duration-200 ${
                          item.filter === filter ? 'text-mazze-orange bg-mazze-orange/5' : 'text-white/80'
                        }`}
                        onClick={() => setFilter(item.filter)}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-medium">{item.name}</span>
                      </button>
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          {/* Search Input */}
          <form onSubmit={handleSubmit} className="flex-grow">
            <input
              placeholder={`Search ${currentFilter?.name.toLowerCase()}...`}
              className="w-full bg-transparent text-white placeholder-white/50 text-lg py-4 px-6 outline-none"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </form>

          {/* Search Button */}
          <button 
            type="submit" 
            onClick={onSearch}
            className="m-2 p-3 rounded-xl bg-mazze-orange-gradient text-mazze-dark hover:shadow-mazze-glow transition-all duration-300 transform hover:scale-105"
          >
            <Magnifier className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Stats */}
        <div className="flex justify-center items-center space-x-8 mt-8 text-white/60 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-mazze-pulse" />
            <span>Network Online</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>40,000+ TPS</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>1s Finality</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
