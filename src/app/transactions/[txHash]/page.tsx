"use client";

import SearchInput from "@/components/SearchInput";
import TransactionDetaliCard from "@/components/Transactions/TransactionDetaliCard";
import { CommonTransaction } from "@/contexts/BlockchainContext";
import { DAGTransaction, EVMTransaction, getTransactionByHash } from "@/services/api";

import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";


const Tx = () => {
  const params = useParams();
  const txHash = params.txHash as string

  const [transaction, setTransaction] = useState<CommonTransaction | undefined>(undefined);
  useEffect(() => {
    getTransactionByHash(txHash).then(setTransaction);
  }, [txHash]);

  useEffect(() => {
    console.log("transaction", transaction);
  }, [transaction]);

  return (
    <main className="container relative pb-12 md:pb-24 min-h-[calc(100vh-213px)]">
      <div className="absolute bg-orange w-[125px] h-[300px] -rotate-[76deg] blur-[250px] right-[100px] top-[380px] -z-[1] max-md:hidden" />
      <SearchInput className="mt-2.5 md:mt-8" />
      <h1 className="md:text-lg leading-[107%] mt-[18px] md:mt-9">Overview</h1>
      {transaction && <TransactionDetaliCard transaction={transaction} />}
    </main>
  );
};

export default Tx;
