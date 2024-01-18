import { createTheme, Theme } from "@mui/material";
import React from "react";

interface DarkModeContextType {
  mode: string;
  toggleColorMode: () => void;
  theme: Theme;
}

export const DarkModeContext = React.createContext<DarkModeContextType>({
  mode: "light",
  toggleColorMode: () => {},
  theme: createTheme(),
});
