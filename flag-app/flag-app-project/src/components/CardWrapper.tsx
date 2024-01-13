import useCountries from "../hooks/useCountries";
import Card from "./Card";

const CardWrapper = () => {
  const { countries, error, isLoading } = useCountries();

  // todo
  if (isLoading) console.log(isLoading);
  if (error) console.log(error);

  return (
    <>
      <div className="cards-layout">
        {countries.map((country) => (
          <Card country={country} key={country.capital} />
        ))}
      </div>
    </>
  );
};

export default CardWrapper;
