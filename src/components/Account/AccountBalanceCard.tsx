"use client";

import { useEffect, useState } from "react";
import { getAccountBalance } from "@/services/api";
import { Mazzy } from "@mazze-labs/mazze-js-sdk";
import { formatLongString } from "@/utils/helpers";

interface AccountBalanceCardProps {
  address: string;
  className?: string;
}

const AccountBalanceCard: React.FC<AccountBalanceCardProps> = ({
  address,
  className,
}) => {
  const [balance, setBalance] = useState<string>("0");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const balanceData = await getAccountBalance(address);
        setBalance(balanceData.balance || "0");
      } catch (error) {
        console.error("Error fetching balance:", error);
        setBalance("0");
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, [address]);

  const balanceFormatted = new Mazzy(balance).toMAZZE();

  return (
    <div
      className={`bg-white dark:bg-dark-blue-200 dark:border dark:border-gray-750 rounded-[10px] ${className ?? ""
        }`}
    >
      <div className="flex justify-between items-center py-2 md:py-4 px-4 md:px-8 border-b border-gray-300 dark:border-gray-600">
        <span className="md:text-lg font-bold whitespace-nowrap leading-[107%]">
          Balance
        </span>
      </div>
      <div className="pr-0.5 md:pr-1">
        <div className="pl-5 md:pl-8 pr-2 md:pr-6 pb-5 md:pb-8">
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange"></div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <span className="text-2xl md:text-3xl font-bold text-green">
                {balanceFormatted} MAZZE
              </span>
              <span className="text-gray-500 text-sm">
                Address: {formatLongString(address)}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountBalanceCard;
