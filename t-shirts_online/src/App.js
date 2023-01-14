import { useLocation } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { SearchBar } from "./components/Search/SearchBar";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      {location.pathname === "/" ? <SearchBar /> : null}
      <MainRoutes />
    </div>
  );
}

export default App;
