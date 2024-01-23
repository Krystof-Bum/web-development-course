import { Filter, Search } from "../components";

export const SearchFilterWrapper = () => {
  return (
    <div className="flex justify-between mb-16">
      <Search />
      <Filter />
    </div>
  );
};
