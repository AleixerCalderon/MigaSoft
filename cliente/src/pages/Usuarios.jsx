import Content from "../componets/Content";
import Header from "../componets/Header";
import Sidebar from "../componets/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";

const Usuarios = () => {
  return (
    <>
      <Header />
      <Container fluid className="contenedor-p">
        <Row className="content-p">
          <Col lg={2}>
            <Sidebar/>
          </Col>
          <Col lg={10}>
            <Content/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Usuarios;
