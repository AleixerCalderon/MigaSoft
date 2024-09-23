import { Link } from "react-router-dom";
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/logo-migasoft.png";
import icon1 from "../assets/icon-user.svg";
import icon2 from "../assets/icon-logout.svg";
import { useEffect, useState } from "react";

const Header = () => {
  function logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    window.location.href = '/';
  }
  const [usuario, setUsuario]=useState([]) ;
  useEffect(()=>{
    setUsuario(localStorage.getItem("usuario"));
  }, []);
  return (
    <header className="header">
      <div className="brand">
        <Link className="link" to="/">
          <img src={logo} alt="MigaSoft" />
        </Link>
      </div>
      <nav>
        <ul className="link-list">
          <li>
            <Link className="link" to="/profile">
              <img src={icon1} alt="User" /> Hola, {usuario}
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              <img src={icon2} alt="User" /><a href="" onClick={logout}>Cerrar sesión</a>
            </Link>
          </li>
        </ul>
        {["sm"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="menu-mobile "
          >
            <Container fluid>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Menu Principal
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Link to="/home">Inicio</Link>
                    <Link to="/inventario">Inventario</Link>
                    <Link to="/bodegas">Bodega</Link>
                    <Link to="/lotes">Lotes</Link>
                    <Link to="/productos">Productos</Link>
                    <Link to="/traslados">Traslados</Link>
                    <Link to="/usuarios">Usuarios</Link>
                    <Link to="/reportes">Reportes</Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </nav>
    </header>
  );
};

export default Header;
