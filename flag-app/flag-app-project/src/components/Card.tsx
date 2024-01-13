import CardItem from "./CardItem";
import { Country } from "./interfaces/Country";

interface Props {
  country: Country;
}

const Card = ({ country }: Props) => {
  return (
    <>
      <div className="w-64 rounded-md shadow-md overflow-hidden">
        <div className="">
          <img src={country.flags.png} className="w-full h-[170px]" />
        </div>
        <div className="pl-5 pt-5 pb-10">
          <h1 className=" font-bold pb-4">{country.name.official}</h1>
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
    </>
  );
};

export default Card;
