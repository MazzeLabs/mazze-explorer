import Link from "next/link";
import Clock from "../svgs/Clock";
import CircleCheck from "../svgs/CircleCheck";

interface LatestBlockItemProps {
  block: string;
  tx: string;
  age: string;
  className?: string;
}

const LatestBlockItem: React.FC<LatestBlockItemProps> = ({
  block,
  tx,
  age,
  className,
}) => {
  return (
    <div
      className={`flex justify-between items-start border-b border-gray-300 pt-4 md:pt-[25px] pb-4 md:pb-5 ${
        className ?? ""
      }`}
    >
      <div>
        <div className="flex items-center">
          <span className="text-sm md:text-lg">Block#</span>
          <span className="text-sm md:text-lg font-bold ml-3.5">{block}</span>
        </div>
        <div className="flex items-center mt-1 md:hidden">
          <span className="text-gray-500 max-md:text-sm">{age} secs ago</span>
          <CircleCheck className="text-green ml-3" />
        </div>
        <div className="flex items-center mt-1 md:mt-4 space-x-2">
          <span>includes</span>
          <span className="text-blue max-md:text-sm">{tx} Transaction</span>
        </div>
      </div>
      <div className="flex items-center max-md:hidden">
        <span className="text-gray-500 max-md:text-sm">{age} secs ago</span>
        <CircleCheck className="text-green ml-3" />
      </div>
    </div>
  );
};

interface LatestBlocksProps {
  className?: string;
}

const LatestBlocks: React.FC<LatestBlocksProps> = ({ className }) => {
  return (
    <div className={`bg-white rounded-[10px] ${className ?? ""}`}>
      <div className="flex justify-between items-center py-2 md:py-4 px-4 md:px-8 border-b border-gray-300">
        <span className="md:text-lg font-bold whitespace-nowrap leading-[107%]">
          Latest Blocks
        </span>
        <Link
          href={"/blocks"}
          className="py-2 px-2.5 border border-gray-300 hover:border-orange transition-all rounded-[5px] leading-[138%]"
        >
          View All
        </Link>
      </div>
      <div className="pr-0.5 md:pr-1">
        <div className="max-h-[500px] md:max-h-[600px] overflow-y-auto pl-5 md:pl-8 pr-2 md:pr-6 pb-5 md:pb-8">
          <LatestBlockItem block="35,152" tx="1" age="1" />
          <LatestBlockItem block="35,151" tx="2" age="2" />
          <LatestBlockItem block="35,150" tx="0" age="3" />
          <LatestBlockItem block="35,149" tx="5" age="4" />
          <LatestBlockItem block="35,148" tx="1" age="5" />
          <LatestBlockItem block="35,147" tx="1" age="6" />
        </div>
      </div>
    </div>
  );
};

export default LatestBlocks;
