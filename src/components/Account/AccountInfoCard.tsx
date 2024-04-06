import Image from "next/image";
import Avatar from "@/assets/avatar.png";
import CopyClipboard from "../CopyClipboard";

interface AccountInfoCardProps {
  className?: string;
}

const AccountInfoCard: React.FC<AccountInfoCardProps> = ({ className }) => {
  return (
    <div className={`${className ?? ""}`}>
      <h2 className="md:text-lg leading-[138%]">Account</h2>
      <div className="flex flex-col justify-between mt-2.5 md:mt-4 bg-white dark:bg-dark-blue-200 dark:border dark:border-gray-750 rounded-[10px] p-4 md:p-5 h-[calc(100%-44px)]">
        <div className="flex items-center border-b border-gray-300 dark:border-none pb-3 md:pb-[15px]">
          <Image
            src={Avatar.src}
            width={Avatar.width}
            height={Avatar.height}
            alt="avatar"
            className="w-11 md:w-[52px] h-11 md:h-[52px]"
          />
          <span className="ml-2 md:ml-3 text-orange md:text-lg leading-[107%]">
            Account
          </span>
        </div>
        <div className="pt-3 md:pt-[15px] pb-[55px] break-words h-full">
          0xa412072BCE50ca74b6CE4eE2fc97189084BBe751c{" "}
          <CopyClipboard text="123" className="inline-block ml-1" />
        </div>
        <div className="border-t border-gray-300 dark:border-none pt-[18px]">
          <div className="flex items-center justify-between">
            <span className="md:text-lg leading-[138%]">Nonce</span>
            <span className="max-md:text-sm leading-[138%]">29</span>
          </div>
          <div className="flex items-center justify-between mt-2 md:mt-2.5">
            <span className="md:text-lg leading-[138%]">Account type</span>
            <span className="max-md:text-sm leading-[138%] text-blue">
              Basic
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfoCard;
