"use client";

import { DAGBlock, EVMBlock, getLatestDagBlocks, getLatestEvmBlocks, getLatestDagTransactions, getLatestEvmTransactions, DAGTransaction, EVMTransaction } from '@/services/api';
import { createCommonBlockFromDag, createCommonBlockFromEvm, createCommonTransactionFromDag, createCommonTransactionFromEvm } from '@/utils/helpers';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the shape of the context state
interface BlockchainContextType {
    dagBlocks: DAGBlock[];
    evmBlocks: EVMBlock[];
    commonBlocks: CommonBlock[];
    dagTransactions: DAGTransaction[];
    evmTransactions: EVMTransaction[];
    commonTransactions: CommonTransaction[];
}

// Create the context
const BlockchainContext = createContext<BlockchainContextType | undefined>(undefined);

export interface CommonBlock {
    id: number | undefined;
    type: "dag" | "evm";
    hash: string | undefined;
    timestamp: number | undefined;
    transaction_count: number | undefined;
    blockNumber: number | undefined;
    author: string | undefined;
}

export interface CommonTransaction {
    id: number | undefined;
    type: "dag" | "evm";
    hash: string | undefined;
    timestamp: number | undefined;
    from: string | undefined;
    to: string | undefined;
    value: string | undefined;
    status: "success" | "pending" | "failed";
    blockHash: string | undefined;
    gasPrice: string | undefined;
    gas: string | undefined;
}

// Create a provider component
export const BlockchainProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [dagBlocks, setDagBlocks] = useState<DAGBlock[]>([]);
    const [evmBlocks, setEvmBlocks] = useState<EVMBlock[]>([]);
    const [dagTransactions, setDagTransactions] = useState<DAGTransaction[]>([]);
    const [evmTransactions, setEvmTransactions] = useState<EVMTransaction[]>([]);

    const [commonBlocks, setCommonBlocks] = useState<CommonBlock[]>([]);
    const [commonTransactions, setCommonTransactions] = useState<CommonTransaction[]>([]);

    useEffect(() => {
        // Function to fetch all data
        const fetchData = () => {
            Promise.all([
                getLatestDagBlocks(),
                getLatestEvmBlocks(),
                getLatestDagTransactions(),
                getLatestEvmTransactions(),
            ]).then(([dagBlocks, evmBlocks, dagTransactions, evmTransactions]) => {
                setDagBlocks(dagBlocks);
                // setEvmBlocks(evmBlocks);
                setDagTransactions(dagTransactions);
                // setEvmTransactions(evmTransactions);

                const combinedBlocks = [
                    ...dagBlocks.map(createCommonBlockFromDag),
                    ...evmBlocks.map(createCommonBlockFromEvm)
                ];
                combinedBlocks.sort((a, b) => (b.timestamp ?? 0) - (a.timestamp ?? 0));
                setCommonBlocks(combinedBlocks);

                const combinedTransactions = [
                    ...dagTransactions.map(createCommonTransactionFromDag),
                    ...evmTransactions.map(createCommonTransactionFromEvm)
                ];
                combinedTransactions.sort((a, b) => (b.timestamp ?? 0) - (a.timestamp ?? 0));
                setCommonTransactions(combinedTransactions);
            });
        };

        // Initial fetch
        fetchData();

        // Set up interval
        const intervalId = setInterval(fetchData, 3000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run only on mount

    return (
        <BlockchainContext.Provider value={{ dagBlocks, evmBlocks, commonBlocks, dagTransactions, evmTransactions, commonTransactions }}>
            {children}
        </BlockchainContext.Provider>
    );
};

// Create a custom hook to use the CounterContext
export const useBlockchain = (): BlockchainContextType => {
    const context = useContext(BlockchainContext);
    if (!context) {
        throw new Error('useBlockchain must be used within a BlockchainProvider');
    }
    return context;
};
