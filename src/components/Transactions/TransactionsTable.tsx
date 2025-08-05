import Link from "next/link";
import CircleCheck from "../svgs/CircleCheck";
import CircleMinus from "../svgs/CircleMinus";
import { CommonTransaction } from "@/contexts/BlockchainContext";
import { useBlockchain } from "@/contexts/BlockchainContext";
import { formatLongString, formatTimeAgo } from "@/utils/helpers";
import { SourceChainTypeBadge } from "../SourceChainTypeBadge";
import { TransactionIcon } from "@/utils/icons";

interface TransactionsTableItemProps {
  hash: string;
  method: string;
  block: string;
  age: number;
  fee: string;
  result: string;
  className?: string;
  type: "dag" | "evm";
}

const TransactionsTableItem: React.FC<TransactionsTableItemProps> = ({
  hash,
  method,
  block,
  age,
  fee,
  result,
  className,
  type,
}) => {
  const transactionIconBg = type === "dag" 
    ? "bg-mazze-orange-gradient" 
    : "bg-mazze-green-gradient";
  
  const transactionIconText = type === "dag" 
    ? "text-mazze-dark" 
    : "text-white";

  return (
    <tr
      className={`border-b border-mazze-stroke/20 hover:bg-mazze-darkBlueLight/30 transition-colors duration-200 *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm ${className ?? ""}`}
    >
      <td className="pr-3">
        <div className="flex items-center space-x-2">
          <div className={`w-5 h-5 ${transactionIconBg} rounded-md flex items-center justify-center`}>
            <TransactionIcon className={`${transactionIconText}`} />
          </div>
          <Link href={`/transactions/${hash}`} className="text-mazze-orange hover:text-mazze-orange/80 transition-colors duration-200">
            {formatLongString(hash)}
          </Link>
        </div>
      </td>
      <td className="text-white px-3">{method}</td>
      <td className="text-white px-3">{block}</td>
      <td className="text-white/60 px-3">{formatTimeAgo(age)}</td>
      <td className="px-3">
        <CircleCheck className="text-green-500 max-md:w-[18px] max-md:h-[18px]" />
      </td>
      <td className="text-white pl-3">{fee} MAZZE</td>
    </tr>
  );
};

interface TransactionsTableProps {
  className?: string;
}

const TransactionsTable: React.FC<TransactionsTableProps> = ({ className }) => {
  const { commonTransactions } = useBlockchain();
  
  return (
    <div
      className={`bg-mazze-darkBlueLight/50 backdrop-blur-sm border border-mazze-stroke/20 rounded-xl shadow-mazze-card p-4 md:p-5 ${className ?? ""}`}
    >
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="relative">
            <tr className="md:*:text-lg *:leading-[138%] *:py-2.5 *:font-semibold *:text-left *:whitespace-nowrap z-10 relative text-white/80">
              <th scope="col" className="pr-3">
                Tx hash
              </th>
              <th scope="col" className="px-3">
                Method
              </th>
              <th scope="col" className="px-3">
                Block
              </th>
              <th scope="col" className="px-3">
                Age
              </th>
              <th scope="col" className="px-3">
                Results
              </th>
              <th scope="col" className="pl-3">
                Fee
              </th>
            </tr>
          </thead>
          <tbody className="text-white">
            {commonTransactions.map((transaction, index) => (
              <TransactionsTableItem
                key={index}
                hash={transaction.hash ?? ""}
                method="Transfer"
                block={transaction.blockHash ?? ""}
                age={transaction.timestamp ?? 0}
                result="success"
                fee="1"
                type={transaction.type}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;
