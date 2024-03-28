interface TabsProps {
  items: string[];
  selected: number;
  setSelcted: any;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  items,
  selected,
  setSelcted,
  className,
}) => {
  return (
    <div
      className={`flex space-x-[15px] md:space-x-10 border-b border-gray-300 ${className ?? ""}`}
    >
      {items.map((item, i) => (
        <button
          key={item}
          aria-checked={selected === i}
          className="pb-2 md:pb-2.5 text-sm md:text-lg leading-[138%] relative before:absolute before:content-[''] before:-bottom-px before:left-0 before:w-full before:h-0.5 before:bg-orange before:scale-x-0 before:transition-all aria-checked:before:scale-x-100 whitespace-nowrap"
          onClick={() => setSelcted(i)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
