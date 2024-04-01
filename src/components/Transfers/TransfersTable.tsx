"use client";

import ArrowRight from "../svgs/ArrowRight";
import CircleCheck from "../svgs/CircleCheck";
import CircleClose from "../svgs/Failed";

interface TransfersTableProps {
  className?: string;
}

const TransfersTable: React.FC<TransfersTableProps> = ({ className }) => {
  return (
    <div className={`bg-white rounded-[10px] ${className ?? ""}`}>
      <div className="overflow-x-auto px-4 md:px-5 pb-0.5">
        <table className="min-w-full">
          <thead className="relative rounded-[10px]">
            <div className="absolute top-0 -left-4 md:-left-5 -right-4 md:-right-5 bottom-0 bg-slate z-[0] rounded-[10px]" />
            <tr className="md:*:text-lg *:leading-[138%] *:py-2.5 *:font-normal *:text-left *:whitespace-nowrap z-10 relative">
              <th scope="col" className="pr-3">
                Txs hash
              </th>
              <th scope="col" className="px-3">
                Block
              </th>
              <th scope="col" className="px-3">
                Time
              </th>
              <th scope="col" className="px-3">
                From
              </th>
              <th scope="col" className="px-3"></th>
              <th scope="col" className="px-3">
                To
              </th>
              <th scope="col" className="px-3">
                Value
              </th>
              <th scope="col" className="pl-3">
                Result
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="border-b *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm">
              <td className="text-blue pr-3">0x073f8aba70…</td>
              <td className="text-blue px-3">35,152</td>
              <td className="text-gray-500 px-3">1 secs ago</td>
              <td className="text-blue px-3">0x21af....9b3840</td>
              <td className="px-3">
                <ArrowRight className="text-green" />
              </td>
              <td className="text-blue px-3">0x21af....9b3840</td>
              <td className="px-3">1000</td>
              <td className="pl-3">
                <CircleCheck className="text-green max-md:w-[18px] max-md:h-[18px]" />
              </td>
            </tr>
            <tr className="border-b *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm">
              <td className="text-blue pr-3">0xf8e2cde5a1…</td>
              <td className="text-blue px-3">35,151</td>
              <td className="text-gray-500 px-3">2 secs ago</td>
              <td className="text-blue px-3">0x21af....9b3840</td>
              <td className="px-3">
                <ArrowRight className="text-green" />
              </td>
              <td className="text-blue px-3">0x21af....9b3840</td>
              <td className="px-3">512</td>
              <td className="pl-3">
                <CircleCheck className="text-green max-md:w-[18px] max-md:h-[18px]" />
              </td>
            </tr>
            <tr className="border-b *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm">
              <td className="text-blue pr-3">0xf8e2cde5a1…</td>
              <td className="text-blue px-3">35,151</td>
              <td className="text-gray-500 px-3">3 secs ago</td>
              <td className="text-blue px-3">0x21af....9b3840</td>
              <td className="px-3">
                <ArrowRight className="text-green" />
              </td>
              <td className="text-blue px-3">0x21af....9b3840</td>
              <td className="px-3">512</td>
              <td className="pl-3">
                <CircleCheck className="text-green max-md:w-[18px] max-md:h-[18px]" />
              </td>
            </tr>
            <tr className="border-b *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm">
              <td className="text-blue pr-3">0xf8e2cde5a1…</td>
              <td className="text-blue px-3">35,151</td>
              <td className="text-gray-500 px-3">1 min ago</td>
              <td className="text-blue px-3">0x21af....9b3840</td>
              <td className="px-3">
                <ArrowRight className="text-green" />
              </td>
              <td className="text-blue px-3">0x21af....9b3840</td>
              <td className="px-3">512</td>
              <td className="pl-3">
                <CircleClose className="text-red max-md:w-[18px] max-md:h-[18px]" />
              </td>
            </tr>
            <tr className="border-b *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm">
              <td className="text-blue pr-3">0xf8e2cde5a1…</td>
              <td className="text-blue px-3">35,151</td>
              <td className="text-gray-500 px-3">1 min ago</td>
              <td className="text-blue px-3">0x21af....9b3840</td>
              <td className="px-3">
                <ArrowRight className="text-green" />
              </td>
              <td className="text-blue px-3">0x21af....9b3840</td>
              <td className="px-3">512</td>
              <td className="pl-3">
                <CircleClose className="text-red max-md:w-[18px] max-md:h-[18px]" />
              </td>
            </tr>
            <tr className="border-b *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm">
              <td className="text-blue pr-3">0xf8e2cde5a1…</td>
              <td className="text-blue px-3">35,151</td>
              <td className="text-gray-500 px-3">1 min ago</td>
              <td className="text-blue px-3">0x21af....9b3840</td>
              <td className="px-3">
                <ArrowRight className="text-green" />
              </td>
              <td className="text-blue px-3">0x21af....9b3840</td>
              <td className="px-3">512</td>
              <td className="pl-3">
                <CircleClose className="text-red max-md:w-[18px] max-md:h-[18px]" />
              </td>
            </tr>
            <tr className="border-b *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm">
              <td className="text-blue pr-3">0xf8e2cde5a1…</td>
              <td className="text-blue px-3">35,151</td>
              <td className="text-gray-500 px-3">1 min ago</td>
              <td className="text-blue px-3">0x21af....9b3840</td>
              <td className="px-3">
                <ArrowRight className="text-green" />
              </td>
              <td className="text-blue px-3">0x21af....9b3840</td>
              <td className="px-3">512</td>
              <td className="pl-3">
                <CircleClose className="text-red max-md:w-[18px] max-md:h-[18px]" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransfersTable;
