"use client";

import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import Logo from "../svgs/Logo";
import LinearProgressBar from "../LinearProgressBar";
import useDark from "@/hooks/useDark";

ChartJS.register(ArcElement, Tooltip);

interface AccountBalanceCardProps {
  className?: string;
}

export const data = (dark: boolean) => ({
  labels: ["Transfer", "Staking", "Other"],
  datasets: [
    {
      label: "# of Votes",
      data: [50, 30, 20],
      backgroundColor: ["#FD9109", dark ? "#D1D3D8" : "#313131", "#95A4FC"],
      borderColor: dark ? "#0D122D" : "#FFF",
      rotation: -45,
      hoverOffset: 5,
    },
  ],
});

const AccountBalanceCard: React.FC<AccountBalanceCardProps> = ({
  className,
}) => {
  const { dark } = useDark();
  return (
    <div className={className ?? ""}>
      <h2 className="md:text-lg leading-[138%]">Balance</h2>
      <div className="mt-4 bg-white dark:bg-dark-blue-200 dark:border dark:border-gray-750 rounded-[10px] py-[25px] px-4 md:px-[30px]">
        <div className="flex justify-between items-center pb-[26px] md:pb-5 border-b dark:border-none border-gray-300">
          <div className="flex items-center">
            <Logo className="w-6 md:w-[27px] h-[19px] md:h-[22px] text-orange" />
            <span className="ml-2 md:ml-3 md:text-lg leading-[107%]">
              Mazze
            </span>
            <div className="ml-3 md:ml-3.5 bg-light-green text-black text-[10px] md:text-xs leading-[138%] py-[3px] md:py-1 px-[7px] md:px-2 rounded-[4px]">
              Native
            </div>
          </div>
          <div className="text-lg md:text-xl font-bold leading-[107%]">
            $0.01
          </div>
        </div>
        <div className="flex max-md:flex-col items-center mt-[26px] md:mt-[30px] mb-10">
          <div className="flex items-center justify-between w-full">
            <div>
              <Doughnut
                data={data(dark)}
                className="w-[120px] md:w-[160px] xl:w-[200px]"
              />
            </div>
            <div className="flex flex-col space-y-3 ml-[30px] sm:ml-[40px] xl:ml-[60px] w-full max-sm:max-w-[160px] sm:min-w-[160px] xl:min-w-[250px]">
              <div className="flex items-center justify-between">
                <span className="max-md:text-xs leading-[138%] relative before:content-[''] before:absolute before:top-0 before:bottom-0 before:-left-2.5 md:before:-left-3 before:w-[5px] md:before:w-1.5 before:h-[5px] md:before:h-1.5 before:bg-orange before:rounded-full before:my-auto">
                  Transfer
                </span>
                <span className="text-xs leading-[18px]">312512</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="max-md:text-xs leading-[138%] relative before:content-[''] before:absolute before:top-0 before:bottom-0 before:-left-2.5 md:before:-left-3 before:w-[5px] md:before:w-1.5 before:h-[5px] md:before:h-1.5 before:bg-gray-800 dark:before:bg-gray-350 before:rounded-full before:my-auto">
                  Locked
                </span>
                <span className="text-xs leading-[18px]">2251</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="max-md:text-xs leading-[138%] relative before:content-[''] before:absolute before:top-0 before:bottom-0 before:-left-2.5 md:before:-left-3 before:w-[5px] md:before:w-1.5 before:h-[5px] md:before:h-1.5 before:bg-indigo before:rounded-full before:my-auto">
                  Other
                </span>
                <span className="text-xs leading-[18px]">0</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-3 md:space-y-3.5 max-md:mt-5 md:ml-[50px] xl:ml-[72px] w-full">
            <LinearProgressBar
              title="Transfer"
              total={3}
              completed={1}
              barClassName="bg-fore-orange"
              progressClassName="bg-orange"
            />
            <LinearProgressBar
              title="Locked"
              total={5}
              completed={3}
              barClassName="bg-fore-indigo"
              progressClassName="bg-indigo"
            />
            <LinearProgressBar
              title="Other"
              total={140}
              completed={60}
              barClassName="bg-fore-pink"
              progressClassName="bg-gray-800 dark:bg-gray-350"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountBalanceCard;
