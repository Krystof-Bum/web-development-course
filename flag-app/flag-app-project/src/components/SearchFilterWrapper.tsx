import { Filter, Search } from "../components";

interface Props {
  onSearch: (searchText: string) => void;
}

export const SearchFilterWrapper = ({ onSearch }: Props) => {
  return (
    <div className="flex justify-between mb-16">
      <Search onSearch={onSearch} />
      <Filter />
    </div>
  );
};
