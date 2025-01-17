import "react";
import { Navbar } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="mx-auto">Meteo App</Navbar.Brand>
    </Navbar>
  );
};

export default NavbarComponent;
