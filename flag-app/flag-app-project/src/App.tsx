import { useState } from "react";
import { CardWrapper, Header, SearchFilterWrapper } from "./components";
import { useDarkMode } from "./hooks";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const { theme } = useDarkMode();

  const handleSearch = (searchText: string) => {
    setSearchInput(searchText);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <SearchFilterWrapper onSearch={handleSearch} />
        <CardWrapper searchInput={searchInput} />
      </ThemeProvider>
    </>
  );
}

export default App;
