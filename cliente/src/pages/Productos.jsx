import { useEffect, useState } from "react";
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
import "./responsive.css";
import IconPro from "../assets/icon-productos.svg";
import IconAdd from "../assets/icon-agregar.svg";
import Api from "../AxiosConfig";

const columns = [
  {
    name: "Id",
    selector: (row) => row.id,
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
    selector: (row) => row.PrecioUnitario,
    sortable: true,
  },
  {
    name: "Precio Venta",
    selector: (row) => row.PrecioVenta,
    sortable: true,
  }
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
  useEffect(()=>{
    darProductos();
    },[]);
  const [productos,setProductos] = useState([]);
  const darProductos= async()=>{
    try {
      const response = await Api.get('/producto/darProductos');
      setProductos(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit= async (e)=>{
    e.preventDefault();
    agregarProducto();
  }

  const agregarProducto= async()=>{
    try {
      const response = await Api.post('/producto/agregar', {
        
          "nombre": "string",
          "descripcion": "string",
          "peso": 0,
          "volumen": 0,
          "PrecioUnitario": 0,
          "PrecioVenta": 0
        
      });
      darProductos();
      // setProductos(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };
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
                data={productos}
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
                    <Row className="mb-1 mt-4 px-4">
                      <Form.Group as={Col} md="6" sm="12" controlId="validationCustom02" className="mt-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control required type="text" name="nombre" placeholder="Ingresa el nombre"/>
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md="6" sm="12" controlId="validationCustom01" className="mt-3">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control required type="text" name="descripcion" placeholder="Ingresa la descripción del producto"/>
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-1 mt-2 px-4">
                        <Form.Group as={Col} md="6" sm="12" controlId="validationCustom01" className="mt-3">
                            <Form.Label>Peso</Form.Label>
                            <Form.Control required type="number" name="peso" placeholder="Ingresa el peso del producto"/>
                            <Form.Control.Feedback>
                            Looks good!
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" sm="12" controlId="validationCustom01" className="mt-3">
                            <Form.Label>Volumen</Form.Label>
                            <Form.Control required type="number" name="volumen" placeholder="Ingresa el volumen" defaultValue="Mark"/>
                            <Form.Control.Feedback>
                            Looks good!
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-1 mt-2 px-4">
                        <Form.Group as={Col} md="6" sm="12" controlId="validationCustom01" className="mt-3">
                            <Form.Label>Precio unitario</Form.Label>
                            <Form.Control required type="number" name="PrecioUnitario" placeholder="Ingresa el precio x unidad" defaultValue="preciouni"/>
                            <Form.Control.Feedback>
                            Looks good!
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" sm="12" controlId="validationCustom01" className="mt-3">
                            <Form.Label>Precio Venta</Form.Label>
                            <Form.Control required type="number" name="PrecioVenta" placeholder="Ingresa el precio final" defaultValue="precioventa"/>
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
