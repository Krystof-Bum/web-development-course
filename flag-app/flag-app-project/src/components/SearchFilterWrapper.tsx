import Filter from "./Filter";
import Search from "./Search";

const SearchFilterWrapper = () => {
  return (
    <div className="flex justify-between mb-16">
      <Search />
      <Filter />
    </div>
  );
};

export default SearchFilterWrapper;
