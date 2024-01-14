import { useRef } from "react";
import { IoMdSearch } from "react-icons/io";

interface Props {
  onSearch: (searchText: string) => void;
}

const Search = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <div className="flex items-center pl-5 pt-5 pb-5 bg-white w-[480px] rounded-lg shadow-sm">
        <IoMdSearch size={23} color="hsl(0, 0%, 52%)" />
        <input
          ref={ref}
          type="text"
          placeholder="Search for a country..."
          className="pl-5 text-sm w-96 placeholder-customLightGray outline-none"
        />
      </div>
    </form>
  );
};

export default Search;
