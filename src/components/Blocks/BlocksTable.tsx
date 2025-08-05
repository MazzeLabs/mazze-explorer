"use client";

import { useBlockchain } from "@/contexts/BlockchainContext";
import ArrowRight from "../svgs/ArrowRight";
import CircleCheck from "../svgs/CircleCheck";
import CircleLink from "../svgs/CircleLink";
import CircleMinus from "../svgs/CircleMinus";
import Clock from "../svgs/Clock";
import CircleClose from "../svgs/Failed";
import { formatLongString, formatMazzeAddress, formatTimeAgo } from "@/utils/helpers";
import Link from "next/link";
import { SourceChainTypeBadge } from "../SourceChainTypeBadge";
import { useState } from "react";
import { BlockIcon } from "@/utils/icons";

interface BlocksTableItemProps {
  blockNumber: string;
  age: number;
  validator: string;
  txs: string;
  hash: string;
  className?: string;
  type: "dag" | "evm";
}

const BlocksTableItem: React.FC<BlocksTableItemProps> = ({
  blockNumber,
  age,
  validator,
  txs,
  hash,
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
    <tr
      className={`border-b border-mazze-stroke/20 hover:bg-mazze-darkBlueLight/30 transition-all duration-200 cursor-pointer group ${className ?? ""}`}
    >
      <td className="pr-3">
        <div className={`inline-flex items-center px-3 py-1 rounded-lg ${blockNumberBg}`}>
          <span className={`font-bold text-sm ${blockNumberText}`}>
            #{blockNumber}
          </span>
        </div>
      </td>
      <td className="px-3 hidden sm:table-cell"><SourceChainTypeBadge type={type} /></td>
      <td className="px-3 hidden md:table-cell">
        <CircleCheck className="ml-2.5 text-green-500" />
      </td>
      <td className="text-white/60 px-3">{formatTimeAgo(age)}</td>
      <td className="text-white px-3 hidden lg:table-cell">{txs}</td>
      <td className="text-mazze-orange px-3 flex items-center hover:text-mazze-orange/80 transition-colors duration-200 hidden lg:table-cell">
        <Link href={`/accounts/${type === "dag" ? formatMazzeAddress(validator) : validator}`}>
          {formatLongString(type === "dag" ? formatMazzeAddress(validator) : `0x${validator}`)}
        </Link>
      </td>
      <td className="text-mazze-orange px-3 hover:text-mazze-orange/80 transition-colors duration-200 hidden xl:table-cell">
        <Link href={`/blocks/${hash}`}>{formatLongString(hash)}</Link>
      </td>
      <td className="px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <Link 
          href={`/blocks/${hash}`}
          className="flex items-center justify-center w-8 h-8 rounded-lg bg-mazze-orange/10 hover:bg-mazze-orange/20 transition-colors"
        >
          <ArrowRight className="w-4 h-4 text-mazze-orange" />
        </Link>
      </td>
    </tr>
  );
};

interface BlocksTableProps {
  className?: string;
}

const BlocksTable: React.FC<BlocksTableProps> = ({ className }) => {
  const { allBlocks, loadingBlocks } = useBlockchain();
  const [filter, setFilter] = useState<"all" | "dag" | "evm">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const blocksPerPage = 200; // Increased from 100 to 200

  const filteredBlocks = allBlocks.filter(block => {
    if (filter === "all") return true;
    return block.type === filter;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredBlocks.length / blocksPerPage);
  const startIndex = (currentPage - 1) * blocksPerPage;
  const endIndex = startIndex + blocksPerPage;
  const currentBlocks = filteredBlocks.slice(startIndex, endIndex);

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

  // Reset to first page when filter changes
  const handleFilterChange = (newFilter: "all" | "dag" | "evm") => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  return (
    <div
      className={`bg-mazze-darkBlueLight/50 backdrop-blur-sm border border-mazze-stroke/20 rounded-xl shadow-mazze-card ${className ?? ""}`}
    >
      {/* Header with filters */}
      <div className="flex justify-between items-center p-6 border-b border-mazze-stroke/20">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 ${headerIconBg} rounded-xl flex items-center justify-center`}>
            <BlockIcon className={`w-5 h-5 ${headerIconText}`} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">All Blocks</h2>
            <p className="text-white/60 text-sm">Complete blockchain history</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-6 pt-4">
        <div className="flex space-x-2 bg-mazze-darkBlueLight/30 rounded-lg p-1">
          {[
            { key: "all", label: "All", count: allBlocks.length },
            { key: "dag", label: "DAG", count: allBlocks.filter(b => b.type === "dag").length },
            { key: "evm", label: "EVM", count: allBlocks.filter(b => b.type === "evm").length }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleFilterChange(tab.key as "all" | "dag" | "evm")}
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

      <div className="p-4 md:p-5">
        {loadingBlocks ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-mazze-orange"></div>
            <span className="ml-3 text-white/60">Loading blocks...</span>
          </div>
        ) : allBlocks.length === 0 ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-mazze-darkBlueLight/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <BlockIcon className="w-8 h-8 text-white/40" />
              </div>
              <p className="text-white/60">No blocks available</p>
              <p className="text-white/40 text-sm mt-2">Loading may take a few moments...</p>
            </div>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="relative">
                  <tr className="md:*:text-lg *:leading-[138%] *:py-2 md:*:py-2.5 *:font-semibold *:text-left *:whitespace-nowrap text-white/80">
                    <th scope="col" className="pr-3">
                      Block
                    </th>
                    <th scope="col" className="px-3 hidden sm:table-cell">
                      Type
                    </th>
                    <th scope="col" className="px-3 hidden md:table-cell">
                      Status
                    </th>
                    <th scope="col" className="px-3">
                      Time
                    </th>
                    <th scope="col" className="px-3 hidden lg:table-cell">Transactions</th>
                    <th scope="col" className="px-3 hidden lg:table-cell">
                      Miner
                    </th>
                    <th scope="col" className="px-3 hidden xl:table-cell">
                      Block hash
                    </th>
                    <th scope="col" className="px-3 w-12">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {currentBlocks.map((block) => (
                    <BlocksTableItem
                      age={block.timestamp ?? 0}
                      validator={block.author ?? ""}
                      txs={block.transaction_count?.toString() ?? ""}
                      key={block.blockNumber}
                      blockNumber={block.blockNumber?.toString() ?? ""}
                      hash={block.hash ?? ""}
                      type={block.type}
                    />
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6 px-4">
                <div className="text-white/60 text-sm">
                  Showing {startIndex + 1}-{Math.min(endIndex, filteredBlocks.length)} of {filteredBlocks.length} blocks
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-2 text-sm font-medium text-white/70 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Previous
                  </button>
                  
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-8 h-8 rounded-md text-sm font-medium transition-all duration-200 ${
                            currentPage === pageNum
                              ? 'bg-mazze-orange-gradient text-mazze-dark'
                              : 'text-white/70 hover:text-white hover:bg-mazze-darkBlueLight/50'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>
                  
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 text-sm font-medium text-white/70 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BlocksTable;
