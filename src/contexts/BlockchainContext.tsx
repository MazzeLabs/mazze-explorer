"use client";

import { DAGBlock, EVMBlock, getLatestDagBlocks, getLatestEvmBlocks, getLatestDagTransactions, getLatestEvmTransactions, getAllDagBlocks, getAllEvmBlocks, getAllDagTransactions, getAllEvmTransactions, DAGTransaction, EVMTransaction } from '@/services/api';
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
    allBlocks: CommonBlock[];
    allTransactions: CommonTransaction[];
    loadingBlocks: boolean;
    loadingTransactions: boolean;
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
    const [allBlocks, setAllBlocks] = useState<CommonBlock[]>([]);
    const [allTransactions, setAllTransactions] = useState<CommonTransaction[]>([]);
    const [loadingBlocks, setLoadingBlocks] = useState(false);
    const [loadingTransactions, setLoadingTransactions] = useState(false);

    useEffect(() => {
        // Function to fetch latest data for dashboard
        const fetchLatestData = () => {
            Promise.all([
                getLatestDagBlocks(),
                getLatestEvmBlocks(),
                getLatestDagTransactions(),
                getLatestEvmTransactions(),
            ]).then(([dagBlocks, evmBlocks, dagTransactions, evmTransactions]) => {
                setDagBlocks(dagBlocks);
                setEvmBlocks(evmBlocks);
                setDagTransactions(dagTransactions);
                setEvmTransactions(evmTransactions);

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

        // Function to fetch all data with pagination
        const fetchAllData = async () => {
            setLoadingBlocks(true);
            setLoadingTransactions(true);
            
            try {
                // Fetch first 5000 blocks (50 pages of 100 each)
                const allDagBlocks: DAGBlock[] = [];
                const allEvmBlocks: EVMBlock[] = [];
                
                for (let page = 1; page <= 50; page++) {
                    const [dagBlocksPage, evmBlocksPage] = await Promise.all([
                        getAllDagBlocks(page, 100),
                        getAllEvmBlocks(page, 100)
                    ]);
                    
                    allDagBlocks.push(...dagBlocksPage);
                    allEvmBlocks.push(...evmBlocksPage);
                    
                    // Stop if we get less than 100 results (end of data)
                    if (dagBlocksPage.length < 100 && evmBlocksPage.length < 100) {
                        break;
                    }
                }

                const combinedAllBlocks = [
                    ...allDagBlocks.map(createCommonBlockFromDag),
                    ...allEvmBlocks.map(createCommonBlockFromEvm)
                ];
                combinedAllBlocks.sort((a, b) => (b.timestamp ?? 0) - (a.timestamp ?? 0));
                setAllBlocks(combinedAllBlocks);
                setLoadingBlocks(false);

                // Fetch first 5000 transactions (50 pages of 100 each)
                const allDagTransactions: DAGTransaction[] = [];
                const allEvmTransactions: EVMTransaction[] = [];
                
                for (let page = 1; page <= 50; page++) {
                    const [dagTransactionsPage, evmTransactionsPage] = await Promise.all([
                        getAllDagTransactions(page, 100),
                        getAllEvmTransactions(page, 100)
                    ]);
                    
                    allDagTransactions.push(...dagTransactionsPage);
                    allEvmTransactions.push(...evmTransactionsPage);
                    
                    // Stop if we get less than 100 results (end of data)
                    if (dagTransactionsPage.length < 100 && evmTransactionsPage.length < 100) break;
                }

                const combinedAllTransactions = [
                    ...allDagTransactions.map(createCommonTransactionFromDag),
                    ...allEvmTransactions.map(createCommonTransactionFromEvm)
                ];
                combinedAllTransactions.sort((a, b) => (b.timestamp ?? 0) - (a.timestamp ?? 0));
                setAllTransactions(combinedAllTransactions);
                setLoadingTransactions(false);
            } catch (error) {
                console.error('Error fetching all data:', error);
                setLoadingBlocks(false);
                setLoadingTransactions(false);
            }
        };

        // Initial fetch
        fetchLatestData();
        fetchAllData();

        // Set up interval for latest data only
        const intervalId = setInterval(fetchLatestData, 3000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run only on mount

    return (
        <BlockchainContext.Provider value={{ 
            dagBlocks, 
            evmBlocks, 
            commonBlocks, 
            dagTransactions, 
            evmTransactions, 
            commonTransactions,
            allBlocks,
            allTransactions,
            loadingBlocks,
            loadingTransactions
        }}>
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
