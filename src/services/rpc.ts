import { mazzeAddressToHex, sanitizeMazzeAddress } from "@/utils/helpers";
import SDK from "@mazze-labs/mazze-js-sdk";
import { ethers } from "ethers";

const RPC_URL = "http://37.27.134.37";
const DAG_CHAIN_ID = 1990;
const EVM_CHAIN_ID = 1991;

const RPC_PORT_DAG = 52537;
const RPC_PORT_EVM = 58545;

const getMazzeSdk = async (rpcUrl: string, chainId: number) => {
    const mazze = await SDK.ProxyProvider.create({ url: rpcUrl, networkId: chainId });
    return mazze;
}

export const getDagAccount = async (address: string) => {
    try {
        // const mazze = await getMazzeSdk(`${RPC_URL}:${RPC_PORT_DAG}`, DAG_CHAIN_ID);
        const mazze = await getMazzeSdk(`https://devnet-dag-rpc.mazze.io`, DAG_CHAIN_ID);
        return mazze.getAccount(sanitizeMazzeAddress(address));
    } catch (error) {
        console.log("error", error);
    }
}

export const getEvmAccountBalance = async (address: string) => {
    // const provider = new ethers.JsonRpcProvider(`${RPC_URL}:${RPC_PORT_EVM}`);
    const provider = new ethers.JsonRpcProvider(`https://devnet-rpc.mazze.io`);
    // return await provider.getBalance(mazzeAddressToHex(address) || "");
    const res = await provider.send("eth_getBalance", [address || "", "latest"]);
    if (res.startsWith("0x")) {
        return res.slice(2);
    }
    return res;
}