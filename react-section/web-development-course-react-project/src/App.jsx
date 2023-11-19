import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import notes from "./notes";

function App() {
  return (
    <>
      <Header />
      {notes.map((n) => (
        <Note key={n.key} title={n.title} content={n.content} />
      ))}
      <Footer />
    </>
  );
}

export default App;
