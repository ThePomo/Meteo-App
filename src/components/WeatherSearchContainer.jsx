import { useState } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import WeatherSearch from "./WeatherSearch";

const WeatherSearchContainer = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  const fetchWeather = async (city) => {
    const API_KEY = "51f20fe9f36e06815d5dcd8481de9130";
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        setError(true);
        setWeatherData(null);
        return;
      }
      const data = await response.json();
      if (data.list.length === 0) {
        setError(true);
        setWeatherData(null);
      } else {
        setWeatherData(data);
        setError(false);
      }
    } catch (error) {
      setError(true);
      setWeatherData(null);
    }
  };

  const handleSearch = (city) => {
    if (city.trim() === "") {
      setWeatherData(null);
      return;
    }
    fetchWeather(city);
  };

  const resetWeatherData = () => {
    setWeatherData(null);
    setError(false);
  };

  return (
    <Container className="mt-5">
      <WeatherSearch
        city={city}
        setCity={setCity}
        onSearch={handleSearch}
        resetWeatherData={resetWeatherData}
      />
      {error && (
        <div className="text-center">
          <p>Città non trovata. Prova con un altro nome.</p>
        </div>
      )}
      {weatherData && !error && (
        <Row>
          {weatherData.list.slice(0, 5).map((forecast, index) => (
            <Col md={4} key={index}>
              <Card className="mb-4">
                <Card.Body className="text-center">
                  <Card.Title>{city}</Card.Title>
                  <i
                    className={`card-icon ${getWeatherIcon(
                      forecast.weather[0].description
                    )}`}
                  ></i>
                  <Card.Text className="card-text">
                    <strong>Temperatura:</strong>{" "}
                    {Math.ceil(forecast.main.temp)}°C
                  </Card.Text>
                  <Card.Text className="card-subtext">
                    <strong>Condizione:</strong>{" "}
                    {forecast.weather[0].description}
                  </Card.Text>
                  <Card.Text className="card-subtext">
                    <strong>Vento:</strong> {forecast.wind.speed} m/s
                  </Card.Text>
                  <Card.Text className="card-subtext">
                    <strong>Umidità:</strong> {forecast.main.humidity}%
                  </Card.Text>
                  <Card.Text className="card-subtext">
                    <strong>Pressione:</strong> {forecast.main.pressure} hPa
                  </Card.Text>
                  <Card.Text className="card-subtext">
                    <strong>Visibilità:</strong> {forecast.visibility / 1000} km
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

const getWeatherIcon = (description) => {
  switch (description) {
    case "clear sky":
      return "bi bi-sun";
    case "few clouds":
    case "scattered clouds":
      return "bi bi-cloud-sun";
    case "broken clouds":
      return "bi bi-cloud";
    case "shower rain":
    case "rain":
      return "bi bi-cloud-rain";
    case "thunderstorm":
      return "bi bi-cloud-lightning";
    case "snow":
      return "bi bi-snow";
    case "mist":
    case "haze":
      return "bi bi-cloud-fog";
    default:
      return "bi bi-cloud";
  }
};

export default WeatherSearchContainer;
