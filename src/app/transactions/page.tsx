export const dynamic = 'force-dynamic';
import SearchInput from "@/components/SearchInput";
import TransferHistoryChart from "@/components/Transfers/TransferHistoryChart";
import TransfersTable from "@/components/Transfers/TransfersTable";

const Transfer = () => {
  return (
    <main className="container relative pb-12 md:pb-[110px] min-h-[calc(100vh-213px)]">
      <div className="absolute bg-orange w-[125px] h-[300px] -rotate-[76deg] blur-[250px] right-[100px] top-[380px] -z-[1] max-md:hidden" />
      <SearchInput className="mt-2.5 md:mt-8" />
      <h1 className="md:text-lg leading-[107%] mt-6 md:mt-11">
        Transactions History
      </h1>
      {/* <TransferHistoryChart className="mt-2 md:mt-[18px]" /> */}
      <TransfersTable className="mt-[18px] p-4 md:p-5" />
    </main>
  );
};

export default Transfer;
