"use client";

import Link from "next/link";
import SwitchSelector from "../SwitchSelector";
import { useState } from "react";
import CircleCheck from "../svgs/CircleCheck";
import Clock from "../svgs/Clock";

interface LatestTransactionItemProps {
  block: string;
  from: string;
  to: string;
  age: string;
  amount: string;
  className?: string;
}

const LatestTransactionItem: React.FC<LatestTransactionItemProps> = ({
  block,
  from,
  to,
  age,
  amount,
  className,
}) => {
  return (
    <div
      className={`flex justify-between items-start border-b border-gray-300 dark:border-gray-600 pt-4 md:pt-[25px] pb-4 md:pb-5 ${
        className ?? ""
      }`}
    >
      <div>
        <div className="flex items-center md:hidden">
          <span className="text-green text-sm md:text-lg font-bold whitespace-nowrap">
            {amount} Mazze
          </span>
        </div>
        <div className="flex items-center max-md:mt-1">
          <span className="text-sm md:text-lg">Block#</span>
          <span className="text-sm md:text-lg font-bold text-blue ml-3.5">
            {block}
          </span>
        </div>
        <div className="flex items-center mt-1 md:hidden">
          <span className="text-gray-500 max-md:text-sm">{age} secs ago</span>
          <CircleCheck className="ml-2.5 text-green" />
        </div>
        <div className="flex flex-wrap mt-1 md:mt-4 max-md:text-xs">
          <span className="text-gray-500">From</span> &nbsp;&nbsp;
          <span className="text-blue">{from}</span> &nbsp;&nbsp;
          <span className="text-gray-500">To</span> &nbsp;&nbsp;
          <span className="text-blue">{to}</span>
        </div>
      </div>
      <div className="max-md:hidden">
        <div className="flex items-center">
          <span className="text-green text-lg font-bold whitespace-nowrap">
            {amount} Mazze
          </span>
          <CircleCheck className="ml-2.5 text-green" />
        </div>
        <div className="text-gray-500 text-right mt-3.5">{age} secs ago</div>
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
  const [filter, setFilter] = useState(0);

  return (
    <div
      className={`bg-white dark:bg-dark-blue-200 dark:border dark:border-gray-750 rounded-[10px] ${
        className ?? ""
      }`}
    >
      <div className="flex justify-between items-center py-2.5 md:py-4 px-4 md:px-8 border-b border-gray-300 dark:border-gray-600">
        <span className="md:text-lg font-bold whitespace-nowrap leading-[107%]">
          Transfers
        </span>
        <div className="flex items-center">
          <SwitchSelector
            items={["Latest", "Large"]}
            selected={filter}
            setSelected={setFilter}
            className="max-md:hidden"
          />
          <Link
            href={"/txs"}
            className="py-2 px-2.5 border border-gray-300 dark:border-gray-600 hover:border-orange dark:hover:border-orange transition-all rounded-[5px] leading-[138%] ml-3"
          >
            View All
          </Link>
        </div>
      </div>
      <div className="pr-0.5 md:pr-1">
        <div className="max-h-[500px] md:max-h-[600px] overflow-y-auto pl-5 md:pl-8 pr-2 md:pr-6 pb-5 md:pb-8">
          <LatestTransactionItem
            block="35,152"
            from="0x51af....2b6740"
            to="0x51af....2b6740"
            amount="1,000"
            age="1"
          />
          <LatestTransactionItem
            block="35,151"
            from="0x51af....2b6740"
            to="0x51af....2b6740"
            amount="100"
            age="2"
          />
          <LatestTransactionItem
            block="35,150"
            from="0x51af....2b6740"
            to="0x51af....2b6740"
            amount="300"
            age="3"
          />
          <LatestTransactionItem
            block="35,149"
            from="0x51af....2b6740"
            to="0x51af....2b6740"
            amount="1,000"
            age="4"
          />
          <LatestTransactionItem
            block="35,148"
            from="0x51af....2b6740"
            to="0x51af....2b6740"
            amount="1,000"
            age="5"
          />
          <LatestTransactionItem
            block="35,147"
            from="0x51af....2b6740"
            to="0x51af....2b6740"
            amount="1,000"
            age="6"
          />
        </div>
      </div>
    </div>
  );
};

export default LatestTransactions;
