import { FC, PropsWithChildren, useState } from "react";
import { CountriesContext } from "./context";
import { useApiData } from "./hooks";

const CountriesContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const { data: countries, error, isLoading } = useApiData(searchInput);

  const handleSearch = (searchText: string) => {
    setSearchInput(searchText);
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
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContextProvider;
