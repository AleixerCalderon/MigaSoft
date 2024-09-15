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

import IconCheck from "../assets/task.svg";
import Iconblock from "../assets/block.svg";

import Api from "../AxiosConfig";
import Alert from "react-bootstrap/Alert";

const paginationComponentOptions = {
  rowsPerPageText: "Filas por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

const customStyles = {
  rows: {
    style: {
      minHeight: "30px",      
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
      paddingRight: "3px",
      borderStyle: "solid",
      borderColor: "#E5E5E5",
      borderWidth: "1px",
    },
  },
};

const Productos = () => {
  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    peso: "",
    volumen: "",
    PrecioUnitario: "",
    PrecioVenta: "",
    habilitado: true
  });
  const [edit, setEdit] = useState([]);
  const [productId, setProductId] = useState([]);

  const handleEdit = (producto) => {
    setProducto({
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      peso: producto.peso,
      volumen: producto.volumen,
      PrecioUnitario: producto.PrecioUnitario,
      PrecioVenta: producto.PrecioVenta,
      habilitado: producto.habilitado,
    });
    setProductId(producto.id);
    handleShow();
    setEdit(true);
  };

  const handleDelete = (producto) => {   
    setProductId(producto.id);   
    eliminarProducto(producto.id);
  };

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
    },
    {
      name: "Habilitado",
      selector: (row) => {        
        return row.habilitado?  <span> <img className="aab-icon text-success" src={IconCheck} alt="Check" /></span>: <span><img className="aab-icon" src={Iconblock} alt="Not Check" /></span>;
      },
      sortable: true,
    },
    {
      name: "Editar",
      cell: (row) => (
        <button className="btn btn-primary" onClick={() => handleEdit(row)}>
          Editar
        </button>
      ),
      button: true,
    },
    {
      name: "Eliminar",
      cell: (row) => (
        <button className="btn btn-danger" onClick={() => handleDelete(row)}>
          Eliminar
        </button>
      ),
      button: true,
    },    
  ];
  useEffect(() => {
    darProductos();
    setEdit(false);
  
  }, []);
  const [productos, setProductos] = useState([]);

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };
  const darProductos = async () => {
    try {
      const response = await Api.get("/producto/darProductos");
      setProductos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (edit) {
      editarProducto();
    } else {
      agregarProducto();
    }
    handleShowAlert();
  };

  const agregarProducto = async () => {
    try {
      const response = await Api.post("/producto/agregar", producto);
      darProductos();
      setProducto({
        nombre: "",
        descripcion: "",
        peso: "",
        volumen: "",
        PrecioUnitario: "",
        PrecioVenta: "",
        habilitado: true
      });
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  const editarProducto = async () => {
    try {
      const response = await Api.put("/producto/" + productId, producto);
      darProductos();
      setProducto({
        nombre: "",
        descripcion: "",
        peso: "",
        volumen: "",
        PrecioUnitario: "",
        PrecioVenta: "",
        habilitado: true
      });
      handleClose();
      setProductId(0);
    } catch (error) {
      console.error(error);
    }
  };

  const eliminarProducto = async (id) => {
    try {
      const response = await Api.delete("/producto/" + id);
      darProductos();
      handleShowAlert();
    } catch (error) {
      console.error(error);
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  }
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
                  <Form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="" className="form-label">
                        Nombre
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="nombre"
                        value={producto.nombre}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="form-label">
                        Descripcion
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="descripcion"
                        value={producto.descripcion}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="form-label">
                        Peso
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="peso"
                        value={producto.peso}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="form-label">
                        Volumen
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="volumen"
                        value={producto.volumen}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="form-label">
                        Precio Unitario
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="PrecioUnitario"
                        value={producto.PrecioUnitario}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="form-label">
                        Precio Venta
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="PrecioVenta"
                        value={producto.PrecioVenta}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label class="form-check-label" for="flexCheckDefault">
                        Habilitar
                      </label>
                      <input
                        className="form-control"
                        type="checkbox"
                        name="habilitado"
                        checked={producto.habilitado}
                        onChange={(e)=>
                        setProducto({
                          ...producto,
                          habilitado: e.target.checked,
                        })
                        }
                        class="form-check-input" />
                    </div>
                    <div>
                      <button type="submit" className="btn btn-success">
                        Guardar
                      </button>
                    </div>
                  </Form>
                </Modal.Body>
              </Modal>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {showAlert && (
              <Alert key='success' variant='success' onClose={() => setShowAlert(false)}>
                La consulta se ha realizado exitosamente
              </Alert>
            )
            }
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Productos;
