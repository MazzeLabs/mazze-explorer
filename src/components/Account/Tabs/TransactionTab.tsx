import TransactionsTable from "@/components/Transactions/TransactionsTable";
import Link from "next/link";

const TransactionTab = () => {
  return (
    <div>
      <TransactionsTable className="py-4" />
      <Link
        href={"/"}
        className="leading-[138%] text-orange border border-orange py-1 md:py-1.5 px-2.5 md:px-3 rounded-[5px] hover:border-gray-800 transition-all max-md:text-sm"
      >
        View Other 19 Transactions
      </Link>
    </div>
  );
};

export default TransactionTab;
