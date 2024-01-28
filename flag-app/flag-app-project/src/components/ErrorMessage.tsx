import { useCountries } from "../hooks";

const ErrorMessage = () => {
  const { searchInput } = useCountries();
  return (
    <p>
      No country matched with:
      <span className="font-semibold">{searchInput}</span>
    </p>
  );
};

export default ErrorMessage;
