"use client";

import { DAGBlock, EVMBlock, getLatestDagBlocks, getLatestEvmBlocks, getLatestDagTransactions, getLatestEvmTransactions, DAGTransaction, EVMTransaction } from '@/services/api';
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
}

// Create a provider component
export const BlockchainProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [dagBlocks, setDagBlocks] = useState<DAGBlock[]>([]);
    const [evmBlocks, setEvmBlocks] = useState<EVMBlock[]>([]);
    const [dagTransactions, setDagTransactions] = useState<DAGTransaction[]>([]);
    const [evmTransactions, setEvmTransactions] = useState<EVMTransaction[]>([]);

    const [commonBlocks, setCommonBlocks] = useState<CommonBlock[]>([]);
    const [commonTransactions, setCommonTransactions] = useState<CommonTransaction[]>([]);

    function createCommonBlockFromDag(block: DAGBlock): CommonBlock {
        return {
            id: block.id,
            hash: block.hash,
            timestamp: block.timestamp ? parseInt(block.timestamp) : undefined,
            transaction_count: block.transaction_count,
            blockNumber: block.block_number ? parseInt(block.block_number) : undefined,
            type: "dag",
            author: block.miner
        };
    }

    function createCommonBlockFromEvm(block: EVMBlock): CommonBlock {
        return {
            id: block.id,
            hash: block.hash,
            timestamp: block.timestamp ? parseInt(block.timestamp) : undefined,
            transaction_count: block.transaction_count,
            blockNumber: block.number ? parseInt(block.number) : undefined,
            type: "evm",
            author: block.miner
        };
    }

    function createCommonTransactionFromDag(transaction: DAGTransaction): CommonTransaction {
        return {
            id: transaction.id,
            hash: transaction.hash,
            timestamp: transaction.timestamp ? parseInt(transaction.timestamp) : undefined,
            from: transaction.from_address,
            to: transaction.to_address,
            value: transaction.value ?? '0',
            type: "dag",
            status: transaction.status === "0x0" ? "success" : "failed",
            blockHash: transaction.block_hash
        };
    }

    function createCommonTransactionFromEvm(transaction: EVMTransaction): CommonTransaction {
        return {
            id: transaction.id,
            hash: transaction.hash,
            timestamp: -1, // TODO: Add timestamp
            from: transaction.from_address,
            to: transaction.to_address,
            value: transaction.value ?? '0',
            type: "evm",
            status: transaction.status === "1" ? "success" : "failed",
            blockHash: transaction.block_hash
        };
    }


    useEffect(() => {
        Promise.all([
            getLatestDagBlocks(),
            getLatestEvmBlocks(),
            getLatestDagTransactions(),
            getLatestEvmTransactions()
        ]).then(([dagBlocks, evmBlocks, dagTransactions, evmTransactions]) => {
            setDagBlocks(dagBlocks);
            setEvmBlocks(evmBlocks);
            setDagTransactions(dagTransactions);
            setEvmTransactions(evmTransactions);
            console.log(dagTransactions);
            console.log(evmTransactions);
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
    }, []);

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
