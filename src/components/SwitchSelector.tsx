interface SwitchSelectorProps {
  items: string[];
  selected: number;
  setSelected: any;
  className?: string;
}

const SwitchSelector: React.FC<SwitchSelectorProps> = ({
  items,
  selected,
  setSelected,
  className,
}) => {
  return (
    <div
      className={`flex space-x-1 py-0.5 px-0.5 md:px-1 border border-gray-300 dark:border-gray-600 rounded-[5px] w-fit ${
        className ?? ""
      }`}
    >
      {items.map((item, i) => (
        <button
          key={item}
          data-active={selected === i}
          className="max-md:text-[8px] data-[active=false]:hover:text-orange leading-[138%] py-[5px] px-2 md:px-[10px] data-[active=true]:bg-orange data-[active=true]:text-white rounded-[5px] transition-all"
          onClick={() => setSelected(i)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default SwitchSelector;
