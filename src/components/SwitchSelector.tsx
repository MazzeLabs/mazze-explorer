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
    <div className="flex space-x-1 py-0.5 px-1 border border-gray-300 rounded-[5px]">
      {items.map((item, i) => (
        <button
          key={item}
          data-active={selected === i}
          className="data-[active=false]:hover:text-orange leading-[138%] py-[5px] px-[10px] data-[active=true]:bg-orange data-[active=true]:text-white rounded-[5px] transition-all"
          onClick={() => setSelected(i)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default SwitchSelector;
