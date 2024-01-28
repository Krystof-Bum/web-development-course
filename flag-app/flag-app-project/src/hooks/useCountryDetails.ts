import { Country } from "../interfaces";

export const useCountryDetails = (country: Country) => {
  const { name, population, region, capital, tld, currencies, languages } =
    country;

  const countryNameCode = Object.keys(name.nativeName)[0];
  const nativeName = name.nativeName[countryNameCode].official;

  const domain = tld[0];

  const countryCurrencyCode = Object.keys(currencies)[0];
  const currency = currencies[countryCurrencyCode].name;

  const languageCode = Object.keys(languages)[0];
  const language = languages[languageCode];

  return {
    name,
    population,
    region,
    capital,
    nativeName,
    domain,
    currency,
    language,
  };
};
