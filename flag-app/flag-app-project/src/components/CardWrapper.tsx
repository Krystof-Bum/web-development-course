import useCountries from "../hooks/useCountries";
import Card from "./Card";

interface Props {
  searchInput: string;
}

const CardWrapper = ({ searchInput }: Props) => {
  const { countries, error, isLoading } = useCountries(searchInput);
  // todo
  if (isLoading) console.log(isLoading);
  if (error) console.log(error);

  return (
    <>
      <div className="cards-layout">
        {countries.map((country) => (
          <Card country={country} key={country.cca3} />
        ))}
      </div>
    </>
  );
};

export default CardWrapper;
