"use client";

import { CommonTransaction, useBlockchain } from "@/contexts/BlockchainContext";
import ArrowRight from "../svgs/ArrowRight";
import CircleCheck from "../svgs/CircleCheck";
import CircleClose from "../svgs/Failed";
import { formatLongString, formatTimeAgo } from "@/utils/helpers";
import { Mazzy } from "@mazze-labs/mazze-js-sdk";
import Link from "next/link";

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
  return (
    <tr className="border-b dark:border-gray-600 *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm">
      <td className="text-blue pr-3">
        <Link href={`/transactions/${hash}`}>{formatLongString(hash)}</Link>
      </td>
      <td className="px-3">{type.toUpperCase()}</td>
      <td className="text-blue px-3">
        <Link href={`/blocks/${blockHash}`}>{formatLongString(blockHash)}</Link>
      </td>
      <td className="text-gray-500 px-3">{formatTimeAgo(time)}</td>
      <td className="text-blue px-3">
        <Link href={`/accounts/${fromFormatted}`}>{formatLongString(fromFormatted)}</Link>
      </td>
      <td className="px-3">
        <ArrowRight className="text-green" />
      </td>
      <td className="text-blue px-3">
        <Link href={`/accounts/${toFormatted}`}>{formatLongString(toFormatted)}</Link>
      </td>
      <td className="px-3">{parseFloat(new Mazzy(value).toMAZZE()).toFixed(2)}</td>
      <td className="pl-3">
        {result ? <CircleCheck className="text-green max-md:w-[18px] max-md:h-[18px]" /> : <CircleClose className="text-red max-md:w-[18px] max-md:h-[18px]" />}
      </td>
    </tr>
  );
};

const TransfersTable: React.FC<TransfersTableProps> = ({ className, data }) => {
  const { commonTransactions } = useBlockchain();

  return (
    <div
      className={`bg-white dark:bg-dark-blue-200 dark:border dark:border-gray-750 rounded-[10px] ${className ?? ""
        }`}
    >
      <div className="overflow-x-auto px-4 md:px-5 pb-0.5">
        <table className="min-w-full">
          <thead className="relative rounded-[10px]">
            <div className="absolute top-0 -left-4 md:-left-5 -right-4 md:-right-5 bottom-0 bg-slate dark:bg-dark-blue-100 z-[0] rounded-[10px]" />
            <tr className="md:*:text-lg *:leading-[138%] *:py-2.5 *:font-normal *:text-left *:whitespace-nowrap z-10 relative">
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
          <tbody className="">
            {(data ?? commonTransactions).map((transaction) => (
              <TransfersTableItem key={transaction.hash} hash={transaction.hash ?? 'N/A'} blockHash={transaction.blockHash ?? 'N/A'} time={transaction.timestamp ?? 0} from={transaction.from ?? 'N/A'} to={transaction.to ?? 'N/A'} value={transaction.value ?? 'N/A'} result={transaction.status === "success"} type={transaction.type} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransfersTable;
