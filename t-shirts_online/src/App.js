import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { SearchBar } from "./components/Search/SearchBar";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <MainRoutes />
    </div>
  );
}

export default App;
