import Link from "next/link";
import CircleCheck from "../svgs/CircleCheck";
import CircleMinus from "../svgs/CircleMinus";

interface AccountsTableItemProps {
    address: string;
    balance: string;
    className?: string;
}

const AccountsTableItem: React.FC<AccountsTableItemProps> = ({
    address,
    balance,
    className,
}) => {
    return (
        <tr className="border-b dark:border-gray-600 *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm">
            <td className="text-blue pr-3">
                <Link href={`/accounts/${address}`}>{address}</Link>
            </td>
            <td className="pl-3">{balance}</td>
        </tr>
    );
};

interface AccountsTableProps {
    className?: string;
}

const AccountsTable: React.FC<AccountsTableProps> = ({ className }) => {
    return (
        <div
            className={`bg-white dark:bg-dark-blue-200 dark:border dark:border-gray-750 rounded-[10px] ${className ?? ""
                }`}
        >
            <div className="overflow-x-auto px-4 md:px-5 pb-0.5">
                <table className="min-w-full">
                    <thead className="relative rounded-[10px]">
                        <div className="absolute top-0 -left-4 md:-left-5 -right-4 md:-right-5 bottom-0 bg-slate dark:bg-dark-blue-100 z-[0] rounded-[10px]" />
                        <tr className="md:*:text-lg *:leading-[138%] *:py-2.5 *:font-normal *:text-left *:whitespace-nowrap z-10 relative">
                            <th scope="col" className="pr-3">
                                Address
                            </th>
                            <th scope="col" className="px-3">
                                Balance
                            </th>
                        </tr>
                    </thead>
                    <tbody className="">
                        <AccountsTableItem
                            address="0x57af....9b3840"
                            balance="1"
                        />
                        <AccountsTableItem
                            address="0x57af....9b3840"
                            balance="1"
                        />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AccountsTable;
