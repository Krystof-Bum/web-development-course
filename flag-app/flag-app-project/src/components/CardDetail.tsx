import { FaArrowLeft } from "react-icons/fa6";
import { useDarkMode } from "../hooks";
import { BorderCountry } from "./BorderCountry";
import CardItem from "./CardItem";
import { Country } from "../interfaces";

interface Props {
  handleClickBack: () => void;
  country: Country;
}

export const CardDetail = ({ handleClickBack, country }: Props) => {
  const { mode } = useDarkMode();

  const { name, population, region, capital, tld, currencies, languages } =
    country;

  const countryNameCode = Object.keys(name.nativeName)[0];
  const nativeName = name.nativeName[countryNameCode].official;

  const domain = tld[0];

  const countryCurrencyCode = Object.keys(currencies)[0];
  const currency = currencies[countryCurrencyCode].name;

  const languageCode = Object.keys(languages)[0];
  const language = languages[languageCode];

  return (
    <div>
      <div
        onClick={handleClickBack}
        className={`inline-flex items-center gap-2 border rounded-md shadow-md mb-20 cursor-pointer px-6 py-1 ${
          mode === "dark" ? "shadow-white" : ""
        }`}
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
