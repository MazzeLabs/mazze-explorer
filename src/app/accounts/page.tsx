"use client";

import AccountBalanceCard from "@/components/Account/AccountBalanceCard";
import AccountDataCard from "@/components/Account/AccountDataCard";
import AccountInfoCard from "@/components/Account/AccountInfoCard";
import AccountsTable from "@/components/Account/AccountsTable";
import SearchInput from "@/components/SearchInput";
import { useRouter } from "next/navigation";

const Accounts = () => {
  const router = useRouter();
  router.push("/");
  return (
    null
  );
};

export default Accounts;
