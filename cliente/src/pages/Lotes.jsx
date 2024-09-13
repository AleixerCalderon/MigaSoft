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
import IconPro from "../assets/icon-lotes.svg";
import IconAdd from "../assets/icon-agregar.svg";
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

const Lotes = () => {
  const [lote, setLote] = useState([]);
  const [edit, setEdit] = useState([]);
  const [productId, setProductId] = useState([]);

  const handleEdit = (lote) => {
    setLote({
      nombre: lote.nombre,
      descripcion: lote.descripcion,
      peso: lote.peso,
      volumen: lote.volumen,
      PrecioUnitario: lote.PrecioUnitario,
      PrecioVenta: lote.PrecioVenta,
      habilitado: lote.habilitado,
    });
    setProductId(lote.id);
    handleShow();
    setEdit(true);
  };

  const handleDelete = (lote) => {
    setProductId(lote.id);
    eliminarLote();
  };

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Id Producto",
      selector: (row) => row.idProducto,
      sortable: true,
    },
    {
      name: "Fecha Entrada",
      selector: (row) => row.FechaEntrada,
      sortable: true,
    },
    {
      name: "Fecha Vencimiento",
      selector: (row) => row.FechaVencimiento,
      sortable: true,
    },
    {
      name: "Código Lote",
      selector: (row) => row.CodigoLote,
      sortable: true,
    },
    {
      name: "Codigo Barras",
      selector: (row) => row.CodigoBarras,
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
    // {
    //   name: "Habilitado",
    //   selector: (row) => row.habilitado,
    //   sortable: true,
    // },
  ];
  useEffect(() => {
    darLotes();
    setEdit(false);
  }, []);
  const [lotes, setLotes] = useState([]);

  const handleChange = (e) => {
    setLote({
      ...lote,
      [e.target.name]: e.target.value,
    });
  };
  const darLotes = async () => {
    try {
      const response = await Api.get("/lote/darLotes");
      setLotes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (edit) {
      editarLote();
    } else {
      agregarLote();
    }
    handleShowAlert();
  };

  const agregarLote = async () => {
    try {
      const response = await Api.post("/lote/agregar", lote);
      darLotes();
      setLote({
        idProducto:"",
        FechaEntrada: "",
        FechaVencimiento: "",
        CodigoLote: "",
        CodigoBarras: "",
        createdAt: "",
        updatedAt: ""
      },);
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  const editarLote = async () => {
    try {
      const response = await Api.put("/lote/" + productId, lote);
      darLotes();
      setLote({
        idProducto:"",
        FechaEntrada: "",
        FechaVencimiento: "",
        CodigoLote: "",
        CodigoBarras: "",
        createdAt: "",
        updatedAt: ""
      });
      handleClose();
      setProductId(null);
    } catch (error) {
      console.error(error);
    }
  };

  const eliminarLote = async () => {
    try {
      const response = await Api.delete("/lote/" + productId);
      darLotes();
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
  const handleShowAlert = ()=>{
    setShowAlert(true);
    setTimeout(()=>{
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
                  <img src={IconPro} alt="Icon Lotes" /> <h2>Lotes</h2>
                </div>
                <div className="titulo add-item" onClick={handleShow}>
                  <h4>Crear lotes</h4>
                  <img src={IconAdd} alt="Icon agregar lotes" />
                </div>
              </div>
              <DataTable
                columns={columns}
                data={lotes}
                showGridlines
                selectableRows
                pagination
                paginationComponentOptions={paginationComponentOptions}
                customStyles={customStyles}
              />

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Crear Lote</Modal.Title>
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
                        value={lote.nombre}
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
                        value={lote.descripcion}
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
                        value={lote.peso}
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
                        value={lote.volumen}
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
                        value={lote.PrecioUnitario}
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
                        value={lote.PrecioVenta}
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
                        value={lote.habilitado}
                        onChange={handleChange}
                        class="form-check-input"/>
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
          { showAlert && (
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

export default Lotes;
