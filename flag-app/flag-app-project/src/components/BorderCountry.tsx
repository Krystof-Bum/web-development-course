import { useDarkMode } from "../hooks";
import { Country } from "../interfaces";

interface Props {
  country: Country;
}

export const BorderCountry = ({ country }: Props) => {
  const { mode } = useDarkMode();
  const { borders } = country;

  if (!borders) return <p>Country has no borders</p>;

  return (
    <>
      {borders.map((border) => (
        <div
          className={`border shadow-md px-6 ${
            mode === "dark" ? "shadow-white" : ""
          }`}
          key={border}
        >
          {border}
        </div>
      ))}
    </>
  );
};
