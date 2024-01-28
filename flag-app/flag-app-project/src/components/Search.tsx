import { useRef } from "react";
import { useCountries, useDarkMode } from "../hooks";

import { IoMdSearch } from "react-icons/io";

export const Search = () => {
  const { handleSearch } = useCountries();
  const { mode } = useDarkMode();
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (ref.current) handleSearch(ref.current.value);
  };

  const baseClassName =
    "flex items-center pl-5 pt-5 pb-5 w-[480px] rounded-lg shadow-sm";

  const inputClassName =
    "pl-5 text-sm w-96 placeholder-customLightGray outline-none";

  const darkModeClassName =
    mode === "dark" ? "bg-darkModeBlack shadow-white" : "bg-white";

  return (
    <form onSubmit={handleSubmit}>
      <div className={`${baseClassName} ${darkModeClassName}`}>
        <IoMdSearch size={23} color="hsl(0, 0%, 52%)" />
        <input
          ref={ref}
          type="text"
          placeholder="Search for a country..."
          className={`${inputClassName} ${darkModeClassName}`}
        />
      </div>
    </form>
  );
};
