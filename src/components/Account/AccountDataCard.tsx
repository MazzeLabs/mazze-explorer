"use client";

import { useState } from "react";
import Tabs from "../Tabs";
import TransfersTable from "../Transfers/TransfersTable";
import TransferTab from "./Tabs/TransferTab";
import BalanceHistoryTab from "./Tabs/BalanceHistoryTab";
import TransactionTab from "./Tabs/TransactionTab";

interface AccountDataCardProps {
  className?: string;
}

const AccountDataCard: React.FC<AccountDataCardProps> = ({ className }) => {
  const [tab, setTab] = useState(0);

  return (
    <div
      className={`bg-white dark:bg-dark-blue-200 dark:border dark:border-gray-750 rounded-[10px] pt-8 px-5 pb-5 ${className ?? ""}`}
    >
      <Tabs
        items={["Transactions (29)", "Transfers (55)", "Balance History"]}
        selected={tab}
        setSelcted={setTab}
      />
      {tab === 0 ? (
        <TransactionTab />
      ) : tab === 1 ? (
        <TransferTab />
      ) : (
        <BalanceHistoryTab />
      )}
    </div>
  );
};

export default AccountDataCard;
