import { useCountries, useDarkMode } from "../hooks";
import { RiArrowDropDownLine } from "react-icons/ri";

export const Filter = () => {
  const { mode } = useDarkMode();
  const { filterValue, handleFilter } = useCountries();

  const baseClassName =
    "pl-5 pt-5 pb-5 bg-white w-56 rounded-lg shadow-sm appearance-none";
  const darkModeClassName =
    mode === "dark" ? "bg-darkModeBlack shadow-white" : "bg-white";

  const regions = [
    { value: "", label: "Filter by Region" },
    { value: "africa", label: "Africa" },
    { value: "america", label: "America" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];

  return (
    <div className="relative">
      <select
        value={filterValue}
        onChange={(e) => handleFilter(e.target.value)}
        className={`${baseClassName} ${darkModeClassName}`}
      >
        {regions.map((region) => (
          <option key={region.label} value={region.value}>
            {region.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <RiArrowDropDownLine size={22} />
      </div>
    </div>
  );
};
