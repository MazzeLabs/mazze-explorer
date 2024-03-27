import Clock from "../svgs/Clock";
import Database from "../svgs/Database";
import Globe from "../svgs/Globe";
import Logo from "../svgs/Logo";

interface NetworkAnalyzeProps {
  className?: string;
}

const NetworkAnalyze: React.FC<NetworkAnalyzeProps> = ({ className }) => {
  return (
    <div
      className={`bg-white rounded-[10px] py-2.5 px-[35px] ${className ?? ""}`}
    >
      <div className="flex border-b border-gray-300">
        <div className="pt-4 h-[110px] border-r border-gray-300 w-full">
          <div className="flex items-center">
            <Logo className="text-orange w-[27px] h-[22px]" />
            <span className="ml-3 text-lg leading-[107%]">Mazze Price</span>
          </div>
          <div className="flex items-center mt-[15px] space-x-3">
            <span className="text-xl font-bold leading-[107%]">$1.25</span>
            <span className="text-lg text-gray-500">0.003 ETH</span>
            <span className="text-lg text-green">0.003 ETH</span>
          </div>
        </div>
        <div className="pt-4 pl-[35px] h-[110px] w-full">
          <div className="flex items-center">
            <Database className="text-orange" />
            <span className="ml-3 text-lg leading-[107%]">Transactions</span>
          </div>
          <div className="flex items-center mt-[15px] space-x-3">
            <span className="text-xl font-bold leading-[107%]">1234.2M</span>
            <span className="text-lg text-gray-500">57 TPS</span>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="pt-6 h-[110px] border-r border-gray-300 w-full">
          <div className="flex items-center">
            <Globe className="text-orange" />
            <span className="ml-3 text-lg leading-[107%]">
              Mazze MC on MazzeScan
            </span>
          </div>
          <div className="flex items-center mt-[15px] space-x-3">
            <span className="text-xl font-bold leading-[107%]">$1.25</span>
            <span className="text-lg text-gray-500">0.003 ETH</span>
            <span className="text-lg text-green">0.003 ETH</span>
          </div>
        </div>
        <div className="pt-6 pl-[35px] h-[110px] w-full">
          <div className="flex items-center">
            <Clock className="text-orange" />
            <span className="ml-3 text-lg leading-[107%]">Latest block</span>
          </div>
          <div className="flex items-center mt-[15px] space-x-3">
            <span className="text-xl font-bold leading-[107%]">3701235152</span>
            <span className="text-lg text-gray-500">2.0s</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkAnalyze;
