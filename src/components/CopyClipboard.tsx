"use client";

import { useEffect, useRef, useState } from "react";
import Clipboard from "./svgs/Clipboard";

interface CopyClipboardProps {
  text: string;
  className?: string;
}

const CopyClipboard: React.FC<CopyClipboardProps> = ({ text, className }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [left, setLeft] = useState(false);
  const onCopy = () => {
    navigator.clipboard.writeText(text);
  };

  useEffect(() => {
    const right = (ref.current?.getBoundingClientRect()?.right ?? 0) + 120;
    if (right > window.innerWidth) {
      setLeft(true);
    }
  }, []);

  return (
    <div className={`relative w-fit ${className ?? ""}`}>
      <button ref={ref} onClick={onCopy} className="peer">
        <Clipboard className="text-orange max-md:w-[10px] max-md:h-[10px]" />
      </button>
      <div
        data-left={left}
        className="absolute top-0 data-[left=true]:left-0 data-[left=false]:right-0 text-xs whitespace-nowrap -translate-y-full data-[left=true]:-translate-x-full data-[left=false]:translate-x-full text-white py-1 px-2 bg-dark-blue rounded-[10px] opacity-0 peer-hover:opacity-100 transition-all"
      >
        copy to clipboard
      </div>
    </div>
  );
};

export default CopyClipboard;
