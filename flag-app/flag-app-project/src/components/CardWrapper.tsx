import { useCountries } from "../hooks";
import Card from "./Card";
import { CardSkeleton } from "./CardSkeleton";
import ErrorMessage from "./ErrorMessage";

interface Props {
  searchInput: string;
}

export const CardWrapper = ({ searchInput }: Props) => {
  const { countries, error, isLoading } = useCountries(searchInput);

  if (error) return <ErrorMessage searchInput={searchInput} />;

  return (
    <div className="cards-layout">
      {countries.map((country) => (
        <div key={country.cca3}>
          {isLoading && <CardSkeleton />}
          {!isLoading && <Card country={country} />}
        </div>
      ))}
    </div>
  );
};
