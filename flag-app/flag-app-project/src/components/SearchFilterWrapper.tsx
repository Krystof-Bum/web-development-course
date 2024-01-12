import Filter from "./Filter";
import Search from "./Search";

const SearchFilterWrapper = () => {
  return (
    <div className="flex justify-between">
      <Search />
      <Filter />
    </div>
  );
};

export default SearchFilterWrapper;
