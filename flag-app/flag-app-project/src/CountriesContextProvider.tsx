import { FC, PropsWithChildren, useState } from "react";
import { CountriesContext } from "./context";
import { useApiData } from "./hooks";

const CountriesContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const {
    data: countries,
    error,
    isLoading,
  } = useApiData(searchInput, filterValue || "");

  const handleSearch = (searchText: string) => {
    setSearchInput(searchText);
  };

  const handleFilter = (element: string) => {
    setFilterValue(element);
  };

  return (
    <CountriesContext.Provider
      value={{
        countries,
        error,
        isLoading,
        searchInput,
        setSearchInput,
        handleSearch,
        filterValue,
        handleFilter,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContextProvider;
