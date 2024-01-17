import { useCountries } from "../hooks";
import Card from "./Card";
import ErrorMessage from "./ErrorMessage";

interface Props {
  searchInput: string;
}

export const CardWrapper = ({ searchInput }: Props) => {
  const { countries, error, isLoading } = useCountries(searchInput);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <ErrorMessage searchInput={searchInput} />;

  return (
    <div className="cards-layout">
      {countries.map((country) => (
        <Card country={country} key={country.cca3} />
      ))}
    </div>
  );
};
