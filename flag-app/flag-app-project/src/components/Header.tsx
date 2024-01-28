import { useDarkMode } from "../hooks";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";

export const Header = () => {
  const { toggleColorMode, mode } = useDarkMode();
  return (
    <>
      <div className="flex justify-between items-center mt-5 mb-5">
        <h1 className="text-2xl font-extrabold">Where in the world?</h1>
        <div className="flex items-center">
          <IconButton
            sx={{ ml: 1 }}
            color="inherit"
            onClick={() => toggleColorMode()}
          >
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <h2 className="font-semibold">Dark Mode</h2>
        </div>
      </div>
      <hr className="ml-[-100px] mr-[-100px] h-10 border-0 shadow-inner" />
    </>
  );
};
