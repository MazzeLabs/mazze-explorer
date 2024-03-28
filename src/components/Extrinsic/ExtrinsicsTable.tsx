import CircleCheck from "../svgs/CircleCheck";
import CircleMinus from "../svgs/CircleMinus";
import CircleClose from "../svgs/Failed";

interface ExtrinsicsTableProps {
  className?: string;
}

const ExtrinsicsTable: React.FC<ExtrinsicsTableProps> = ({ className }) => {
  return (
    <div className={`bg-white rounded-[10px] ${className ?? ""}`}>
      <div className="overflow-x-auto px-4 md:px-5 pb-0.5">
        <table className="min-w-full">
          <thead className="relative rounded-[10px]">
            <div className="absolute top-0 -left-4 md:-left-5 -right-4 md:-right-5 bottom-0 bg-slate z-[0] rounded-[10px]" />
            <tr className="md:*:text-lg *:leading-[138%] *:py-2.5 *:font-normal *:text-left *:whitespace-nowrap z-10 relative">
              <th scope="col" className="pr-3">
                Extrinsic ID
              </th>
              <th scope="col" className="px-3">
                Block
              </th>
              <th scope="col" className="px-3">
                Hash
              </th>
              <th scope="col" className="px-3">
                From
              </th>
              <th scope="col" className="px-3">
                Results
              </th>
              <th scope="col" className="pl-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="border-b *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm">
              <td className="text-blue pr-3">74064712-1</td>
              <td className="text-blue px-3">74064712</td>
              <td className="text-blue px-3">0x57af....9b3840</td>
              <td className="text-gray-500 px-3">1 min ago</td>
              <td className="px-3">
                <CircleCheck className="text-green max-md:w-[18px] max-md:h-[18px]" />
              </td>
              <td className="text-blue px-3">0x21af....9b3840</td>
            </tr>
            <tr className="border-b *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm">
              <td className="text-blue pr-3">74064712-1</td>
              <td className="text-blue px-3">74064712</td>
              <td className="text-blue px-3">0x57af....9b3840</td>
              <td className="text-gray-500 px-3">1 min ago</td>
              <td className="px-3">
                <CircleCheck className="text-green max-md:w-[18px] max-md:h-[18px]" />
              </td>
              <td className="text-blue px-3">0x21af....9b3840</td>
            </tr>
            <tr className="border-b *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm">
              <td className="text-blue pr-3">74064712-1</td>
              <td className="text-blue px-3">74064712</td>
              <td className="text-blue px-3">0x57af....9b3840</td>
              <td className="text-gray-500 px-3">1 min ago</td>
              <td className="px-3">
                <CircleCheck className="text-green max-md:w-[18px] max-md:h-[18px]" />
              </td>
              <td className="text-blue px-3">0x21af....9b3840</td>
            </tr>
            <tr className="border-b *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm">
              <td className="text-blue pr-3">74064712-1</td>
              <td className="text-blue px-3">74064712</td>
              <td className="text-blue px-3">0x57af....9b3840</td>
              <td className="text-gray-500 px-3">1 min ago</td>
              <td className="px-3">
                <CircleCheck className="text-green max-md:w-[18px] max-md:h-[18px]" />
              </td>
              <td className="text-blue px-3">0x21af....9b3840</td>
            </tr>
            <tr className="border-b *:whitespace-nowrap *:leading-[138%] *:py-[15px] max-md:*:text-sm">
              <td className="text-blue pr-3">74064712-1</td>
              <td className="text-blue px-3">74064712</td>
              <td className="text-blue px-3">0x57af....9b3840</td>
              <td className="text-gray-500 px-3">1 min ago</td>
              <td className="px-3">
                <CircleMinus className="text-red max-md:w-[18px] max-md:h-[18px]" />
              </td>
              <td className="text-blue px-3">0x21af....9b3840</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExtrinsicsTable;
