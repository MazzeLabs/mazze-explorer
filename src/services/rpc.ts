import { sanitizeMazzeAddress } from "@/utils/helpers";
import SDK from "@mazze-labs/mazze-js-sdk";


const getMazze = async (rpcUrl: string, chainId: number) => {
    const mazze = await SDK.ProxyProvider.create({ url: rpcUrl, networkId: chainId });
    return mazze;
}

const getDagMazze = async (rpcUrl: string) => {
    return await getMazze(`${rpcUrl}:52537`, 1990);
}

export const getDagAccount = async (address: string) => {
    try {
        const mazze = await getDagMazze("http://37.27.134.37");
        return mazze.getAccount(sanitizeMazzeAddress(address));
    } catch (error) {
        console.log("error", error);
    }
}