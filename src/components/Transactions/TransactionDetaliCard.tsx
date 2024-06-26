import CopyClipboard from "../CopyClipboard";
import CircleCheckFilled from "../svgs/CircleCheckFilled";
import Electricity from "../svgs/Electricity";
import Logo from "../svgs/Logo";
import TriArrowRight from "../svgs/TriArrowRight";

interface TransactionDetaliCardProps {
  className?: string;
}

const TransactionDetaliCard: React.FC<TransactionDetaliCardProps> = ({
  className,
}) => {
  return (
    <div
      className={`flex flex-col space-y-[30px] md:space-y-5 bg-white rounded-[10px] pt-7 pb-[30px] md:pb-5 px-4 md:pl-10 md:pr-10 lg:pr-[120px] ${
        className ?? ""
      }`}
    >
      <div className="flex max-md:flex-col items-start">
        <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm">
          Transaction Hash:
        </div>
        <div className="items-center  text-gray-900 break-words w-full overflow-hidden max-md:mt-1">
          <span className="break-words leading-[138%] max-md:text-xs">
            0x2e3a296b96013cf0b796fc3e2e4fb52ca487631b1256859fa407b9fa5e70b3fe 
            <CopyClipboard text="hello" className="ml-1 md:ml-2 inline-block" />
          </span>
        </div>
      </div>
      <div className="flex items-start max-md:justify-between">
        <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm">
          Status:
        </div>
        <div>
          <div className="flex items-center text-xs md:text-sm leading-[138%] text-gray-900 w-fit bg-orange rounded-[4px] p-1.5">
            <CircleCheckFilled className="mr-1 text-white max-md:w-[13px] max-md:h-[13px]" />{" "}
            Success
          </div>
        </div>
      </div>
      <div className="flex max-md:flex-col items-start">
        <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm">
          Block:
        </div>
        <div className="flex items-center max-md:mt-2">
          <div className="flex items-center mr-3 leading-[138%] max-md:text-sm">
            <CircleCheckFilled className="text-green mr-1 md:mr-1.5 max-md:w-[15px] max-md:h-[15px]" />
            19461262
          </div>
          <div className="border border-gray-300 rounded-[10px] py-0.5 px-2 text-xs md:text-sm leading-[138%] text-gray-900 w-fit">
            2001 Block Confirmations
          </div>
        </div>
      </div>
      <div className="flex max-md:flex-col items-start">
        <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm">
          Timestamp:
        </div>
        <div className="flex items-center leading-[138%] text-gray-900 max-md:mt-2 max-md:text-sm">
          6 hrs ago (Mar-18-2024 11:03:59 AM +UTC)
        </div>
      </div>
      <div className="h-px w-full bg-gray-300" />
      <div className="flex max-md:flex-col items-start">
        <div className="md:w-1/4 min-w-[25%]">
          <div className="md:-ml-5 flex items-center leading-[138%] max-md:text-sm">
            <Electricity className="text-orange mr-1 md:mr-0.5 max-md:w-4 max-md:h-4" />
            Transaction Action:
          </div>
        </div>
        <div className="max-md:mt-2">
          <div className="flex flex-wrap items-center leading-[138%] max-md:text-xs">
            <TriArrowRight className="text-gray-500 mr-1.5" />
            <span className="text-gray-500">Transfer</span>&nbsp;1,000
            MAZZE&nbsp;
            <span className="text-gray-500">To</span>
            &nbsp;0xa28072BC...84BBe717c
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-gray-300" />
      <div className="flex items-start">
        <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm">
          Sponsored:
        </div>
        <div></div>
      </div>
      <div className="h-px w-full bg-gray-300" />
      <div className="flex max-md:flex-col items-start">
        <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm">
          From:
        </div>
        <div className="leading-[138%] max-md:text-xs max-md:mt-2 w-full break-words">
          0x01c972546e1a24AB0f9614D9aDD4f935c227263F
          <CopyClipboard text="hello" className="ml-2 inline-block" />
        </div>
      </div>
      <div className="flex max-md:flex-col items-start">
        <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm">
          To:
        </div>
        <div className="leading-[138%] max-md:text-xs max-md:mt-2 w-full break-words">
          0x01c972546e1a24AB0f9614D9aDD4f935c227263F
          <CopyClipboard text="hello" className="ml-2 inline-block" />
        </div>
      </div>
      <div className="h-px w-full bg-gray-300" />
      <div className="flex max-md:flex-col items-start">
        <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm">
          Value:
        </div>
        <div className="flex items-center leading-[138%] text-gray-900 max-md:mt-2 max-md:text-xs">
          <Logo className="text-orange w-[12px] md:w-[16px] h-[10px] md:h-[13px] mr-1 md:mr-1.5" />
          1,000 MAZZE&nbsp;<span className="text-gray-500">($100.00)</span>
        </div>
      </div>
      <div className="flex max-md:flex-col items-start">
        <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm">
          Transaction Fee:
        </div>
        <div className="leading-[138%] text-gray-900 max-md:mt-2 max-md:text-xs">
          1 MAZZE&nbsp;
          <span className="text-gray-500">($0.01)</span>
        </div>
      </div>
      <div className="flex max-md:flex-col items-start">
        <div className="md:w-1/4 min-w-[25%] leading-[138%] max-md:text-sm">
          Gas Price:
        </div>
        <div className="leading-[138%] text-gray-900 max-md:mt-2 max-md:text-xs">
          1 Gmazzy&nbsp;
          <span className="text-gray-500">(0.000000001 MAZZE)</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetaliCard;
