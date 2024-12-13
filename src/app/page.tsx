export const dynamic = 'force-dynamic';
import NetworkAnalyze from "@/components/Analyze/NetworkAnalyze";
import TransactionHistoryChart from "@/components/Analyze/TransactionHistoryChart";
import LatestBlocks from "@/components/Blocks/LatestBlocks";
import SearchInput from "@/components/SearchInput";
import LatestTransactions from "@/components/Transactions/LatestTransactions";

export default function Home() {
  return (
    <main className="container relative pb-12 md:pb-36 min-h-[calc(100vh-213px)]">
      <div className="absolute left-[156px] top-[20px] -rotate-[76deg] bg-orange w-[125px] h-[357px] blur-[250px] -z-[2] max-md:hidden" />
      <SearchInput className="mt-10" />
      {/* <div className="flex max-lg:flex-col mt-3 md:mt-14 max-lg:space-y-1 lg:space-x-3">
        <NetworkAnalyze className="w-full" />
        <TransactionHistoryChart />
      </div> */}
      <div className="flex max-lg:flex-col mt-5 md:mt-14 max-lg:space-y-5 lg:space-x-4">
        <LatestBlocks className="w-full" />
        <LatestTransactions className="w-full" />
      </div>
    </main>
  );
}
