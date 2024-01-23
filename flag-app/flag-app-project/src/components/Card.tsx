import { useDarkMode } from "../hooks";
import { Country } from "../interfaces";
import CardItem from "./CardItem";

interface Props {
  country: Country;
  handleCardClick: (country: Country) => void;
}

const Card = ({ country, handleCardClick }: Props) => {
  const { mode } = useDarkMode();

  return (
    <div
      onClick={() => handleCardClick(country)}
      className={`w-64 rounded-md shadow-md overflow-hidden cursor-pointer ${
        mode === "dark" ? "shadow-white" : ""
      }`}
    >
      <div>
        <img
          src={country.flags.png}
          alt="country-flag-image"
          className="w-full h-[170px]"
        />
      </div>
      <div className="pl-5 pt-5 pb-10">
        <h1 className="font-bold pb-4">{country.name.official}</h1>
        <div className="flex flex-col gap-[2px]">
          <CardItem
            title="Population"
            value={country.population.toLocaleString("en-US")}
          />
          <CardItem title="Region" value={country.region} />
          <CardItem title="Capital" value={country.capital} />
        </div>
      </div>
    </div>
  );
};

export default Card;
