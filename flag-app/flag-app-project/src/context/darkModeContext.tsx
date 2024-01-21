import React from "react";
import { createTheme, Theme } from "@mui/material";

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
