import { RiArrowDropDownLine } from "react-icons/ri";
import { useDarkMode } from "../hooks";

export const Filter = () => {
  const { mode } = useDarkMode();
  return (
    <div className="relative">
      <select
        // value={value}
        // onChange={onChange}
        className={`pl-5 pt-5 pb-5 bg-white w-56 rounded-lg shadow-sm appearance-none ${
          mode === "dark" ? "bg-darkModeBlack shadow-white" : "bg-white"
        }`}
      >
        {/* <option value={option.value}> */}
        <option>Filter by Region</option>
        <option>Africe</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <RiArrowDropDownLine size={22} />
      </div>
    </div>
  );
};
