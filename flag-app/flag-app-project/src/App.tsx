import { useState } from "react";
import CardWrapper from "./components/CardWrapper";
import Header from "./components/Header";
import SearchFilterWrapper from "./components/SearchFilterWrapper";

function App() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <Header />
      <SearchFilterWrapper
        onSearch={(searchText: string) => setSearchInput(searchText)}
      />

      <CardWrapper searchInput={searchInput} />
    </>
  );
}

export default App;
