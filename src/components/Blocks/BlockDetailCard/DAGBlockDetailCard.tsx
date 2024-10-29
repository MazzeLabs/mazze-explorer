import CopyClipboard from "../../CopyClipboard";
import CircleCheckFilled from "../../svgs/CircleCheckFilled";
import Electricity from "../../svgs/Electricity";
import Logo from "../../svgs/Logo";
import TriArrowRight from "../../svgs/TriArrowRight";
import { formatLongString, formatMazzeAddress, formatTimeAgo } from "@/utils/helpers";
import { Mazzy } from "@mazze-labs/mazze-js-sdk";
import { EVMBlock, DAGBlock } from "@/services/api";
import Link from "next/link";
import { SourceChainTypeBadge } from "@/components/SourceChainTypeBadge";

interface DAGBlockDetailCardProps {
  className?: string;
  block: DAGBlock;
}

const DAGBlockDetailCard: React.FC<DAGBlockDetailCardProps> = ({
  className,
  block,
}) => {
  return (
    <div
      className={`flex flex-col space-y-[30px] md:space-y-5 rounded-[10px] pt-7 pb-[30px] md:pb-5 px-4 md:pl-10 md:pr-10 lg:pr-[120px] ${className ?? ""
        }`}
    >
      <div className="flex max-md:flex-col items-start">
        <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm">
          Block Type:
        </div>
        <div className="items-center  text-gray-350 break-words w-full overflow-hidden max-md:mt-1">
          <SourceChainTypeBadge type="dag" />
        </div>
      </div>
      <div className="flex max-md:flex-col items-start">
        <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm">
          Block Hash:
        </div>
        <div className="items-center  text-gray-350 break-words w-full overflow-hidden max-md:mt-1">
          <span className="break-words leading-[138%] max-md:text-xs">
            {block.hash}
            <CopyClipboard text={block.hash || ''} className="ml-1 md:ml-2 inline-block" />
          </span>
        </div>
      </div>
      <div className="flex max-md:flex-col items-start">
        <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm">
          Block Number:
        </div>
        <div className="items-center  text-gray-350 break-words w-full overflow-hidden max-md:mt-1">
          <span className="break-words leading-[138%] max-md:text-xs">
            {block.block_number}
            <CopyClipboard text={block.block_number?.toString() || ''} className="ml-1 md:ml-2 inline-block" />
          </span>
        </div>
      </div>
      <div className="flex max-md:flex-col items-start">
        <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm">
          Parent Hash:
        </div>
        <div className="items-center  text-gray-350 break-words w-full overflow-hidden max-md:mt-1">
          <span className="break-words leading-[138%] max-md:text-xs">
            <Link href={`/blocks/${block.parent_hash}`}>
              {block.parent_hash}
            </Link>
            <CopyClipboard text={block.parent_hash || ''} className="ml-1 md:ml-2 inline-block" />
          </span>
        </div>
      </div>
      <div className="flex max-md:flex-col items-start">
        <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm">
          Timestamp:
        </div>
        <div className="items-center  text-gray-350 break-words w-full overflow-hidden max-md:mt-1">
          <span className="break-words leading-[138%] max-md:text-xs">
            {formatTimeAgo(parseInt(block.timestamp ?? '0'))} ({new Date(parseInt(block.timestamp ?? '0') * 1000).toLocaleString()})
            <CopyClipboard text={block.timestamp || ''} className="ml-1 md:ml-2 inline-block" />
          </span>
        </div>
      </div>
      <div className="flex max-md:flex-col items-start">
        <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm">
          Difficulty:
        </div>
        <div className="items-center  text-gray-350 break-words w-full overflow-hidden max-md:mt-1">
          <span className="break-words leading-[138%] max-md:text-xs">
            {block.difficulty}
            <CopyClipboard text={block.difficulty || ''} className="ml-1 md:ml-2 inline-block" />
          </span>
        </div>
      </div>
      <div className="flex max-md:flex-col items-start">
        <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm">
          Gas usage:
        </div>
        <div className="items-center  text-gray-350 break-words w-full overflow-hidden max-md:mt-1">
          <span className="break-words leading-[138%] max-md:text-xs">
            {parseInt(block.gas_used ?? '0').toLocaleString()}/{parseInt(block.gas_limit ?? '0').toLocaleString()} ({Math.round((parseInt(block.gas_used ?? '0') / parseInt(block.gas_limit ?? '0')) * 100)}%)
          </span>
        </div>
      </div>
      <div className="flex max-md:flex-col items-start">
        <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm">
          Transaction Count:
        </div>
        <div className="items-center  text-gray-350 break-words w-full overflow-hidden max-md:mt-1">
          <span className="break-words leading-[138%] max-md:text-xs">
            {block.transaction_count}
          </span>
        </div>
      </div>
      <div className="flex max-md:flex-col items-start">
        <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm">
          Miner:
        </div>
        <div className="items-center  text-gray-350 break-words w-full overflow-hidden max-md:mt-1">
          <span className="break-words leading-[138%] max-md:text-xs">
            <Link href={`/accounts/${formatMazzeAddress(block.miner ?? '')}`}>{formatMazzeAddress(block.miner ?? '')}</Link>
            <CopyClipboard text={block.miner || ''} className="ml-1 md:ml-2 inline-block" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default DAGBlockDetailCard;
