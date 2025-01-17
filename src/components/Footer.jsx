import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p>
              © 2025 Meteo-App Srl - Creata da Giuseppe Pomo 👾
              <br />
              <a href="#">Privacy e Cookie Policy</a> -{" "}
              <a href="#">Termini e Condizioni</a> |{" "}
              <a href="#">Consensi GDPR</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
