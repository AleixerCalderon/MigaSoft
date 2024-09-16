import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DataTable from "react-data-table-component"; // Librería Datatables
import Header from "../componets/Header";
import Sidebar from "../componets/Sidebar";
import Footer from "../componets/Footer";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Api from "../AxiosConfig";
import Alert from "react-bootstrap/Alert";

const paginationComponentOptions = {
  rowsPerPageText: "Filas por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

const Traslados = () => {
  const [cantidadT, setCantidadT] = useState([1]);
  const [traslados, setTraslados] = useState([]);
  const [bodegas, setBodegas] = useState([]);
  const [lotes, setLotes] = useState([]);
  const [nuevoTraslado, setNuevoTraslado] = useState({
    idBodegaOrigen: "",
    idBodegaDestino: "",
    descripcion: "",      
    detalles: [
      {
        idLote: 0,
        cantidad: 1
      }
    ]
  });

  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  useEffect(()=>{    
  },[cantidadT,nuevoTraslado]);
  useEffect(() => {
    darTraslados();
    darBodegas();
  }, []);

  const darTraslados = async () => {
    try {
      const response = await Api.get("/traslado/darTraslados");
      setTraslados(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const darBodegas = async () => {
    try {
      const response = await Api.get("/bodegas");
      setBodegas(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCrearTraslado = async () => {
    try {
      await Api.post("/traslado/agregar", nuevoTraslado);
      darTraslados();
      setShowModal(false);
      setNuevoTraslado({
        idBodegaOrigen: "",
    idBodegaDestino: "",
    descripcion: "",      
    detalles: [
      {
        idLote: 0,
        cantidad: 1
      }
    ]
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleConfirmarTraslado = async (trasladoId) => {
    try {
      await Api.get(`/traslado/confirmarTraslado/${trasladoId}`);
      darTraslados();
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBuscarLote = async (searchTerm) => {
    try {
      const response = await Api.get(`/lote/nombre/${searchTerm}`);
      setLotes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const columns = [
    {
      name: "Id Traslado",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Bodega Origen",
      selector: (row) => row.BodegaOrigen.nombre,
      sortable: true,
    },
    {
      name: "Bodega Destino",
      selector: (row) => row.BodegaDestino.nombre,
      sortable: true,
    },
    {
      name: "Descripción",
      selector: (row) => row.descripcion,
      sortable: true,
    },
    {
      name: "Fecha Traslado",
      selector: (row) => row.fechaTraslado,
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => row.estado,
      sortable: true,
    },
    {
      name: "Confirmar Traslado",
     
      cell: (row) => (
        row.estado !== "Confirmado"?(
        <button
          className="btn btn-success"
          onClick={() => handleConfirmarTraslado(row.id)}
        >
          Confirmar
        </button>
        ):(
          <span>Traslado Confirmado</span>
        )
      ),
      button: true,
    },
  ];

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
                  <h2>Traslados</h2>
                </div>
                <Button onClick={() => setShowModal(true)}>
                  Crear Traslado
                </Button>
              </div>

              <DataTable
                columns={columns}
                data={traslados}
                pagination
                paginationComponentOptions={paginationComponentOptions}
              />

              <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Crear Traslado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group>
                      <Form.Label>Bodega Origen</Form.Label>
                      <Form.Control
                        as="select"
                        value={nuevoTraslado.idBodegaOrigen}
                        onChange={(e) =>
                          setNuevoTraslado({
                            ...nuevoTraslado,
                            idBodegaOrigen: e.target.value,
                          })
                        }
                      >
                        <option value="">Seleccionar Bodega</option>
                        {bodegas.map((bodega) => (
                          <option key={bodega.id} value={bodega.id}>
                            {bodega.nombre}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Bodega Destino</Form.Label>
                      <Form.Control
                        as="select"
                        value={nuevoTraslado.idBodegaDestino}
                        onChange={(e) =>
                          setNuevoTraslado({
                            ...nuevoTraslado,
                            idBodegaDestino: e.target.value,
                          })
                        }
                      >
                        <option value="">Seleccionar Bodega</option>
                        {bodegas.map((bodega) => (
                          <option key={bodega.id} value={bodega.id}>
                            {bodega.nombre}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Descripción del Traslado</Form.Label>
                      <Form.Control
                        type="text"
                        value={nuevoTraslado.descripcion}
                        onChange={(e) =>
                          setNuevoTraslado({
                            ...nuevoTraslado,
                            descripcion: e.target.value,
                          })
                        }
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Buscar Lote (Código de barras o nombre)</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => handleBuscarLote(e.target.value)}
                      />
                      <Form.Control
                        as="select"
                        value={nuevoTraslado.detalles[0].idLote}
                        onChange={(e) =>{
                          const updateDetalles = [...nuevoTraslado.detalles];
                          updateDetalles[0] = {...updateDetalles[0], idLote:parseInt(e.target.value)};
                          setNuevoTraslado({
                            ...nuevoTraslado,
                            detalles: updateDetalles,
                          })
                        }
                        }
                      >
                        <option value="">Seleccionar Lote</option>                        
                        { Array.isArray(lotes) && lotes.length > 0?(
                        lotes.map((lote) => (
                          <option key={lote.id} value={lote.id}>
                            {lote.Producto.nombre}
                          </option>
                        ))):(
                          <option disabled>
                           No existe el lote
                          </option>
                        )}
                      </Form.Control>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Cantidad</Form.Label>
                      <Form.Control
                        type="number"
                        value={nuevoTraslado.detalles[0].cantidad}
                        onChange={(e) =>{
                          setCantidadT(e.target.value);
                          const updateDetalles = [...nuevoTraslado.detalles];
                          updateDetalles[0] = {...updateDetalles[0], cantidad:Number(cantidadT)};
     
                          setNuevoTraslado({
                            ...nuevoTraslado,
                            detalles:updateDetalles
                          })
                        }
                        }
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setShowModal(false)}>
                    Cancelar
                  </Button>
                  <Button variant="primary" onClick={handleCrearTraslado}>
                    Crear Traslado
                  </Button>
                </Modal.Footer>
              </Modal>

              {showAlert && (
                <Alert
                  variant="success"
                  onClose={() => setShowAlert(false)}
                  dismissible
                >
                  Traslado confirmado exitosamente.
                </Alert>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Traslados;

