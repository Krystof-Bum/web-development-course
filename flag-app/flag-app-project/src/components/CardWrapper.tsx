import useCountries from "../hooks/useCountries";
import Card from "./Card";

const CardWrapper = () => {
  const { countries, error, isLoading } = useCountries();
  console.log(countries);
  return <Card />;
};

export default CardWrapper;
