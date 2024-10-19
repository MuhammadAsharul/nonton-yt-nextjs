import { SearchInput } from "@/components/SearchInput";

export default function Videos({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  return (
    //   <div className="">Video Pages {searchParams.query}</div>;
    <div className="w-[50%]">
      <SearchInput />
    </div>
  );
}
