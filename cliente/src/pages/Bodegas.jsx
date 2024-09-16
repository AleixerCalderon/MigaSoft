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
import IconPro from "../assets/icon-bodega-v2.svg";
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

const Bodegas = () => {
  const [bodega, setBodega] = useState({
    nombre: "",
    descripcion: "",
    idTipoBodega: 0,
    habilitado: true
  });
  const [edit, setEdit] = useState([]);
  const [productId, setProductId] = useState([]);

  const handleEdit = (bodega) => {
    setBodega({
      nombre: bodega.nombre,
      descripcion: bodega.descripcion,
      idTipoBodega: bodega.idTipoBodega,     
      habilitado: bodega.habilitado     
    });
    setProductId(bodega.id);
    handleShow();
    setEdit(true);
  };

  const handleDelete = (bodega) => {   
    setProductId(bodega.id);   
    eliminarBodega(bodega.id);
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
      name: "Descripcion",
      selector: (row) => row.descripcion,
      sortable: true,
    },
    {
      name: "Tipos Bodega",
      selector: (row) => row.tiposBodega.nombre,
      sortable: true,
    },
   
    {
      name: "Habilitada",
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
    darBodegas();
    setEdit(false);
  
  }, []);
  const [bodegas, setBodegas] = useState([]);

  const handleChange = (e) => {
    setBodega({
      ...bodega,
      [e.target.name]: e.target.value,
    });
  };
  const darBodegas = async () => {
    try {
      const response = await Api.get("/Bodegas");
      setBodegas(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (edit) {
      editarBodega();
    } else {
      agregarBodega();
    }
    handleShowAlert();
  };

  const agregarBodega = async () => {
    try {
      const response = await Api.post("/bodegas/agregar", bodega);
      darBodegas();
      setBodega({             
        nombre: "",
        descripcion: "",
        idTipoBodega: 0,
        habilitado: true
      });
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  const editarBodega = async () => {
    try {
      const response = await Api.put("/bodegas/" + productId, bodega);
      darBodegas();
      setBodega({
        nombre: "",
        descripcion: "",
        idTipoBodega: 0,
        habilitado: true
      });
      handleClose();
      setProductId(0);
    } catch (error) {
      console.error(error);
    }
  };

  const eliminarBodega = async (id) => {
    try {
      const response = await Api.delete("/bodegas/" + id);
      darBodegas();
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
                  <img src={IconPro} alt="Icon Bodegas" /> <h2>Bodegas</h2>
                </div>
                <div className="titulo add-item" onClick={handleShow}>
                  <h4>Crear bodegas</h4>
                  <img src={IconAdd} alt="Icon agregar bodegas" />
                </div>
              </div>
              <DataTable
                columns={columns}
                data={bodegas}
                showGridlines              
                pagination
                paginationComponentOptions={paginationComponentOptions}
                customStyles={customStyles}
              />

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Crear Bodega</Modal.Title>
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
                        value={bodega.nombre}
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
                        value={bodega.descripcion}
                        onChange={handleChange}
                        required
                      />
                    </div>                  
                    <Form.Group>                                        
                      <Form.Control
                        as="select"
                        value={bodega.idTipoBodega}
                        onChange={(e)=> setBodega({...bodega, idTipoBodega:e.target.value})}
                      >
                        <option value="">Seleccionar Tipo</option>
                        
                            <option key="1" value="1">
                             Fija
                            </option>    
                            <option key="2" value="2">
                             Móvil
                            </option>                       
                          <option disabled>
                            No existe el lote
                          </option>                     
                      </Form.Control>
                   </Form.Group>
                   
                    <div>
                      <label class="form-check-label" for="flexCheckDefault">
                        Habilitar
                      </label>
                      <input
                        className="form-control"
                        type="checkbox"
                        name="habilitado"
                        checked={bodega.habilitado}
                        onChange={(e)=>
                        setBodega({
                          ...bodega,
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

export default Bodegas;
