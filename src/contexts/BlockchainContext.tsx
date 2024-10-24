"use client";


import { DAGBlock, EVMBlock, getLatestDagBlocks } from '@/services/api';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the shape of the context state
interface BlockchainContextType {
    dagBlocks: DAGBlock[];
    evmBlocks: EVMBlock[];
    dagTransactions: any[];
    evmTransactions: any[];
}

// Create the context
const BlockchainContext = createContext<BlockchainContextType | undefined>(undefined);

// Create a provider component
export const BlockchainProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [dagBlocks, setDagBlocks] = useState<DAGBlock[]>([]);
    const [evmBlocks, setEvmBlocks] = useState<EVMBlock[]>([]);
    const [dagTransactions, setDagTransactions] = useState<any[]>([]);
    const [evmTransactions, setEvmTransactions] = useState<any[]>([]);

    useEffect(() => {
        getLatestDagBlocks().then((res) => {
            setDagBlocks(res);
        });
    }, []);

    return (
        <BlockchainContext.Provider value={{ dagBlocks, evmBlocks, dagTransactions, evmTransactions }}>
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