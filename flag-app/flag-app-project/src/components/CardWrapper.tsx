import useCountries from "../hooks/useCountries";
import Card from "./Card";
import ErrorMessage from "./ErrorMessage";

interface Props {
  searchInput: string;
}

const CardWrapper = ({ searchInput }: Props) => {
  const { countries, error, isLoading } = useCountries(searchInput);

  if (isLoading) console.log(isLoading);
  if (error) return <ErrorMessage searchInput={searchInput} />;

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
