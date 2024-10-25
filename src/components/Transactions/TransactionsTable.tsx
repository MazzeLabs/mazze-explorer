import Link from "next/link";
import CircleCheck from "../svgs/CircleCheck";
import CircleMinus from "../svgs/CircleMinus";

interface TransactionsTableItemProps {
  hash: string;
  method: string;
  block: string;
  age: string;
  fee: string;
  result: string;
  className?: string;
}

const TransactionsTableItem: React.FC<TransactionsTableItemProps> = ({
  hash,
  method,
  block,
  age,
  fee,
  result,
  className,
}) => {
  return (
    <tr
      className={`border-b dark:border-gray-600 *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm ${className ?? ""
        }`}
    >
      <td className="text-blue pr-3">
        <Link href={`/transactions/${hash}`}>0x{hash}</Link>
      </td>
      <td className="text-blue px-3">{method}</td>
      <td className="text-blue px-3">{block}</td>
      <td className="text-gray-500 px-3">{age}</td>
      <td className="px-3">
        <CircleCheck className="text-green max-md:w-[18px] max-md:h-[18px]" />
      </td>
      <td className="text-blue px-3">{fee} MAZZE</td>
    </tr>
  );
};

interface TransactionsTableProps {
  className?: string;
}

const TransactionsTable: React.FC<TransactionsTableProps> = ({ className }) => {
  return (
    <div
      className={`bg-white dark:bg-dark-blue-200 rounded-[10px] ${className ?? ""
        }`}
    >
      <div className="overflow-x-auto px-4 md:px-5 pb-0.5">
        <table className="min-w-full">
          <thead className="relative rounded-[10px]">
            <div className="absolute top-0 -left-4 md:-left-5 -right-4 md:-right-5 bottom-0 bg-slate dark:bg-dark-blue-100 z-[0] rounded-[10px]" />
            <tr className="md:*:text-lg *:leading-[138%] *:py-2.5 *:font-normal *:text-left *:whitespace-nowrap z-10 relative">
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
          <tbody className="">
            <TransactionsTableItem
              hash="0x57af....9b3840"
              method="Transfer"
              block="14,101"
              age="2 hrs ago"
              result="success"
              fee="1"
            />
            <TransactionsTableItem
              hash="0x57af....9b3840"
              method="Transfer"
              block="14,052"
              age="4 hrs ago"
              result="success"
              fee="1"
            />
            <TransactionsTableItem
              hash="0x57af....9b3840"
              method="Transfer"
              block="14,001"
              age="4 hrs ago"
              result="success"
              fee="1"
            />
            <TransactionsTableItem
              hash="0x57af....9b3840"
              method="Transfer"
              block="13,887"
              age="6 hrs ago"
              result="success"
              fee="1"
            />
            <TransactionsTableItem
              hash="0x57af....9b3840"
              method="Transfer"
              block="13,751"
              age="7 hrs ago"
              result="success"
              fee="1"
            />
            <TransactionsTableItem
              hash="0x57af....9b3840"
              method="Transfer"
              block="13,750"
              age="7 hrs ago"
              result="success"
              fee="1"
            />
            <TransactionsTableItem
              hash="0x57af....9b3840"
              method="Transfer"
              block="13,231"
              age="10 hrs ago"
              result="success"
              fee="1"
            />
            <TransactionsTableItem
              hash="0x57af....9b3840"
              method="Transfer"
              block="13,018"
              age="11 hrs ago"
              result="success"
              fee="1"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;
