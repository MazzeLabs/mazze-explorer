"use client";

import { animateScroll as scroller } from "react-scroll";

import ArrowUp from "./svgs/ArrowUp";

interface ScrollTopProps {
  className?: string;
}

const ScrollTop: React.FC<ScrollTopProps> = ({ className }) => {
  const onScrollTop = () => {
    scroller.scrollToTop({ smooth: true, duration: 300 });
  };
  return (
    <button
      className={`flex items-center justify-center bg-white dark:bg-transparent dark:border dark:border-gray-600 w-10 h-10 rounded-full hover:scale-105 transition-all ${
        className ?? ""
      }`}
      onClick={onScrollTop}
    >
      <ArrowUp />
    </button>
  );
};

export default ScrollTop;
