import Header from "../componets/Header";
import Sidebar from "../componets/Sidebar";
import Footer from "../componets/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

const Inventario = () => {
  return (
    <>
      <Header />
      <Container fluid className="contenedor-p">
        <Row className="content-p">
          <Col lg={2} md={3} sm={3} xs={12} className="sidebar">
            <Sidebar />
          </Col>
          <Col lg={10} md={9} sm={9} xs={12}>
          <h1>Pantalla Inventario</h1>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Inventario;
