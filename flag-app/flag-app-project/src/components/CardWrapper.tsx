import { useCountries } from "../hooks";
import { Country } from "../interfaces";
import Card from "./Card";
import { CardSkeleton } from "./CardSkeleton";
import ErrorMessage from "./ErrorMessage";

interface Props {
  handleCardClick: (country: Country) => void;
}

export const CardWrapper = ({ handleCardClick }: Props) => {
  const { countries, error, isLoading } = useCountries();

  if (error) return <ErrorMessage />;
  if (!countries) return;

  return (
    <div className="cards-layout">
      {countries.map((country) => (
        <div key={country.cca3}>
          {isLoading && <CardSkeleton />}
          {!isLoading && (
            <Card country={country} handleCardClick={handleCardClick} />
          )}
        </div>
      ))}
    </div>
  );
};
