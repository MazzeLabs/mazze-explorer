"use client";

import DAGBlockDetailCard from "@/components/Blocks/BlockDetailCard/DAGBlockDetailCard";
import EVMBlockDetailCard from "@/components/Blocks/BlockDetailCard/EVMBlockDetailCard";
import SearchInput from "@/components/SearchInput";
import TransactionDetaliCard from "@/components/Transactions/TransactionDetaliCard";
import { CommonBlock, CommonTransaction } from "@/contexts/BlockchainContext";
import { DAGTransaction, EVMTransaction, getEvmBlockByHash, getDagBlockByHash, EVMBlock, DAGBlock } from "@/services/api";

import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";


const BlockPage = () => {
  const params = useParams();
  const blockHash = params.blockHash as string

  const [evmBlock, setEvmBlock] = useState<EVMBlock | undefined | null>(undefined);
  const [dagBlock, setDagBlock] = useState<DAGBlock | undefined | null>(undefined);
  useEffect(() => {
    getEvmBlockByHash(blockHash, true).then(setEvmBlock);
    getDagBlockByHash(blockHash, true).then(setDagBlock);
  }, [blockHash]);

  useEffect(() => {
    console.log("evmBlock", evmBlock);
    console.log("dagBlock", dagBlock);
  }, [evmBlock, dagBlock]);

  return (
    <main className="container relative pb-12 md:pb-24 min-h-[calc(100vh-213px)]">
      <div className="absolute bg-orange w-[125px] h-[300px] -rotate-[76deg] blur-[250px] right-[100px] top-[380px] -z-[1] max-md:hidden" />
      <SearchInput className="mt-2.5 md:mt-8" />
      <h1 className="md:text-lg leading-[107%] mt-[18px] md:mt-9">Overview</h1>
      {/* {transaction !== undefined && transaction !== null && <TransactionDetaliCard transaction={transaction} />} */}
      {evmBlock !== undefined && evmBlock !== null && <EVMBlockDetailCard block={evmBlock} className="mb-5" />}
      {dagBlock !== undefined && dagBlock !== null && <DAGBlockDetailCard block={dagBlock} />}
      {evmBlock === undefined && dagBlock === undefined && <div className="mt-10 text-center text-lg">Loading...</div>}
      {evmBlock === null && dagBlock === null && <div className="mt-10 text-center text-lg">Block not found</div>}
    </main>
  );
};

export default BlockPage;
