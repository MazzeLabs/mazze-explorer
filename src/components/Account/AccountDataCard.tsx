"use client";

import { useState } from "react";
import Tabs from "../Tabs";
import TransfersTable from "../Transfers/TransfersTable";
import TransferTab from "./Tabs/TransferTab";
import BalanceHistoryTab from "./Tabs/BalanceHistoryTab";
import ExtrinsicTab from "./Tabs/ExtrinsicTab";

interface AccountDataCardProps {
  className?: string;
}

const AccountDataCard: React.FC<AccountDataCardProps> = ({ className }) => {
  const [tab, setTab] = useState(0);

  return (
    <div
      className={`bg-white rounded-[10px] pt-8 px-5 pb-5 ${className ?? ""}`}
    >
      <Tabs
        items={["Extrinsic (29)", "Transfers (55)", "Balance History"]}
        selected={tab}
        setSelcted={setTab}
      />
      {tab === 0 ? (
        <ExtrinsicTab />
      ) : tab === 1 ? (
        <TransferTab />
      ) : (
        <BalanceHistoryTab />
      )}
    </div>
  );
};

export default AccountDataCard;
