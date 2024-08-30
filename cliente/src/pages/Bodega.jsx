import Header from "../componets/Header";
import Content from "../componets/Content";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "../componets/Sidebar";

const Bodega = () => {
  return (
    <>
      <Header />
      <Container fluid className="contenedor-p">
        <Row className="content-p">
          <Col lg={2}>
            <Sidebar />
          </Col>
          <Col lg={10}>
            <Content />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Bodega;
