import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./components/HomePage";
import WeatherSearchContainer from "./components/WeatherSearchContainer";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <Router>
        <NavbarComponent />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/weathersearch" element={<WeatherSearchContainer />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
