import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

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

const HomePage = () => {
  const [weatherData, setWeatherData] = useState([]);

  const cities = ["Tokyo", "New York", "London", "Rome", "Paris", "Beijing"];

  const fetchWeather = async (city) => {
    const API_KEY = "51f20fe9f36e06815d5dcd8481de9130";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const getWeatherData = async () => {
      const data = await Promise.all(cities.map((city) => fetchWeather(city)));
      setWeatherData(data);
    };

    getWeatherData();
  }, []);

  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col className="text-center">
          <h1>Benvenuto nella mia app di Meteo</h1>
        </Col>
      </Row>
      <Row>
        {weatherData.length > 0 &&
          weatherData.map((cityData, index) => (
            <Col md={4} key={index}>
              <Card
                className="mb-4"
                style={{
                  borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#f5f5f5",
                  padding: "15px",
                }}
              >
                <Card.Body className="text-center">
                  <Card.Title
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      color: "#333",
                    }}
                  >
                    {cities[index]}
                  </Card.Title>

                  <i
                    className={`${getWeatherIcon(
                      cityData.list[0].weather[0].description
                    )}`}
                    style={{
                      fontSize: "50px",
                      marginBottom: "15px",
                      color: "#ffcc00",
                    }}
                  ></i>
                  <Card.Text
                    style={{
                      fontSize: "1.25rem",
                      color: "#333",
                    }}
                  >
                    <strong>Temperatura:</strong>{" "}
                    {Math.ceil(cityData.list[0].main.temp)}°C
                  </Card.Text>
                  <Card.Text
                    style={{
                      fontSize: "1.1rem",
                      color: "#888",
                    }}
                  >
                    <strong>Condizione:</strong>{" "}
                    {cityData.list[0].weather[0].description}
                  </Card.Text>
                  <Card.Text
                    style={{
                      fontSize: "1.1rem",
                      color: "#888",
                    }}
                  >
                    <strong>Vento:</strong> {cityData.list[0].wind.speed} m/s
                  </Card.Text>
                  <Card.Text
                    style={{
                      fontSize: "1.1rem",
                      color: "#888",
                    }}
                  >
                    <strong>Umidità:</strong> {cityData.list[0].main.humidity}%
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default HomePage;
