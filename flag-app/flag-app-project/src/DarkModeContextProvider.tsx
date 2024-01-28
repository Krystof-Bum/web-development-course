import { FC, PropsWithChildren } from "react";
import { createTheme, PaletteMode } from "@mui/material";
import React from "react";
import { DarkModeContext } from "./context";

const DarkModeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = React.useState<PaletteMode>("light");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <DarkModeContext.Provider value={{ theme, mode, toggleColorMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
