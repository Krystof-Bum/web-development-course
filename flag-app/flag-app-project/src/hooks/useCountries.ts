import { useContext } from "react";
import { CountriesContext } from "../context";

export const useCountries = () => useContext(CountriesContext);
