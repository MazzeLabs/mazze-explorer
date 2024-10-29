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
  return (
    <tr
      className={`border-b dark:border-gray-600 *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm ${className ?? ""
        }`}
    >
      <td className="text-blue pr-3"><Link href={`/blocks/${hash}`}>{blockNumber}</Link></td>
      <td className="px-3"><SourceChainTypeBadge type={type} /></td>
      <td className="px-3">
        <CircleCheck className="ml-2.5 text-green" />
      </td>
      <td className="text-gray-500 px-3">{formatTimeAgo(age)}</td>
      <td className="text-blue px-3">{txs}</td>
      <td className="text-blue px-3 flex items-center">
        <CircleLink className="text-green mr-1" />
        <Link href={`/accounts/${type === "dag" ? formatMazzeAddress(validator) : validator}`}>{formatLongString(type === "dag" ? formatMazzeAddress(validator) : `0x${validator}`)}</Link>
      </td>
      <td className="text-blue px-3">
        <Link href={`/blocks/${hash}`}>{formatLongString(hash)}</Link>
      </td>
    </tr>
  );
};

interface BlocksTableProps {
  className?: string;
}

const BlocksTable: React.FC<BlocksTableProps> = ({ className }) => {
  const { commonBlocks } = useBlockchain();
  return (
    <div
      className={`dark:bg-dark-blue-200 dark:border dark:border-gray-750 p-4 md:p-5 rounded-[10px] ${className ?? ""
        }`}
    >
      <div className="overflow-x-auto px-4 md:px-5 pb-0.5">
        <table className="min-w-full">
          <thead className="relative rounded-[10px]">
            <div className="absolute top-0 -left-4 md:-left-5 -right-4 md:-right-5 bottom-0 bg-slate dark:bg-dark-blue-100 z-[0] rounded-[10px]" />
            <tr className="md:*:text-lg *:leading-[138%] *:py-2 md:*:py-2.5 *:font-normal *:text-left *:whitespace-nowrap z-10 relative">
              <th scope="col" className="pr-3">
                Block
              </th>
              <th scope="col" className="pr-3">
                Type
              </th>
              <th scope="col" className="px-3">
                Status
              </th>
              <th scope="col" className="px-3">
                Time
              </th>
              <th scope="col" className="px-3">Transactions</th>
              <th scope="col" className="px-3">
                Validator
              </th>
              <th scope="col" className="px-3">
                Block hash
              </th>
            </tr>
          </thead>
          <tbody className="">
            {/* <BlocksTableItem
              block="35,1522"
              age="1"
              txs="1"
              validator="Mazze 1"
              hash="fabb....aa1631"
            />
            <BlocksTableItem
              block="35,152"
              age="2"
              txs="1"
              validator="Mazze 1"
              hash="a43d....ec78af"
            />
            <BlocksTableItem
              block="35,150"
              age="3"
              txs="1"
              validator="Mazze 1"
              hash="f277....1bda5e"
            />
            <BlocksTableItem
              block="35,149"
              age="4"
              txs="1"
              validator="Mazze 1"
              hash="2dec....adfe32"
            />
            <BlocksTableItem
              block="35,148"
              age="5"
              txs="1"
              validator="Mazze 1"
              hash="d160....9a9278"
            />
            <BlocksTableItem
              block="35,147"
              age="6"
              txs="1"
              validator="Mazze 1"
              hash="d43f....c90d3d"
            /> */}
            {commonBlocks.map((block) => (
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
    </div>
  );
};

export default BlocksTable;
