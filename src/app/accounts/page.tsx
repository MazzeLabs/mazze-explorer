import AccountBalanceCard from "@/components/Account/AccountBalanceCard";
import AccountDataCard from "@/components/Account/AccountDataCard";
import AccountInfoCard from "@/components/Account/AccountInfoCard";
import AccountsTable from "@/components/Account/AccountsTable";
import SearchInput from "@/components/SearchInput";

const Accounts = () => {
  return (
    <main className="container relative pb-12 min-h-[calc(100vh-213px)]">
      <div className="absolute bg-orange w-[125px] h-[300px] -rotate-[76deg] blur-[250px] right-[100px] top-[380px] -z-[1] max-md:hidden" />
      <SearchInput className="mt-2.5 md:mt-8" />
      <AccountsTable className="mt-6 md:mt-11" />
      {/* <AccountDataCard className="mt-[18px] lg:mt-3" /> */}
    </main >
  );
};

export default Accounts;
