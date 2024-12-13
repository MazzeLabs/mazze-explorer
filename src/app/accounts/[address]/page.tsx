"use client";

import AccountBalanceCard from "@/components/Account/AccountBalanceCard";
import AccountDataCard from "@/components/Account/AccountDataCard";
import AccountInfoCard from "@/components/Account/AccountInfoCard";
import SearchInput from "@/components/SearchInput";
import { CommonTransaction } from "@/contexts/BlockchainContext";
import { getDagTransactionsByAddress, getEvmTransactionsByAddress } from "@/services/api";
import { getDagAccount, getEvmAccountBalance } from "@/services/rpc";
import { createCommonTransactionFromDag, createCommonTransactionFromEvm, mazzeAddressToHex } from "@/utils/helpers";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Account = () => {
  const params = useParams();
  const address = params.address as string

  const [dagAccount, setDagAccount] = useState<any>(null);
  const [evmAccount, setEvmAccount] = useState<any>(null);
  const [evmBalance, setEvmBalance] = useState<string>("");


  const [accountTransactions, setAccountTransactions] = useState<CommonTransaction[]>([]);

  // useEffect(() => {
  //   Promise.all([
  //     getEvmTransactionsByAddress(mazzeAddressToHex(address) || ""),
  //     getDagTransactionsByAddress(mazzeAddressToHex(address) || "")
  //   ]).then(([evmTxs, dagTxs]) => {
  //     const mergedTxs = [...(evmTxs ?? []).map(createCommonTransactionFromEvm), ...(dagTxs ?? []).map(createCommonTransactionFromDag)];
  //     setAccountTransactions(mergedTxs.sort((a, b) => (a.timestamp ?? 0) - (b.timestamp ?? 0)));
  //   });

  // }, [address]);



  useEffect(() => {
    if (address.startsWith("0x")) {
      return
    }
    getDagAccount(address).then(setDagAccount);
    getEvmAccountBalance(mazzeAddressToHex(address) || "").then((balance) => setEvmBalance(balance.toString()));
  }, [address]);

  useEffect(() => {
    console.log("dagAccount", dagAccount);
  }, [dagAccount]);

  useEffect(() => {
    console.log("evmBalance", evmBalance);
  }, [evmBalance]);

  return (
    <main className="container relative pb-12 min-h-[calc(100vh-213px)]">
      <div className="absolute bg-orange w-[125px] h-[300px] -rotate-[76deg] blur-[250px] right-[100px] top-[380px] -z-[1] max-md:hidden" />
      <SearchInput className="mt-2.5 md:mt-8" />
      <div className="flex max-lg:flex-col mt-6 md:mt-11 max-lg:space-y-7 lg:space-x-4">
        {dagAccount ?
          <AccountInfoCard base32Address={dagAccount.address} hexAddress={dagAccount.hexAddress} nonce={dagAccount.nonce} accountType={'Basic'} className="w-full" dagBalance={dagAccount.balance} evmBalance={evmBalance} />
          : <div className="mt-10 text-center text-lg">{address.startsWith("0x") ? 'EVM Accounts not yet supported' : 'Loading...'}</div>}
      </div>
    </main>
  );
};

export default Account;
