import { DAGTransaction, EVMTransaction } from "@/services/api";
import CopyClipboard from "../CopyClipboard";
import CircleCheckFilled from "../svgs/CircleCheckFilled";
import Electricity from "../svgs/Electricity";
import Logo from "../svgs/Logo";
import TriArrowRight from "../svgs/TriArrowRight";
import { formatLongString, formatMazzeAddress, formatTimeAgo } from "@/utils/helpers";
import { CommonTransaction } from "@/contexts/BlockchainContext";
import { Mazzy } from "@mazze-labs/mazze-js-sdk";
import Link from "next/link";
import { TransactionIcon } from "@/utils/icons";
import { SourceChainTypeBadge } from "../SourceChainTypeBadge";

interface TransactionDetaliCardProps {
  className?: string;
  transaction: CommonTransaction;
}

const TransactionDetaliCard: React.FC<TransactionDetaliCardProps> = ({
  className,
  transaction,
}) => {
  const transactionIconBg = transaction.type === "dag" 
    ? "bg-mazze-orange-gradient" 
    : "bg-mazze-green-gradient";
  
  const transactionIconText = transaction.type === "dag" 
    ? "text-mazze-dark" 
    : "text-white";

  return (
    <div className={`mazze-card p-6 md:p-8 space-y-6 ${className ?? ""}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className={`w-12 h-12 ${transactionIconBg} rounded-xl flex items-center justify-center`}>
            <TransactionIcon className={`w-6 h-6 ${transactionIconText}`} />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white">Transaction Details</h1>
            <div className="flex items-center space-x-3 mt-1">
              <SourceChainTypeBadge type={transaction.type} />
              <div className={`flex items-center text-xs px-2 py-1 rounded-md ${
                transaction.status === 'success' 
                  ? 'bg-green-500/20 text-green-400' 
                  : transaction.status === 'failed' 
                  ? 'bg-red-500/20 text-red-400' 
                  : 'bg-yellow-500/20 text-yellow-400'
              }`}>
                <CircleCheckFilled className="w-3 h-3 mr-1" />
                {transaction.status === 'success' ? 'Success' : transaction.status === 'failed' ? 'Failed' : 'Pending'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Hash */}
      <div className="space-y-3">
        <h3 className="text-white/80 text-sm font-medium">Transaction Hash</h3>
        <div className="bg-mazze-darkBlueLight/50 rounded-lg p-4 border border-mazze-stroke/20">
          <div className="flex items-center justify-between">
            <span className="text-white font-mono text-sm break-all">{transaction.hash}</span>
            <CopyClipboard text={transaction.hash || ''} className="ml-2" />
          </div>
        </div>
      </div>

      {/* Block Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <h3 className="text-white/80 text-sm font-medium">Block</h3>
          <div className="bg-mazze-darkBlueLight/50 rounded-lg p-4 border border-mazze-stroke/20">
            <Link 
              href={`/blocks/${transaction.blockHash}`}
              className="text-mazze-orange hover:text-mazze-orange/80 transition-colors font-mono text-sm break-all"
            >
              {transaction.blockHash}
            </Link>
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="text-white/80 text-sm font-medium">Timestamp</h3>
          <div className="bg-mazze-darkBlueLight/50 rounded-lg p-4 border border-mazze-stroke/20">
            <div className="text-white text-sm">
              <div>{formatTimeAgo(transaction.timestamp ?? 0)}</div>
              <div className="text-white/60 text-xs mt-1">
                {new Date((transaction.timestamp ?? 0) * 1000).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Action */}
      <div className="space-y-3">
        <h3 className="text-white/80 text-sm font-medium">Transaction Action</h3>
        <div className="bg-mazze-darkBlueLight/50 rounded-lg p-4 border border-mazze-stroke/20">
          <div className="flex items-center space-x-2 text-white text-sm">
            <TriArrowRight className="w-4 h-4 text-white/60" />
            <span className="text-white/60">Transfer</span>
            <span className="text-mazze-orange font-medium">
              {new Mazzy(transaction.value ?? '0').toMAZZE()} MAZZE
            </span>
            <span className="text-white/60">to</span>
            <Link 
              href={`/accounts/${formatMazzeAddress(transaction.to ?? '')}`}
              className="text-mazze-orange hover:text-mazze-orange/80 transition-colors"
            >
              {formatLongString(formatMazzeAddress(transaction.to ?? ''))}
            </Link>
          </div>
        </div>
      </div>

      {/* Addresses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <h3 className="text-white/80 text-sm font-medium">From</h3>
          <div className="bg-mazze-darkBlueLight/50 rounded-lg p-4 border border-mazze-stroke/20">
            <div className="flex items-center justify-between">
              <Link 
                href={`/accounts/${formatMazzeAddress(transaction.from ?? '')}`}
                className="text-mazze-orange hover:text-mazze-orange/80 transition-colors font-mono text-sm break-all"
              >
                {formatLongString(formatMazzeAddress(transaction.from ?? ''))}
              </Link>
              <CopyClipboard text={formatMazzeAddress(transaction.from ?? '')} className="ml-2" />
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="text-white/80 text-sm font-medium">To</h3>
          <div className="bg-mazze-darkBlueLight/50 rounded-lg p-4 border border-mazze-stroke/20">
            <div className="flex items-center justify-between">
              <Link 
                href={`/accounts/${formatMazzeAddress(transaction.to ?? '')}`}
                className="text-mazze-orange hover:text-mazze-orange/80 transition-colors font-mono text-sm break-all"
              >
                {formatLongString(formatMazzeAddress(transaction.to ?? ''))}
              </Link>
              <CopyClipboard text={formatMazzeAddress(transaction.to ?? '')} className="ml-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-3">
          <h3 className="text-white/80 text-sm font-medium">Value</h3>
          <div className="bg-mazze-darkBlueLight/50 rounded-lg p-4 border border-mazze-stroke/20">
            <div className="flex items-center space-x-2">
              <Logo className="text-mazze-orange w-4 h-4" />
              <span className="text-white font-medium">
                {new Mazzy(transaction.value ?? '0').toMAZZE()} MAZZE
              </span>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="text-white/80 text-sm font-medium">Transaction Fee</h3>
          <div className="bg-mazze-darkBlueLight/50 rounded-lg p-4 border border-mazze-stroke/20">
            <div className="flex items-center space-x-2">
              <Logo className="text-mazze-orange w-4 h-4" />
              <span className="text-white font-medium">
                {new Mazzy(transaction.gas ?? '0').toMAZZE()} MAZZE
              </span>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="text-white/80 text-sm font-medium">Gas Price</h3>
          <div className="bg-mazze-darkBlueLight/50 rounded-lg p-4 border border-mazze-stroke/20">
            <div className="flex items-center space-x-2">
              <Logo className="text-mazze-orange w-4 h-4" />
              <span className="text-white font-medium">
                {new Mazzy(transaction.gasPrice ?? '0').toMAZZE()} MAZZE
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetaliCard;
