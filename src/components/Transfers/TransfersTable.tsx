"use client";

import { CommonTransaction, useBlockchain } from "@/contexts/BlockchainContext";
import ArrowRight from "../svgs/ArrowRight";
import CircleCheck from "../svgs/CircleCheck";
import CircleClose from "../svgs/Failed";
import { formatLongString, formatTimeAgo } from "@/utils/helpers";
import { Mazzy } from "@mazze-labs/mazze-js-sdk";
import Link from "next/link";
import { SourceChainTypeBadge } from "../SourceChainTypeBadge";
import { TransactionIcon } from "@/utils/icons";

interface TransfersTableProps {
  data?: CommonTransaction[];
  className?: string;
}

interface TransfersTableItemProps {
  hash: string;
  blockHash: string;
  time: number;
  from: string;
  to: string;
  value: string;
  result: boolean;
  type: "dag" | "evm";
}

const TransfersTableItem: React.FC<TransfersTableItemProps> = ({
  hash,
  blockHash,
  time,
  from,
  to,
  value,
  result,
  type,
}) => {
  const [fromFormatted, toFormatted] = type === "dag" ? [from.split(':')[2], to.split(':')[2]] : [from, to];
  
  const transactionIconBg = type === "dag" 
    ? "bg-mazze-orange-gradient" 
    : "bg-mazze-green-gradient";
  
  const transactionIconText = type === "dag" 
    ? "text-mazze-dark" 
    : "text-white";

  return (
    <tr className="border-b border-mazze-stroke/20 hover:bg-mazze-darkBlueLight/30 transition-colors duration-200 *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm">
      <td className="pr-3">
        <div className="flex items-center space-x-2">
          <div className={`w-5 h-5 ${transactionIconBg} rounded-md flex items-center justify-center`}>
            <TransactionIcon className={`${transactionIconText}`} />
          </div>
          <Link href={`/transactions/${hash}`} className="text-mazze-orange hover:text-mazze-orange/80 transition-colors duration-200">
            {formatLongString(hash)}
          </Link>
        </div>
      </td>
      <td className="px-3">
        <SourceChainTypeBadge type={type} />
      </td>
      <td className="text-mazze-orange px-3 hover:text-mazze-orange/80 transition-colors duration-200">
        <Link href={`/blocks/${blockHash}`}>{formatLongString(blockHash)}</Link>
      </td>
      <td className="text-white/60 px-3">{formatTimeAgo(time)}</td>
      <td className="text-mazze-orange px-3 hover:text-mazze-orange/80 transition-colors duration-200">
        <Link href={`/accounts/${fromFormatted}`}>{formatLongString(fromFormatted)}</Link>
      </td>
      <td className="px-3">
        <ArrowRight className="text-green-500" />
      </td>
      <td className="text-mazze-orange px-3 hover:text-mazze-orange/80 transition-colors duration-200">
        <Link href={`/accounts/${toFormatted}`}>{formatLongString(toFormatted)}</Link>
      </td>
      <td className="text-white px-3">{parseFloat(new Mazzy(value).toMAZZE()).toFixed(2)} MAZZE</td>
      <td className="pl-3">
        {result ? <CircleCheck className="text-green-500 max-md:w-[18px] max-md:h-[18px]" /> : <CircleClose className="text-red-500 max-md:w-[18px] max-md:h-[18px]" />}
      </td>
    </tr>
  );
};

const TransfersTable: React.FC<TransfersTableProps> = ({ className, data }) => {
  const { commonTransactions } = useBlockchain();

  return (
    <div
      className={`bg-mazze-darkBlueLight/50 backdrop-blur-sm border border-mazze-stroke/20 rounded-xl shadow-mazze-card p-4 md:p-5 ${className ?? ""}`}
    >
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="relative">
            <tr className="md:*:text-lg *:leading-[138%] *:py-2.5 *:font-semibold *:text-left *:whitespace-nowrap z-10 relative text-white/80">
              <th scope="col" className="pr-3">
                Hash
              </th>
              <th scope="col" className="pr-3">
                Type
              </th>
              <th scope="col" className="px-3">
                Block Hash
              </th>
              <th scope="col" className="px-3">
                Time
              </th>
              <th scope="col" className="px-3">
                From
              </th>
              <th scope="col" className="px-3"></th>
              <th scope="col" className="px-3">
                To
              </th>
              <th scope="col" className="px-3">
                Value
              </th>
              <th scope="col" className="pl-3">
                Result
              </th>
            </tr>
          </thead>
          <tbody className="text-white">
            {(data ?? commonTransactions).map((transaction) => (
              <TransfersTableItem 
                key={transaction.hash} 
                hash={transaction.hash ?? 'N/A'} 
                blockHash={transaction.blockHash ?? 'N/A'} 
                time={transaction.timestamp ?? 0} 
                from={transaction.from ?? 'N/A'} 
                to={transaction.to ?? 'N/A'} 
                value={transaction.value ?? 'N/A'} 
                result={transaction.status === "success"} 
                type={transaction.type} 
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransfersTable;
