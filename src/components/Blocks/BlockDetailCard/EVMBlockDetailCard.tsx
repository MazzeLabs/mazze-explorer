import CopyClipboard from "../../CopyClipboard";
import CircleCheckFilled from "../../svgs/CircleCheckFilled";
import Electricity from "../../svgs/Electricity";
import Logo from "../../svgs/Logo";
import TriArrowRight from "../../svgs/TriArrowRight";
import { formatLongString, formatMazzeAddress, formatTimeAgo } from "@/utils/helpers";
import { CommonTransaction } from "@/contexts/BlockchainContext";
import { Mazzy } from "@mazze-labs/mazze-js-sdk";
import { EVMBlock, DAGBlock } from "@/services/api";
import Link from "next/link";
import { SourceChainTypeBadge } from "@/components/SourceChainTypeBadge";

interface EVMBlockDetailCardProps {
  className?: string;
  block: EVMBlock;
}

const EVMBlockDetailCard: React.FC<EVMBlockDetailCardProps> = ({
  className,
  block,
}) => {
  return (
    <div
      className={`bg-mazze-darkBlueLight/50 backdrop-blur-sm border border-mazze-stroke/20 rounded-xl shadow-mazze-card p-6 md:p-8 ${className ?? ""}`}
    >
      {/* Header with Block Number */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="bg-mazze-green-gradient rounded-xl flex items-center justify-center px-4 py-3">
          <span className="text-white font-bold text-lg">
            #{block.number}
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-mazze-green-gradient rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
          </div>
          <SourceChainTypeBadge type="evm" />
        </div>
      </div>

      {/* Block Details */}
      <div className="space-y-6">
        <div className="flex max-md:flex-col items-start">
          <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm text-white/80 font-medium">
            Block Hash:
          </div>
          <div className="items-center text-white break-words w-full overflow-hidden max-md:mt-1">
            <span className="break-words leading-[138%] max-md:text-xs font-mono">
              {block.hash}
              <CopyClipboard text={block.hash || ''} className="ml-1 md:ml-2 inline-block" />
            </span>
          </div>
        </div>

        <div className="flex max-md:flex-col items-start">
          <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm text-white/80 font-medium">
            Parent Hash:
          </div>
          <div className="items-center text-white break-words w-full overflow-hidden max-md:mt-1">
            <span className="break-words leading-[138%] max-md:text-xs font-mono">
              <Link href={`/blocks/${block.parent_hash}`} className="text-mazze-orange hover:text-mazze-orange/80 transition-colors duration-200">
                {block.parent_hash}
              </Link>
              <CopyClipboard text={block.parent_hash || ''} className="ml-1 md:ml-2 inline-block" />
            </span>
          </div>
        </div>

        <div className="flex max-md:flex-col items-start">
          <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm text-white/80 font-medium">
            Timestamp:
          </div>
          <div className="items-center text-white break-words w-full overflow-hidden max-md:mt-1">
            <span className="break-words leading-[138%] max-md:text-xs">
              {formatTimeAgo(parseInt(block.timestamp ?? '0'))} ({new Date(parseInt(block.timestamp ?? '0') * 1000).toLocaleString()})
              <CopyClipboard text={block.timestamp || ''} className="ml-1 md:ml-2 inline-block" />
            </span>
          </div>
        </div>

        <div className="flex max-md:flex-col items-start">
          <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm text-white/80 font-medium">
            Difficulty:
          </div>
          <div className="items-center text-white break-words w-full overflow-hidden max-md:mt-1">
            <span className="break-words leading-[138%] max-md:text-xs">
              {block.difficulty}
              <CopyClipboard text={block.difficulty || ''} className="ml-1 md:ml-2 inline-block" />
            </span>
          </div>
        </div>

        <div className="flex max-md:flex-col items-start">
          <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm text-white/80 font-medium">
            Gas usage:
          </div>
          <div className="items-center text-white break-words w-full overflow-hidden max-md:mt-1">
            <span className="break-words leading-[138%] max-md:text-xs">
              {parseInt(block.gas_used ?? '0').toLocaleString()}/{parseInt(block.gas_limit ?? '0').toLocaleString()} ({Math.round((parseInt(block.gas_used ?? '0') / parseInt(block.gas_limit ?? '0')) * 100)}%)
            </span>
          </div>
        </div>

        <div className="flex max-md:flex-col items-start">
          <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm text-white/80 font-medium">
            Transaction Count:
          </div>
          <div className="items-center text-white break-words w-full overflow-hidden max-md:mt-1">
            <span className="break-words leading-[138%] max-md:text-xs">
              {block.transaction_count}
            </span>
          </div>
        </div>

        <div className="flex max-md:flex-col items-start">
          <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm text-white/80 font-medium">
            Miner:
          </div>
          <div className="items-center text-white break-words w-full overflow-hidden max-md:mt-1">
            <span className="break-words leading-[138%] max-md:text-xs font-mono">
              0x{block.miner}
              <CopyClipboard text={block.miner || ''} className="ml-1 md:ml-2 inline-block" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EVMBlockDetailCard;
