import { useState } from "react";
import Moon from "./svgs/Moon";
import Sun from "./svgs/Sun";

interface DarkModeSwitchProps {
  className?: string;
}

const DarkModeSwitch: React.FC<DarkModeSwitchProps> = ({ className }) => {
  const onSwitchMode = (dark: boolean) => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };
  return (
    <div
      className={`flex w-fit items-center border border-gray-600 rounded-full relative py-0.5 px-[3px] space-x-1.5 ${
        className ?? ""
      }`}
    >
      <button
        className="flex items-center justify-center w-[30px] h-[30px] text-gray-900 dark:text-white bg-orange dark:bg-transparent transition-all rounded-full"
        onClick={() => onSwitchMode(false)}
      >
        <Sun />
      </button>
      <button
        className="flex items-center justify-center w-[30px] h-[30px] text-white bg-transparent dark:text-gray-900 dark:bg-orange transition-all rounded-full"
        onClick={() => onSwitchMode(true)}
      >
        <Moon />
      </button>
    </div>
  );
};

export default DarkModeSwitch;
