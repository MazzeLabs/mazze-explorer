import Logo from "../svgs/Logo";

interface NativeStatisticsProps {
  className?: string;
}

const NativeStatistics: React.FC<NativeStatisticsProps> = ({ className }) => {
  return (
    <div
      className={`flex items-center border border-gray-600 bg-dark-blue/50 rounded-[10px] py-2 px-3 text-lg divide-x-[1px] divide-gray-600 cursor-pointer ${
        className ?? ""
      }`}
    >
      <div className="flex items-center pr-5">
        <Logo className="text-orange w-[23px] h-[20px]" />
        <span className="text-white ml-2">$1.25</span>
        <span className="text-green ml-3">12%</span>
      </div>
      <div className="text-white pl-5">
        <span>MC:</span>
        <span className="ml-3">10.04B</span>
      </div>
    </div>
  );
};

export default NativeStatistics;
