import { useRef } from "react";
import { IoMdSearch } from "react-icons/io";
import { useCountries, useDarkMode } from "../hooks";

export const Search = () => {
  const { handleSearch } = useCountries();
  const { mode } = useDarkMode();
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (ref.current) handleSearch(ref.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={`flex items-center pl-5 pt-5 pb-5  w-[480px] rounded-lg shadow-sm ${
          mode === "dark" ? "bg-darkModeBlack shadow-white" : "bg-white"
        }`}
      >
        <IoMdSearch size={23} color="hsl(0, 0%, 52%)" />
        <input
          ref={ref}
          type="text"
          placeholder="Search for a country..."
          className={`pl-5 text-sm w-96 placeholder-customLightGray outline-none ${
            mode === "dark" ? "bg-darkModeBlack" : "bg-white"
          }`}
        />
      </div>
    </form>
  );
};
