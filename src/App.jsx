import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./components/Homepage";
import WeatherSearchContainer from "./components/WeatherSearchContainer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/weathersearch" element={<WeatherSearchContainer />} />
      </Routes>
    </Router>
  );
};

export default App;
