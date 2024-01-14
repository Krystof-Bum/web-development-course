import Filter from "./Filter";
import Search from "./Search";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchFilterWrapper = ({ onSearch }: Props) => {
  return (
    <div className="flex justify-between mb-16">
      <Search onSearch={onSearch} />
      <Filter />
    </div>
  );
};

export default SearchFilterWrapper;
