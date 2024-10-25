import ArrowRight from "../svgs/ArrowRight";
import CircleCheck from "../svgs/CircleCheck";
import CircleLink from "../svgs/CircleLink";
import CircleMinus from "../svgs/CircleMinus";
import Clock from "../svgs/Clock";
import CircleClose from "../svgs/Failed";

interface BlocksTableItemProps {
  blockNumber: string;
  age: string;
  validator: string;
  txs: string;
  hash: string;
  className?: string;
}

const BlocksTableItem: React.FC<BlocksTableItemProps> = ({
  blockNumber,
  age,
  validator,
  txs,
  hash,
  className,
}) => {
  return (
    <tr
      className={`border-b dark:border-gray-600 *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm ${
        className ?? ""
      }`}
    >
      <td className="text-blue pr-3">{blockNumber}</td>
      <td className="px-3">
        <Clock className="text-orange max-md:w-5 max-md:h-5" />
      </td>
      <td className="text-gray-500 px-3">{age} secs ago</td>
      <td className="text-blue px-3">{txs}</td>
      <td className="text-blue px-3 flex items-center">
        <CircleLink className="text-green mr-1" />
        {validator}
      </td>
      <td className="text-blue px-3">{hash}</td>
    </tr>
  );
};

interface BlocksTableProps {
  className?: string;
}

const BlocksTable: React.FC<BlocksTableProps> = ({ className }) => {
  return (
    <div
      className={`bg-white dark:bg-dark-blue-200 dark:border dark:border-gray-750 p-4 md:p-5 rounded-[10px] ${
        className ?? ""
      }`}
    >
      <div className="overflow-x-auto px-4 md:px-5 pb-0.5">
        <table className="min-w-full">
          <thead className="relative rounded-[10px]">
            <div className="absolute top-0 -left-4 md:-left-5 -right-4 md:-right-5 bottom-0 bg-slate dark:bg-dark-blue-100 z-[0] rounded-[10px]" />
            <tr className="md:*:text-lg *:leading-[138%] *:py-2 md:*:py-2.5 *:font-normal *:text-left *:whitespace-nowrap z-10 relative">
              <th scope="col" className="pr-3">
                Block
              </th>
              <th scope="col" className="px-3">
                Status
              </th>
              <th scope="col" className="px-3">
                Time
              </th>
              <th scope="col" className="px-3"></th>
              <th scope="col" className="px-3">
                Validator
              </th>
              <th scope="col" className="px-3">
                Block hash
              </th>
            </tr>
          </thead>
          <tbody className="">
            <BlocksTableItem
              block="35,1522"
              age="1"
              txs="1"
              validator="Mazze 1"
              hash="0xfabb....aa1631"
            />
            <BlocksTableItem
              block="35,152"
              age="2"
              txs="1"
              validator="Mazze 1"
              hash="0xa43d....ec78af"
            />
            <BlocksTableItem
              block="35,150"
              age="3"
              txs="1"
              validator="Mazze 1"
              hash="0xf277....1bda5e"
            />
            <BlocksTableItem
              block="35,149"
              age="4"
              txs="1"
              validator="Mazze 1"
              hash="0x2dec....adfe32"
            />
            <BlocksTableItem
              block="35,148"
              age="5"
              txs="1"
              validator="Mazze 1"
              hash="0xd160....9a9278"
            />
            <BlocksTableItem
              block="35,147"
              age="6"
              txs="1"
              validator="Mazze 1"
              hash="0xd43f....c90d3d"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlocksTable;
