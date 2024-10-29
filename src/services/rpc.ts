import { mazzeAddressToHex, sanitizeMazzeAddress } from "@/utils/helpers";
import SDK from "@mazze-labs/mazze-js-sdk";
import { ethers } from "ethers";

const DAG_RPC_URL = process.env.NEXT_PUBLIC_DAG_RPC_URL || "https://devnet-dag-rpc.mazze.io";
const EVM_RPC_URL = process.env.NEXT_PUBLIC_EVM_RPC_URL || "https://devnet-rpc.mazze.io";

const DAG_CHAIN_ID = Number(process.env.NEXT_PUBLIC_DAG_CHAIN_ID) || 1990;

const getMazzeSdk = async (rpcUrl: string, chainId: number) => {
    const mazze = await SDK.ProxyProvider.create({ url: rpcUrl, networkId: chainId });
    return mazze;
}

export const getDagAccount = async (address: string) => {
    try {
        if (address.includes(":")) {
            address = address.split(':')[address.split(':').length - 1];
        }
        const mazze = await getMazzeSdk(DAG_RPC_URL, DAG_CHAIN_ID);
        return mazze.getAccount(sanitizeMazzeAddress(address));
    } catch (error) {
        console.log("error", error);
    }
}

export const getEvmAccountBalance = async (address: string) => {
    const provider = new ethers.JsonRpcProvider(EVM_RPC_URL);
    const res = await provider.send("eth_getBalance", [address || "", "latest"]);
    if (res.startsWith("0x")) {
        return res.slice(2);
    }
    return res;
}