'use client';

import Link from "next/link";
import Clock from "../svgs/Clock";
import CircleCheck from "../svgs/CircleCheck";
import { useEffect, useState } from "react";
import { getLatestDagBlocks } from "@/services/api";
import { useBlockchain } from "@/contexts/BlockchainContext";
import { formatTimeAgo } from "@/utils/helpers";

interface LatestBlockItemProps {
  block: string;
  blockHash: string;
  tx: string;
  age: number;
  className?: string;
  type: "dag" | "evm";
}

const LatestBlockItem: React.FC<LatestBlockItemProps> = ({
  block,
  blockHash,
  tx,
  age,
  className,
  type,
}) => {
  return (
    <div
      className={`flex justify-between items-start border-b border-gray-300 dark:border-gray-600 pt-4 md:pt-[25px] pb-4 md:pb-5 ${className ?? ""
        }`}
    >
      <div>
        <div className="flex items-center">
          <span className="text-sm md:text-lg">Block</span>
          <span className="text-sm md:text-lg font-bold ml-3.5">
            <Link href={`/blocks/${blockHash}`}>#{block}</Link>
          </span>
          {/* TODO: Fix the badge background color */}
          <span className={`ml-2 px-2 py-1 text-white rounded ${type === "dag" ? "bg-green-500" : "bg-orange-500"}`}>{type === "dag" ? 'DAG' : 'EVM'}</span> {/* Badge */}

        </div>
        <div className="flex items-center mt-1 md:hidden">
          <span className="text-gray-500 max-md:text-sm">{formatTimeAgo(age)}</span>
          <CircleCheck className="text-green ml-3" />
        </div>
        <div className="flex items-center mt-1 md:mt-4 space-x-2">
          <span className="text-gray-500">includes</span>
          <span className="text-blue max-md:text-sm">{tx} Transaction{tx !== '1' ? 's' : ''}</span>
        </div>
      </div>
      <div className="flex items-center max-md:hidden">
        <span className="text-gray-500 max-md:text-sm">{formatTimeAgo(age)}</span>
        <CircleCheck className="text-green ml-3" />
      </div>
    </div>
  );
};

interface LatestBlocksProps {
  className?: string;
}

const LatestBlocks: React.FC<LatestBlocksProps> = ({ className }) => {
  const { commonBlocks } = useBlockchain();

  return (
    <div
      className={`bg-white dark:bg-dark-blue-200 dark:border dark:border-gray-750 rounded-[10px] ${className ?? ""
        }`}
    >
      <div className="flex justify-between items-center py-2 md:py-4 px-4 md:px-8 border-b border-gray-300 dark:border-gray-600">
        <span className="md:text-lg font-bold whitespace-nowrap leading-[107%]">
          Latest Blocks
        </span>
        <Link
          href={"/blocks"}
          className="py-2 px-2.5 border border-gray-300 dark:border-gray-600 hover:border-orange dark:hover:border-orange transition-all rounded-[5px] leading-[138%]"
        >
          View All
        </Link>
      </div>
      <div className="pr-0.5 md:pr-1">
        <div className="max-h-[500px] md:max-h-[600px] overflow-y-auto pl-5 md:pl-8 pr-2 md:pr-6 pb-5 md:pb-8">
          {commonBlocks.map((block) => (
            <LatestBlockItem
              key={block.id}
              block={block.blockNumber?.toString() ?? 'N/A'}
              blockHash={block.hash ?? 'N/A'}
              tx={block.transaction_count?.toString() ?? 'N/A'}
              age={block.timestamp ?? 0}
              type={block.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlocks;
