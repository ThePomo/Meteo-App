import { Row, Col, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const WeatherSearch = ({ city, setCity, onSearch, resetWeatherData }) => {
  const handleChange = (e) => {
    const newCity = e.target.value;
    setCity(newCity);

    if (newCity === "") {
      resetWeatherData();
    } else {
      onSearch(newCity);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(city);
    }
  };

  const handleClick = () => {
    onSearch(city);
  };

  return (
    <Row className="justify-content-center">
      <Col md={6} className="mx-auto">
        <div className="input-group">
          <Form.Control
            type="text"
            placeholder="Inserisci città"
            value={city}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            className="form-control-lg rounded-3 shadow-sm"
          />
          <button
            className="btn btn-outline-secondary rounded-3"
            onClick={handleClick}
            style={{
              cursor: "pointer",
              padding: "0.5rem",
            }}
          >
            <FaSearch size={20} />
          </button>
        </div>
      </Col>
    </Row>
  );
};

export default WeatherSearch;
