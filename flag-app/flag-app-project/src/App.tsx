import { useState } from "react";
import { CardWrapper, Header, SearchFilterWrapper } from "./components";

function App() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (searchText: string) => {
    setSearchInput(searchText);
  };

  return (
    <>
      <Header />
      <SearchFilterWrapper onSearch={handleSearch} />
      <CardWrapper searchInput={searchInput} />
    </>
  );
}

export default App;
