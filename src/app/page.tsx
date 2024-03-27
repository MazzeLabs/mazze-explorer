import NetworkAnalyze from "@/components/Analyze/NetworkAnalyze";
import TransactionHistoryChart from "@/components/Analyze/TransactionHistoryChart";
import SearchInput from "@/components/SearchInput";

export default function Home() {
  return (
    <main className="container">
      <SearchInput className="mt-10" />
      <div className="flex mt-14 space-x-3">
        <NetworkAnalyze className="w-full" />
        <TransactionHistoryChart />
      </div>
    </main>
  );
}
