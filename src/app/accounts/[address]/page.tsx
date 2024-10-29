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

  const [accData, setAccData] = useState<any>(null);
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
    getDagAccount(address).then(setAccData);
    getEvmAccountBalance(mazzeAddressToHex(address) || "").then((balance) => setEvmBalance(balance.toString()));
  }, [address]);

  useEffect(() => {
    console.log("accData", accData);
  }, [accData]);

  useEffect(() => {
    console.log("evmBalance", evmBalance);
  }, [evmBalance]);

  return (
    <main className="container relative pb-12 min-h-[calc(100vh-213px)]">
      <div className="absolute bg-orange w-[125px] h-[300px] -rotate-[76deg] blur-[250px] right-[100px] top-[380px] -z-[1] max-md:hidden" />
      <SearchInput className="mt-2.5 md:mt-8" />
      <div className="flex max-lg:flex-col mt-6 md:mt-11 max-lg:space-y-7 lg:space-x-4">
        {accData &&
          // <AccountInfoCard address={accData.address} nonce={accData.nonce} accountType={'Basic'} className="w-full lg:w-[370px] col-span-12" />
          <AccountInfoCard base32Address={accData.address} hexAddress={accData.hexAddress} nonce={accData.nonce} accountType={'Basic'} className="w-full" dagBalance={accData.balance} evmBalance={evmBalance} />
        }
        {/* <AccountBalanceCard className="w-full" /> */}
      </div>
      {/* <AccountDataCard className="mt-[18px] lg:mt-3" accountTransactions={accountTransactions} /> */}
    </main>
  );
};

export default Account;
