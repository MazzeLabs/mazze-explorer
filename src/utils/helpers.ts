import { CommonBlock, CommonTransaction } from "@/contexts/BlockchainContext";
import { DAGBlock, EVMBlock, DAGTransaction, EVMTransaction } from "@/services/api";

export function formatTimeAgo(timestampInSeconds: number): string {
    const nowInSeconds = Math.floor(Date.now() / 1000);
    const seconds = nowInSeconds - timestampInSeconds;
    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
}

export function formatLongString(str: string): string {
    return str.substring(0, 6) + "..." + str.substring(str.length - 6);
}

export function createCommonBlockFromDag(block: DAGBlock): CommonBlock {
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

export function createCommonBlockFromEvm(block: EVMBlock): CommonBlock {
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

export function createCommonTransactionFromDag(transaction: DAGTransaction): CommonTransaction {
    return {
        id: transaction.id,
        hash: transaction.hash,
        timestamp: transaction.timestamp ? parseInt(transaction.timestamp) : undefined,
        from: transaction.from_address,
        to: transaction.to_address,
        value: transaction.value ?? '0',
        type: "dag",
        status: transaction.status === "0x0" ? "success" : "failed",
        blockHash: transaction.block_hash,
        gasPrice: transaction.gas_price ?? undefined,
        gas: transaction.gas ?? undefined
    };
}

export function createCommonTransactionFromEvm(transaction: EVMTransaction): CommonTransaction {
    return {
        id: transaction.id,
        hash: transaction.hash,
        timestamp: -1, // TODO: Add timestamp
        from: transaction.from_address,
        to: transaction.to_address,
        value: transaction.value ?? '0',
        type: "evm",
        status: transaction.status === "1" ? "success" : "failed",
        blockHash: transaction.block_hash,
        gasPrice: transaction.gas_price ?? undefined,
        gas: transaction.gas ?? undefined
    };
}

export function formatMazzeAddress(address: string): string {
    return address.split(':')[address.split(':').length - 1];
}