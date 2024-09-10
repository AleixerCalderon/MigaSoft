import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DataTable from "react-data-table-component"; //Libreria Datatables
import Header from "../componets/Header";
import Sidebar from "../componets/Sidebar";
import Footer from "../componets/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./responsive.css";
import IconPro from "../assets/icon-productos.svg";
import IconAdd from "../assets/icon-agregar.svg";

const columns = [
  {
    name: "Id",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Código",
    selector: (row) => row.codigo,
    sortable: true,
  },
  {
    name: "Nombre",
    selector: (row) => row.nombre,
    sortable: true,
  },
  {
    name: "Peso Gr.",
    selector: (row) => row.peso,
    sortable: true,
  },
  {
    name: "Volumen",
    selector: (row) => row.volumen,
    sortable: true,
  },
  {
    name: "Descripción",
    selector: (row) => row.descripcion,
    sortable: true,
  },
  {
    name: "Precio Unitario",
    selector: (row) => row.preciouni,
    sortable: true,
  },
  {
    name: "Precio Venta",
    selector: (row) => row.precioventa,
    sortable: true,
  },
  {
    name: "Estado",
    selector: (row) => row.editar,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    codigo: "B22726",
    nombre: "Pan Perro Cluster",
    peso: "830",
    volumen: "Ajonjolí",
    descripcion: "no aplica",
    preciouni: "100",
    precioventa: "habilitado",
    editar: "editar",
  },
  {
    id: 2,
    codigo: "B9685",
    nombre: "Pan Hamburguesa",
    peso: "850",
    volumen: "Ajonjolí",
    descripcion: "5",
    preciouni: "2000",
    precioventa: "habilitado",
    editar: "editar",
  },
  {
    id: 3,
    codigo: "B9466",
    nombre: "Pan Hamburguesa",
    peso: "850",
    volumen: "Artesanal",
    descripcion: "5",
    preciouni: "800",
    precioventa: "habilitado",
    editar: "editar",
  },
  {
    id: 4,
    codigo: "B501238",
    nombre: "Pan Hamburguesa Guadalupe",
    peso: "625",
    volumen: "Ajonjolí",
    descripcion: "5",
    preciouni: "3000",
    precioventa: "habilitado",
    editar: "editar",
  },
  {
    id: 5,
    codigo: "B505354",
    nombre: "Pan Tajado",
    peso: "730",
    volumen: "Tradicional",
    descripcion: "no aplica",
    preciouni: "80",
    precioventa: "habilitado",
    editar: "editar",
  },
  {
    id: 6,
    codigo: "B9673",
    nombre: "Pan Hamburguesa Brioche",
    peso: "850",
    volumen: "Brillo",
    descripcion: "5",
    preciouni: "No Aplica",
    precioventa: "inhabilitado",
    editar: "editar",
  },
  {
    id: 7,
    codigo: "B22726",
    nombre: "Pan Perro Cluster",
    peso: "830",
    volumen: "Ajonjolí",
    descripcion: "no aplica",
    preciouni: "100",
    precioventa: "inhabilitado",
    editar: "editar",
  },
  {
    id: 8,
    codigo: "B22726",
    nombre: "Pan Perro Cluster",
    peso: "830",
    volumen: "Ajonjolí",
    descripcion: "no aplica",
    preciouni: "100",
    precioventa: "inhabilitado",
    editar: "editar",
  },
  {
    id: 9,
    codigo: "B22726",
    nombre: "Pan Perro Cluster",
    peso: "830",
    volumen: "Ajonjolí",
    descripcion: "no aplica",
    preciouni: "100",
    precioventa: "inhabilitado",
    editar: "editar",
  },
  {
    id: 10,
    codigo: "B22726",
    nombre: "Pan Perro Cluster",
    peso: "830",
    volumen: "Ajonjolí",
    descripcion: "no aplica",
    preciouni: "100",
    precioventa: "inhabilitado",
    editar: "editar",
  },
];
const paginationComponentOptions = {
  rowsPerPageText: "Filas por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

const customStyles = {
  rows: {
    style: {
      minHeight: "60px",
      fontSize: "1em", // override the row height
    },
  },
  headCells: {
    style: {
      fontSize: "1.1em",
      fontWeight: "bold",
      backgroundColor: "#4F4F4F",
      color: "#ffffff",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
      borderStyle: "solid",
      borderColor: "#E5E5E5",
      borderWidth: "1px",
    },
  },
};

const Productos = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <Header />

      <Container fluid className="contenedor-p">
        <Row className="content-p">
          <Col lg={2} md={4} sm={12} xs={12} className="sidebar">
            <Sidebar />
          </Col>

          <Col lg={10} md={8} sm={12} xs={12}>
            <div className="contenido-tablas">
              <div className="header-table">
                <div className="titulo">
                  <img src={IconPro} alt="Icon Productos" /> <h2>Productos</h2>
                </div>
                <div className="titulo add-item" onClick={handleShow}>
                  <h4>Crear productos</h4>
                  <img src={IconAdd} alt="Icon agregar productos" />
                </div>
              </div>
              <DataTable
                columns={columns}
                data={data}
                showGridlines
                selectableRows
                pagination
                paginationComponentOptions={paginationComponentOptions}
                customStyles={customStyles}
              />

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Crear Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row className="mb-2 mt-4">
                      <Form.Group as={Col} md="6" controlId="validationCustom01" className="px-4">
                        <Form.Label>Código de producto</Form.Label>
                        <Form.Control required type="number" placeholder="Ingresa el código del producto" defaultValue="Mark"/>
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md="6" controlId="validationCustom02" >
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control required type="text" placeholder="Ingresa el nombre" defaultValue="Otto"/>
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-2 mt-4">
                        <Form.Group as={Col} md="6" controlId="validationCustom01" className="px-4">
                            <Form.Label>Peso</Form.Label>
                            <Form.Control required type="number" placeholder="Ingresa el peso del producto" defaultValue="Mark"/>
                            <Form.Control.Feedback>
                            Looks good!
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>Volumen</Form.Label>
                            <Form.Control required type="number" placeholder="Ingresa el volumen" defaultValue="Mark"/>
                            <Form.Control.Feedback>
                            Looks good!
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-2 mt-4">
                        <Form.Group as={Col} md="6" controlId="validationCustom01" className="px-4">
                            <Form.Label>Precio unitario</Form.Label>
                            <Form.Control required type="number" placeholder="Ingresa el precio x unidad" defaultValue="preciouni"/>
                            <Form.Control.Feedback>
                            Looks good!
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>Precio Venta</Form.Label>
                            <Form.Control required type="number" placeholder="Ingresa el precio final" defaultValue="precioventa"/>
                            <Form.Control.Feedback>
                            Looks good!
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-6 mt-4 ps-3">
                        <Button type="submit">Guardar</Button>
                    </Form.Group>
                    
                  </Form>
                </Modal.Body>
              </Modal>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Productos;
