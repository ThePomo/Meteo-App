import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/552448.png";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand href="/" className="navbar-brand d-flex align-items-center">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <span className="ml-2">Meteo App</span>
      </Navbar.Brand>
      <Nav className="navbar-nav">
        <Nav.Link as={Link} to="/weathersearch" className="nav-link">
          Cerca la tua città
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
