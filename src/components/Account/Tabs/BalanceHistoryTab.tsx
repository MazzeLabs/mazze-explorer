"use client";

import { useEffect, useState } from "react";
import { getAccountBalanceHistory } from "@/services/api";
import { formatLongString } from "@/utils/helpers";

interface BalanceHistoryTabProps {
  address: string;
  className?: string;
}

const BalanceHistoryTab: React.FC<BalanceHistoryTabProps> = ({
  address,
  className,
}) => {
  const [balanceHistory, setBalanceHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBalanceHistory = async () => {
      try {
        const historyData = await getAccountBalanceHistory(address);
        setBalanceHistory(historyData || []);
      } catch (error) {
        console.error("Error fetching balance history:", error);
        setBalanceHistory([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBalanceHistory();
  }, [address]);

  return (
    <div
      className={`bg-white dark:bg-dark-blue-200 dark:border dark:border-gray-750 rounded-[10px] ${className ?? ""
        }`}
    >
      <div className="flex justify-between items-center py-2 md:py-4 px-4 md:px-8 border-b border-gray-300 dark:border-gray-600">
        <span className="md:text-lg font-bold whitespace-nowrap leading-[107%]">
          Balance History
        </span>
      </div>
      <div className="pr-0.5 md:pr-1">
        <div className="max-h-[500px] md:max-h-[600px] overflow-y-auto pl-5 md:pl-8 pr-2 md:pr-6 pb-5 md:pb-8">
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange"></div>
            </div>
          ) : balanceHistory.length > 0 ? (
            balanceHistory.map((entry, index) => (
              <div
                key={index}
                className="flex justify-between items-start border-b border-gray-300 dark:border-gray-600 pt-4 md:pt-[25px] pb-4 md:pb-5"
              >
                <div>
                  <div className="flex items-center">
                    <span className="text-sm md:text-lg">Balance</span>
                    <span className="text-sm md:text-lg font-bold ml-3.5">
                      {entry.balance} MAZZE
                    </span>
                  </div>
                  <div className="flex items-center mt-1 md:mt-4 space-x-2">
                    <span className="text-gray-500">Block</span>
                    <span className="text-blue max-md:text-sm">
                      {entry.blockNumber}
                    </span>
                  </div>
                </div>
                <div className="flex items-center max-md:hidden">
                  <span className="text-gray-500 max-md:text-sm">
                    {new Date(entry.timestamp * 1000).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No balance history available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BalanceHistoryTab;
