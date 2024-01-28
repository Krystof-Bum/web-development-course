import { useCountryDetails, useDarkMode } from "../hooks";
import { BorderCountry } from "./BorderCountry";
import CardItem from "./CardItem";
import { Country } from "../interfaces";

import { FaArrowLeft } from "react-icons/fa6";

interface Props {
  handleClickBack: () => void;
  country: Country;
}

export const CardDetail = ({ handleClickBack, country }: Props) => {
  const { mode } = useDarkMode();

  const {
    name,
    population,
    region,
    capital,
    nativeName,
    domain,
    currency,
    language,
  } = useCountryDetails(country);

  const baseClassName =
    "inline-flex items-center gap-2 border rounded-md shadow-md mb-20 cursor-pointer px-6 py-1";
  const darkModeClassName = mode === "dark" ? "shadow-white" : "";

  return (
    <div>
      <div
        onClick={handleClickBack}
        className={`${baseClassName} ${darkModeClassName}`}
      >
        <FaArrowLeft />
        <button>Back</button>
      </div>

      <div className="flex">
        <div>
          <img
            src={country.flags.png}
            alt="country-flag-image"
            className="w-[550px]"
          />
        </div>
        <div className="ml-28 mt-5">
          <h1 className="font-extrabold text-2xl mb-5">{name.official}</h1>
          <div className="flex gap-[200px]">
            <div className="flex flex-col gap-2 pb-24">
              <CardItem title="Native Name" value={nativeName} />
              <CardItem
                title="Population"
                value={population.toLocaleString("en-US")}
              />
              <CardItem title="Sub Region" value={region} />
              <CardItem title="Capital" value={capital} />
            </div>
            <div className="flex flex-col gap-2">
              <CardItem title="Top Level Domain" value={domain} />
              <CardItem title="Currencies" value={currency} />
              <CardItem title="Languagues" value={language} />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <p className="font-semibold text-sm">Border Countries:</p>
            <BorderCountry country={country} />
          </div>
        </div>
      </div>
    </div>
  );
};
