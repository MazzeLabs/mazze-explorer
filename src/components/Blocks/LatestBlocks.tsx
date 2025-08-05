'use client';

import Link from "next/link";
import Clock from "../svgs/Clock";
import CircleCheck from "../svgs/CircleCheck";
import { useEffect, useState } from "react";
import { getLatestDagBlocks } from "@/services/api";
import { useBlockchain } from "@/contexts/BlockchainContext";
import { formatTimeAgo } from "@/utils/helpers";
import { SourceChainTypeBadge } from "../SourceChainTypeBadge";

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
  const blockNumberBg = type === "dag" 
    ? "bg-mazze-orange-gradient" 
    : "bg-mazze-green-gradient";
  
  const blockNumberText = type === "dag" 
    ? "text-mazze-dark" 
    : "text-white";

  return (
    <div
      className={`bg-mazze-darkBlueLight/50 backdrop-blur-sm border border-mazze-stroke/20 rounded-xl p-4 md:p-6 hover:border-mazze-orange/40 transition-all duration-300 ${className ?? ""}`}
    >
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`${blockNumberBg} rounded-lg flex items-center justify-center px-3 py-2 min-w-[80px] max-w-[200px]`}>
              <span className={`${blockNumberText} font-bold text-xs md:text-sm`}>
                #{block}
              </span>
            </div>
            <SourceChainTypeBadge type={type} />
            <div className="flex items-center space-x-2 text-white/60 text-sm">
              <Clock className="w-4 h-4" />
              <span>{formatTimeAgo(age)}</span>
            </div>
          </div>
        </div>
        
        {/* Block Hash */}
        <div className="space-y-2">
          <div className="flex flex-col space-y-1">
            <span className="text-white/80 text-sm">Block Hash</span>
            <Link 
              href={`/blocks/${blockHash}`}
              className="text-mazze-orange hover:text-mazze-orange/80 transition-colors duration-200 text-sm font-mono break-all"
            >
              {blockHash}
            </Link>
          </div>
          
          {/* Transactions */}
          <div className="flex items-center justify-between">
            <span className="text-white/80 text-sm">Transactions</span>
            <div className="flex items-center space-x-2">
              <span className="text-white font-medium">{tx}</span>
              <CircleCheck className="w-4 h-4 text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LatestBlocksProps {
  className?: string;
}

const LatestBlocks: React.FC<LatestBlocksProps> = ({ className }) => {
  const { commonBlocks } = useBlockchain();
  const [filter, setFilter] = useState<"all" | "dag" | "evm">("all");

  const filteredBlocks = commonBlocks.filter(block => {
    if (filter === "all") return true;
    return block.type === filter;
  });

  // Determine icon colors based on filter
  const headerIconBg = filter === "dag" 
    ? "bg-mazze-orange-gradient" 
    : filter === "evm"
    ? "bg-mazze-green-gradient"
    : "bg-mazze-orange-gradient"; // Default for "all"
  
  const headerIconText = filter === "dag" 
    ? "text-mazze-dark" 
    : filter === "evm"
    ? "text-white"
    : "text-mazze-dark"; // Default for "all"

  return (
    <div className={`bg-mazze-darkBlueLight/50 backdrop-blur-sm border border-mazze-stroke/20 rounded-xl shadow-mazze-card ${className ?? ""}`}>
      <div className="flex justify-between items-center p-6 border-b border-mazze-stroke/20">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 ${headerIconBg} rounded-xl flex items-center justify-center`}>
            <svg className={`w-5 h-5 ${headerIconText}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Latest Blocks</h2>
            <p className="text-white/60 text-sm">Recent blockchain activity</p>
          </div>
        </div>
        <Link
          href={"/blocks"}
          className="bg-transparent border border-mazze-orange text-mazze-orange font-semibold px-4 py-2 rounded-lg hover:bg-mazze-orange hover:text-mazze-dark transition-all duration-300 text-sm"
        >
          View All
        </Link>
      </div>

      {/* Filter Tabs */}
      <div className="px-6 pt-4">
        <div className="flex space-x-2 bg-mazze-darkBlueLight/30 rounded-lg p-1">
          {[
            { key: "all", label: "All", count: commonBlocks.length },
            { key: "dag", label: "DAG", count: commonBlocks.filter(b => b.type === "dag").length },
            { key: "evm", label: "EVM", count: commonBlocks.filter(b => b.type === "evm").length }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as "all" | "dag" | "evm")}
              className={`flex-1 flex items-center justify-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                filter === tab.key
                  ? 'bg-mazze-orange-gradient text-mazze-dark'
                  : 'text-white/70 hover:text-white hover:bg-mazze-darkBlueLight/50'
              }`}
            >
              <span>{tab.label}</span>
              <span className="text-xs opacity-75">({tab.count})</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="p-6">
        <div className="space-y-4 max-h-[600px] overflow-y-auto">
          {filteredBlocks.length > 0 ? (
            filteredBlocks.map((block) => (
              <LatestBlockItem
                key={block.id}
                block={block.blockNumber?.toString() ?? 'N/A'}
                blockHash={block.hash ?? 'N/A'}
                tx={block.transaction_count?.toString() ?? 'N/A'}
                age={block.timestamp ?? 0}
                type={block.type}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-mazze-darkBlueLight/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white/40" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <p className="text-white/60">No blocks available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestBlocks;
