import { useState } from "react";

import CountriesContextProvider from "./CountriesContextProvider";
import {
  CardDetail,
  CardWrapper,
  Header,
  SearchFilterWrapper,
} from "./components";
import { useDarkMode } from "./hooks";
import { CardDetailType, Country } from "./interfaces";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

function App() {
  const { theme } = useDarkMode();

  const [cardDetail, setCardDetail] = useState<CardDetailType>(
    {} as CardDetailType
  );
  const handleCardClick = (country: Country) => {
    setCardDetail({ detailCountry: country, isOpened: true });
  };

  const handleClickBack = () => {
    setCardDetail((prev) => ({ ...prev, isOpened: false }));
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <CountriesContextProvider>
          {!cardDetail.isOpened && (
            <>
              <SearchFilterWrapper />
              <CardWrapper handleCardClick={handleCardClick} />
            </>
          )}
          {cardDetail.isOpened && (
            <CardDetail
              handleClickBack={handleClickBack}
              country={cardDetail.detailCountry}
            />
          )}
        </CountriesContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
