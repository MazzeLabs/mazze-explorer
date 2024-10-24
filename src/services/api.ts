import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

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
}

export const getLatestDagBlocks = async (): Promise<DAGBlock[]> => {
    const response = await api.get('/dag/blocks');
    if (response.status !== 200) {
        console.error('Failed to fetch latest dag blocks');
        return [];
    }
    return response.data;
};

export const getLatestDagTransactions = async () => {
    const response = await api.get('/dag/transactions');
    return response.data;
};

export const getLatestEvmBlocks = async (): Promise<EVMBlock[]> => {
    const response = await api.get('/evm/blocks');
    if (response.status !== 200) {
        console.error('Failed to fetch latest evm blocks');
        return [];
    }
    return response.data;
};

export const getLatestEvmTransactions = async () => {
    const response = await api.get('/evm/transactions');
    return response.data;
};

export default api;