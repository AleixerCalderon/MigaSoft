import "./styles.css";
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
import IconPro from "../assets/person-fill.svg";
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

const Usuarios = () => {
  const [usuario, setUsuario] = useState({
    Personas: {
      nombre: "",
      apellido: ""
    },
    usuario: "",
    Roles: [{ descripcion: "" }],  
    habilitado: true
  });
  const [edit, setEdit] = useState([]);
  const [productId, setProductId] = useState([]);

  const handleEdit = (usuario) => {
    setUsuario({     
      Personas: {
        nombre: "",
        apellido: ""
      },
      usuario: "",
      Roles: [{ descripcion: "" }],  
      habilitado: true
    });
    setProductId(usuario.id);
    handleShow();
    setEdit(true);
  };

  const handleDelete = (usuario) => {
    setProductId(usuario.id);
    eliminarUsuario(usuario.id);
  };

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Nombre",
      selector: (row) => row.Personas.nombre,
      sortable: true,
    },
    {
      name: "Apellido",
      selector: (row) => row.Personas.apellido,
      sortable: true,
    },
    {
      name: "Roles",
      selector: (row) =>{ return <div className="aab-span-div"> { row.Roles.map((rol) => (  <span className="aab-span">{ rol.descripcion}</span>))}</div>} ,
      sortable: true,
    },

    {
      name: "Usuario",
      selector: (row) => row.usuario,
      sortable: true,
    },
    {
      name: "Habilitado",
      selector: (row) => {
        return row.habilitado ? <span> <img className="aab-icon text-success" src={IconCheck} alt="Check" /></span> : <span><img className="aab-icon" src={Iconblock} alt="Not Check" /></span>;
      },
      sortable: true,
    },
    // {
    //   name: "Editar",
    //   cell: (row) => (
    //     <button className="btn btn-primary" onClick={() => handleEdit(row)}>
    //       Editar
    //     </button>
    //   ),
    //   button: true,
    // },
    // {
    //   name: "Eliminar",
    //   cell: (row) => (
    //     <button className="btn btn-danger" onClick={() => handleDelete(row)}>
    //       Eliminar
    //     </button>
    //   ),
    //   button: true,
    // },
  ];
  useEffect(() => {
    darUsuarios();
    setEdit(false);

  }, []);
  const [usuarios, setUsuarios] = useState([]);

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  const darUsuarios = async () => {
    try {
      const response = await Api.get("/users");
      setUsuarios(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (edit) {
      editarUsuario();
    } else {
      agregarUsuario();
    }
    handleShowAlert();
  };

  const agregarUsuario = async () => {
    try {
      const response = await Api.post("/users/agregar", usuario);
      darUsuarios();
      setUsuario({
        Personas: {
          nombre: "",
          apellido: ""
        },
        usuario: "",
        Roles: [{ descripcion: "" }],  
        habilitado: true
      });
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  const editarUsuario = async () => {
    try {
      const response = await Api.put("/users/" + productId, usuario);
      darUsuarios();
      setUsuario({
        Personas: {
          nombre: "",
          apellido: ""
        },
        usuario: "",
        Roles: [{ descripcion: "" }],  
        habilitado: true
      });
      handleClose();
      setProductId(0);
    } catch (error) {
      console.error(error);
    }
  };

  const eliminarUsuario = async (id) => {
    try {
      const response = await Api.delete("/users/" + id);
      darUsuarios();
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
                  <img src={IconPro} alt="Icon Usuarios" /> <h2>Usuarios</h2>
                </div>
                <div className="titulo add-item" onClick={handleShow}>
                  <h4>Crear usuarios</h4>
                  <img src={IconAdd} alt="Icon agregar usuarios" />
                </div>
              </div>
              <DataTable
                columns={columns}
                data={usuarios}
                showGridlines
                pagination
                paginationComponentOptions={paginationComponentOptions}
                customStyles={customStyles}
              />

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Crear Usuario</Modal.Title>
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
                        value={usuario.Personas.nombre}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="form-label">
                        Apellido
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="apellido"
                        value={usuario.Personas.apellido}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="form-label">
                        Rol
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="rol"
                        value={usuario.Roles[0].descripcion}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="" className="form-label">
                        Usuario
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="descripcion"
                        value={usuario.usuario}
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
                        checked={usuario.habilitado}
                        onChange={(e) =>
                          setUsuario({
                            ...usuario,
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

export default Usuarios;
