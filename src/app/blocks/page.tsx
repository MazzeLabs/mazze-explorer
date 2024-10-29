import BlocksTable from "@/components/Blocks/BlocksTable";
import SearchInput from "@/components/SearchInput";

const Block = () => {
  return (
    <main className="container relative pb-12 md:pb-20 min-h-[calc(100vh-213px)]">
      <div className="absolute bg-orange w-[125px] h-[300px] -rotate-[76deg] blur-[250px] right-[100px] top-[380px] -z-[1] max-md:hidden" />
      <SearchInput className="mt-2.5 md:mt-8" />
      <BlocksTable className="mt-[15px] md:mt-8" />
    </main>
  );
};

export default Block;
