import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/" className="ml-3">
        Meteo App
      </Navbar.Brand>
      <Nav className="ml-auto mr-3">
        <Nav.Link as={Link} to="/weathersearch" className="mr-3">
          Cerca la tua città
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
