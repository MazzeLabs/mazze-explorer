"use client";

import Link from "next/link";
import SwitchSelector from "../SwitchSelector";
import { useState } from "react";
import CircleCheck from "../svgs/CircleCheck";
import Clock from "../svgs/Clock";
import { useBlockchain } from "@/contexts/BlockchainContext";
import { Mazzy } from "@mazze-labs/mazze-js-sdk";
import { formatLongString, formatMazzeAddress, formatTimeAgo, hexToMazzeAddress, sanitizeMazzeAddress } from "@/utils/helpers";
import { SourceChainTypeBadge } from "../SourceChainTypeBadge";
import { TransactionIcon } from "@/utils/icons";

interface LatestTransactionItemProps {
  txHash: string;
  from: string;
  to: string;
  age: number;
  amount: string;
  className?: string;
  type: "dag" | "evm";
}

const LatestTransactionItem: React.FC<LatestTransactionItemProps> = ({
  txHash,
  from,
  to,
  age,
  amount,
  className,
  type,
}) => {
  const amountFormatted = new Mazzy(amount).toMAZZE();
  
  const transactionIconBg = type === "dag" 
    ? "bg-mazze-orange-gradient" 
    : "bg-mazze-green-gradient";
  
  const transactionIconText = type === "dag" 
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
            <div className={`w-6 h-6 ${transactionIconBg} rounded-md flex items-center justify-center`}>
              <TransactionIcon className={`${transactionIconText}`} />
            </div>
            <SourceChainTypeBadge type={type} />
            <div className="flex items-center space-x-2 text-white/60 text-sm">
              <Clock className="w-4 h-4" />
              <span>{formatTimeAgo(age)}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-500 font-bold">{amountFormatted} MAZZE</span>
            <CircleCheck className="w-4 h-4 text-green-500" />
          </div>
        </div>

        {/* Transaction Hash */}
        <div className="flex items-center justify-between">
          <span className="text-white/80 text-sm">Transaction Hash</span>
          <Link 
            href={`/transactions/${txHash}`}
            className="text-mazze-orange hover:text-mazze-orange/80 transition-colors duration-200 text-sm font-mono truncate max-w-[200px]"
          >
            {formatLongString(txHash)}
          </Link>
        </div>

        {/* From Address */}
        <div className="flex items-center justify-between">
          <span className="text-white/80 text-sm">From</span>
          <Link 
            href={`/accounts/${type === 'dag' ? formatMazzeAddress(sanitizeMazzeAddress(from)) : from}`}
            className="text-mazze-orange hover:text-mazze-orange/80 transition-colors duration-200 text-sm font-mono truncate max-w-[200px]"
          >
            {formatLongString(type === 'dag' ? formatMazzeAddress(sanitizeMazzeAddress(from)) : from, 10)}
          </Link>
        </div>

        {/* To Address */}
        <div className="flex items-center justify-between">
          <span className="text-white/80 text-sm">To</span>
          <Link 
            href={`/accounts/${type === 'dag' ? formatMazzeAddress(sanitizeMazzeAddress(to)) : to}`}
            className="text-mazze-orange hover:text-mazze-orange/80 transition-colors duration-200 text-sm font-mono truncate max-w-[200px]"
          >
            {formatLongString(type === 'dag' ? formatMazzeAddress(sanitizeMazzeAddress(to)) : to, 10)}
          </Link>
        </div>
      </div>
    </div>
  );
};

interface LatestTransactionsProps {
  className?: string;
}

const LatestTransactions: React.FC<LatestTransactionsProps> = ({
  className,
}) => {
  const [filter, setFilter] = useState<"all" | "dag" | "evm">("all");
  const { commonTransactions } = useBlockchain();

  const filteredTransactions = commonTransactions.filter(tx => {
    if (filter === "all") return true;
    return tx.type === filter;
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
            <TransactionIcon className={`w-5 h-5 ${headerIconText}`} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Latest Transactions</h2>
            <p className="text-white/60 text-sm">Recent network activity</p>
          </div>
        </div>
        <Link
          href={"/transactions"}
          className="bg-transparent border border-mazze-orange text-mazze-orange font-semibold px-4 py-2 rounded-lg hover:bg-mazze-orange hover:text-mazze-dark transition-all duration-300 text-sm"
        >
          View All
        </Link>
      </div>

      {/* Filter Tabs */}
      <div className="px-6 pt-4">
        <div className="flex space-x-2 bg-mazze-darkBlueLight/30 rounded-lg p-1">
          {[
            { key: "all", label: "All", count: commonTransactions.length },
            { key: "dag", label: "DAG", count: commonTransactions.filter(t => t.type === "dag").length },
            { key: "evm", label: "EVM", count: commonTransactions.filter(t => t.type === "evm").length }
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
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((transaction, index) => (
              <LatestTransactionItem
                key={index}
                txHash={transaction.hash ?? ""}
                from={transaction.from ?? ""}
                to={transaction.to ?? ""}
                amount={transaction.value?.toString() ?? "0"}
                age={transaction.timestamp ?? 0}
                type={transaction.type}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-mazze-darkBlueLight/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <TransactionIcon className="w-8 h-8 text-white/40" />
              </div>
              <p className="text-white/60">No transactions available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestTransactions;
