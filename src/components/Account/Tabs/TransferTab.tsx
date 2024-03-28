import TransfersTable from "@/components/Transfers/TransfersTable";
import Link from "next/link";

const TransferTab = () => {
  return (
    <div>
      <TransfersTable className="py-4" />
      <Link
        href={"/"}
        className="leading-[138%] text-orange border border-orange py-1 md:py-1.5 px-2.5 md:px-3 rounded-[5px] hover:border-gray-700 transition-all max-md:text-sm"
      >
        View Other 19 Transfers
      </Link>
    </div>
  );
};

export default TransferTab;
