import { useState } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

const WeatherSearch = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(city);
    }
  };

  return (
    <Row>
      <Col md={6} className="mx-auto">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Inserisci città"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-primary w-100" onClick={handleSearch}>
          Cerca
        </button>
      </Col>
    </Row>
  );
};

WeatherSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default WeatherSearch;
