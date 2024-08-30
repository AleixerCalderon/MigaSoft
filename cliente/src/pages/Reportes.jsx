import Content from "../componets/Content";
import Header from "../componets/Header";
import Sidebar from "../componets/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Reportes = () => {
  return (
    <>
      <Header />
      <Container fluid className="contenedor-p">
        <Row className="content-p">
          <Col lg={2}>
            <Sidebar />
          </Col>
          <Col lg={10}>
          <h1>Esto es Reportes</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Reportes;
