import Header from "../componets/Header";
import Sidebar from "../componets/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";
import Footer from "../componets/Footer";

const Usuarios = () => {
  return (
    <>
      <Header />
      <Container fluid className="contenedor-p">
        <Row className="content-p">
          <Col lg={2} md={3} sm={3} xs={12} className="sidebar">
            <Sidebar />
          </Col>
          <Col lg={10} md={9} sm={9} xs={12}>
          <h1>Pantalla Usuarios</h1>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Usuarios;
