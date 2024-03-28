import SearchInput from "@/components/SearchInput";
import TransactionDetaliCard from "@/components/Transactions/TransactionDetaliCard";

const Tx = () => {
  return (
    <main className="container relative pb-12 md:pb-24 min-h-[calc(100vh-213px)]">
      <div className="absolute bg-orange w-[125px] h-[300px] -rotate-[76deg] blur-[250px] right-[100px] top-[380px] -z-[1] max-md:hidden" />
      <SearchInput className="mt-2.5 md:mt-8" />
      <h1 className="md:text-lg leading-[107%] mt-[18px] md:mt-9">Overview</h1>
      <TransactionDetaliCard className="mt-2.5 md:mt-8" />
    </main>
  );
};

export default Tx;
