import Logo from "../svgs/Logo";

interface NativeStatisticsProps {
  className?: string;
}

const NativeStatistics: React.FC<NativeStatisticsProps> = ({ className }) => {
  return (
    <div
      className={`flex max-md:flex-col md:items-center border border-gray-700 bg-dark-blue/50 rounded-[10px] py-2 px-3 text-lg md:divide-x-[1px] md:divide-gray-700 cursor-pointer ${
        className ?? ""
      }`}
    >
      <div className="flex items-center md:pr-5">
        <Logo className="text-orange w-[23px] h-[20px]" />
        <span className="text-white ml-2">$0.01</span>
        <span className="text-green ml-3">12%</span>
      </div>
      <div className="text-white md:pl-5">
        <span>MC:</span>
        <span className="ml-3">26.00M</span>
      </div>
    </div>
  );
};

export default NativeStatistics;
