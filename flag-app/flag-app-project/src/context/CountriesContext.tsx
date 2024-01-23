import React from "react";
import { Country } from "../interfaces";

interface CountriesContextType {
  countries: Country[];
  error: string;
  isLoading: boolean;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: (searchText: string) => void;
}

export const CountriesContext = React.createContext<CountriesContextType>(
  {} as CountriesContextType
);
