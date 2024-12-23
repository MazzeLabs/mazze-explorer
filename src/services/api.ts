import { CommonBlock, CommonTransaction } from '@/contexts/BlockchainContext';
import { createCommonBlockFromDag, createCommonBlockFromEvm, createCommonTransactionFromDag, createCommonTransactionFromEvm } from '@/utils/helpers';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
    baseURL: BASE_URL,
});

export interface EVMBlock {
    id?: number;
    hash?: string;
    parent_hash?: string;
    number?: string;
    timestamp?: string;
    author?: string;
    difficulty?: string; // BigDecimal in Rust
    extra_data?: string;
    gas_limit?: string; // BigDecimal in Rust
    gas_used?: string; // BigDecimal in Rust
    logs_bloom?: string;
    miner?: string;
    mix_hash?: string;
    nonce?: string;
    receipts_root?: string;
    sha3_uncles?: string;
    size?: string; // BigDecimal in Rust
    state_root?: string;
    total_difficulty?: string; // BigDecimal in Rust
    transactions_root?: string;
    uncles?: string[];
    transaction_count?: number; // i64 in Rust
}

export interface DAGBlock {
    id?: number;
    hash?: string;
    parent_hash?: string;
    timestamp?: string;
    adaptive?: boolean;
    blame?: string;
    block_number?: string;
    deferred_logs_bloom_hash?: string;
    deferred_receipts_root?: string;
    deferred_state_root?: string;
    difficulty?: string;
    epoch_number?: string;
    gas_limit?: string;
    gas_used?: string;
    height?: string;
    miner?: string;
    nonce?: string;
    pos_reference?: string;
    pow_quality?: string;
    size?: string;
    transactions_root?: string;
    base_fee_per_gas?: string;
    custom?: string;
    transaction_count?: number; // i64 in Rust
    transactions?: DAGTransaction[];
}

export interface EVMTransaction {
    id?: number;
    hash?: string;
    block_hash?: string;
    block_number?: string;
    from_address?: string;
    to_address?: string;
    value?: string;
    gas?: string;
    gas_price?: string;
    input?: string;
    nonce?: string;
    r?: string;
    s?: string;
    v?: string;
    transaction_index?: number;
    chain_id?: string;
    creates?: string;
    public_key?: string;
    raw?: string;
    standard_v?: string;
    status?: string;
    storage_limit?: string;
    epoch_height?: string;
    transaction_type?: string;
    contract_created?: string;
    max_priority_fee_per_gas?: string;
    max_fee_per_gas?: string;
    y_parity?: string;
    data?: string;
    timestamp?: string;
}

export interface DAGTransaction {
    id?: number;
    hash?: string;
    block_hash?: string;
    from_address?: string;
    to_address?: string;
    value?: string; // Assuming BigDecimal can be represented as a string
    chain_id?: string;
    contract_created?: string;
    data?: string;
    epoch_height?: string;
    gas?: string; // Assuming BigDecimal can be represented as a string
    gas_price?: string; // Assuming BigDecimal can be represented as a string
    nonce?: string; // Assuming BigDecimal can be represented as a string
    r?: string;
    s?: string;
    status?: string;
    storage_limit?: string; // Assuming BigDecimal can be represented as a string
    transaction_index?: number;
    type_?: number;
    v?: number;
    timestamp?: string;
}

export const getLatestDagBlocks = async (): Promise<DAGBlock[]> => {
    try {
        const response = await api.get('/dag/blocks');
        if (response.status !== 200) {
            console.error('Failed to fetch latest dag blocks');
            return [];
        }
        return response.data.data;
    } catch (error) {
        console.error('Failed to fetch latest dag blocks', error);
        return [];
    }
};

export const getLatestDagTransactions = async (): Promise<DAGTransaction[]> => {
    const response = await api.get('/dag/transactions');
    return response.data.data;
};

export const getLatestEvmBlocks = async (): Promise<EVMBlock[]> => {
    const response = await api.get('/evm/blocks');
    if (response.status !== 200) {
        console.error('Failed to fetch latest evm blocks');
        return [];
    }
    return response.data.data;
};

export const getLatestEvmTransactions = async (): Promise<EVMTransaction[]> => {
    const response = await api.get('/evm/transactions');
    return response.data.data;
};

export const getTransactionByHash = async (txHash: string): Promise<CommonTransaction | undefined | null> => {
    const txHashArg = txHash.startsWith("0x") ? txHash.slice(2) : txHash;
    try {
        const evmTx = await api.get(`/evm/transactions/${txHashArg}`);
        if (evmTx.status === 200) {
            return createCommonTransactionFromEvm(evmTx.data);
        }
    } catch (error) {
        console.error("Error fetching EVM transaction", error);
    }
    try {
        const dagTx = await api.get(`/dag/transactions/${txHashArg}`);
        if (dagTx.status === 200) {
            return createCommonTransactionFromDag(dagTx.data);
        }
    } catch (error) {
        console.error("Error fetching DAG transaction", error);
    }
    return null;
};

export const getEvmBlockByHash = async (blockHash: string, includeTransactions: boolean = false): Promise<EVMBlock | null> => {
    try {
        const blockHashArg = blockHash.startsWith("0x") ? blockHash.slice(2) : blockHash;
        const evmBlock = await api.get(`/evm/blocks/${blockHashArg}`);
        if (evmBlock.status === 200) {
            if (includeTransactions) {
                const txs = await getEvmTransactionsByBlockHash(evmBlock.data.hash ?? '');
                return {
                    ...evmBlock.data,
                    transactions: txs
                };
            }
            return evmBlock.data;
        }
    } catch (error) {
        console.error("Error fetching EVM block", error);
    }
    return null;
};

export const getDagBlockByHash = async (blockHash: string, includeTransactions: boolean = false): Promise<DAGBlock | null> => {
    try {
        const blockHashArg = blockHash.startsWith("0x") ? blockHash.slice(2) : blockHash;
        const dagBlock = await api.get(`/dag/blocks/${blockHashArg}`);
        if (dagBlock.status === 200) {
            if (includeTransactions) {
                const txs = await getDagTransactionsByBlockHash(dagBlock.data.hash ?? '');
                return {
                    ...dagBlock.data,
                    transactions: txs
                };
            }
            return dagBlock.data;
        }
    } catch (error) {
        console.error("Error fetching DAG block", error);
    }
    return null;
};

export const getEvmTransactionsByBlockHash = async (blockHash: string): Promise<EVMTransaction[] | null> => {
    try {
        const evmBlock = await api.get(`/evm/blocks/${blockHash}/transactions`);
        if (evmBlock.status === 200) {
            return evmBlock.data;
        }
    } catch (error) {
        console.error("Error fetching EVM block", error);
    }
    return null;
};

export const getDagTransactionsByBlockHash = async (blockHash: string): Promise<DAGTransaction[] | null> => {
    try {
        const dagBlock = await api.get(`/dag/blocks/${blockHash}/transactions`);
        if (dagBlock.status === 200) {
            return dagBlock.data;
        }
    } catch (error) {
        console.error("Error fetching DAG block", error);
    }
    return null;
};


export const getEvmTransactionsByAddress = async (address: string): Promise<EVMTransaction[] | null> => {
    try {
        const evmBlock = await api.get(`/accounts/${address}/transactions/evm`);
        if (evmBlock.status === 200) {
            return evmBlock.data;
        }
    } catch (error) {
        console.error("Error fetching EVM block", error);
    }
    return null;
}

export const getDagTransactionsByAddress = async (address: string): Promise<DAGTransaction[] | null> => {
    try {
        const dagBlock = await api.get(`/accounts/${address}/transactions/dag`);
        if (dagBlock.status === 200) {
            return dagBlock.data;
        }
    } catch (error) {
        console.error("Error fetching EVM block", error);
    }
    return null;
}


export default api;