import ArrowRight from "../svgs/ArrowRight";
import CircleCheck from "../svgs/CircleCheck";
import CircleLink from "../svgs/CircleLink";
import CircleMinus from "../svgs/CircleMinus";
import Clock from "../svgs/Clock";
import CircleClose from "../svgs/Failed";

interface BlocksTableProps {
  className?: string;
}

const BlocksTable: React.FC<BlocksTableProps> = ({ className }) => {
  return (
    <div className={`bg-white p-4 md:p-5 rounded-[10px] ${className ?? ""}`}>
      <div className="overflow-x-auto px-4 md:px-5 pb-0.5">
        <table className="min-w-full">
          <thead className="relative rounded-[10px]">
            <div className="absolute top-0 -left-4 md:-left-5 -right-4 md:-right-5 bottom-0 bg-slate z-[0] rounded-[10px]" />
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
              <th scope="col" className="px-3">
                Extrinsics
              </th>
              <th scope="col" className="px-3">
                Evens
              </th>
              <th scope="col" className="px-3">
                Validator
              </th>
              <th scope="col" className="px-3">
                Block hash
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="border-b *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm">
              <td className="text-blue pr-3">74064712-1</td>
              <td className="px-3">
                <Clock className="text-orange max-md:w-5 max-md:h-5" />
              </td>
              <td className="text-gray-500 px-3">after 18 secs ago</td>
              <td className="text-blue px-3">1</td>
              <td className="text-blue px-3">1</td>
              <td className="text-blue px-3 flex items-center">
                <CircleLink className="text-green mr-1" />
                Cantor
              </td>
              <td className="text-blue px-3">0x21af....9b3840</td>
            </tr>
            <tr className="border-b *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm">
              <td className="text-blue pr-3">74064712-1</td>
              <td className="px-3">
                <Clock className="text-orange max-md:w-5 max-md:h-5" />
              </td>
              <td className="text-gray-500 px-3">after 18 secs ago</td>
              <td className="text-blue px-3">1</td>
              <td className="text-blue px-3">1</td>
              <td className="text-blue px-3 flex items-center">
                <CircleLink className="text-green mr-1" />
                Cantor
              </td>
              <td className="text-blue px-3">0x21af....9b3840</td>
            </tr>
            <tr className="border-b *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm">
              <td className="text-blue pr-3">74064712-1</td>
              <td className="px-3">
                <Clock className="text-orange max-md:w-5 max-md:h-5" />
              </td>
              <td className="text-gray-500 px-3">after 18 secs ago</td>
              <td className="text-blue px-3">1</td>
              <td className="text-blue px-3">1</td>
              <td className="text-blue px-3 flex items-center">
                <CircleMinus className="text-green mr-1" />
                Cantor
              </td>
              <td className="text-blue px-3">0x21af....9b3840</td>
            </tr>
            <tr className="border-b *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm">
              <td className="text-blue pr-3">74064712-1</td>
              <td className="px-3">
                <Clock className="text-orange max-md:w-5 max-md:h-5" />
              </td>
              <td className="text-gray-500 px-3">after 18 secs ago</td>
              <td className="text-blue px-3">1</td>
              <td className="text-blue px-3">1</td>
              <td className="text-blue px-3 flex items-center">
                <CircleLink className="text-green mr-1" />
                Cantor
              </td>
              <td className="text-blue px-3">0x21af....9b3840</td>
            </tr>
            <tr className="border-b *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm">
              <td className="text-blue pr-3">74064712-1</td>
              <td className="px-3">
                <Clock className="text-orange max-md:w-5 max-md:h-5" />
              </td>
              <td className="text-gray-500 px-3">after 18 secs ago</td>
              <td className="text-blue px-3">1</td>
              <td className="text-blue px-3">1</td>
              <td className="text-blue px-3 flex items-center">
                <CircleMinus className="text-green mr-1" />
                Cantor
              </td>
              <td className="text-blue px-3">0x21af....9b3840</td>
            </tr>
            <tr className="border-b *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm">
              <td className="text-blue pr-3">74064712-1</td>
              <td className="px-3">
                <Clock className="text-orange max-md:w-5 max-md:h-5" />
              </td>
              <td className="text-gray-500 px-3">after 18 secs ago</td>
              <td className="text-blue px-3">1</td>
              <td className="text-blue px-3">1</td>
              <td className="text-blue px-3 flex items-center">
                <CircleLink className="text-green mr-1" />
                Cantor
              </td>
              <td className="text-blue px-3">0x21af....9b3840</td>
            </tr>
            <tr className="border-b *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm">
              <td className="text-blue pr-3">74064712-1</td>
              <td className="px-3">
                <Clock className="text-orange max-md:w-5 max-md:h-5" />
              </td>
              <td className="text-gray-500 px-3">after 18 secs ago</td>
              <td className="text-blue px-3">1</td>
              <td className="text-blue px-3">1</td>
              <td className="text-blue px-3 flex items-center">
                <CircleMinus className="text-green mr-1" />
                Cantor
              </td>
              <td className="text-blue px-3">0x21af....9b3840</td>
            </tr>
            <tr className="border-b *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm">
              <td className="text-blue pr-3">74064712-1</td>
              <td className="px-3">
                <Clock className="text-orange max-md:w-5 max-md:h-5" />
              </td>
              <td className="text-gray-500 px-3">after 18 secs ago</td>
              <td className="text-blue px-3">1</td>
              <td className="text-blue px-3">1</td>
              <td className="text-blue px-3 flex items-center">
                <CircleLink className="text-green mr-1" />
                Cantor
              </td>
              <td className="text-blue px-3">0x21af....9b3840</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlocksTable;
