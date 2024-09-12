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
  const [producto, setProducto] = useState([]);
  const [edit, setEdit]= useState([]);
  const [productId, setProductId]= useState([]);

  const handleEdit = (producto)=>{
    setProducto({
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        peso: producto.descripcion,
        volumen: producto.volumen,
        PrecioUnitario: producto.PrecioUnitario,
        PrecioVenta: producto.PrecioVenta,
    });
    setProductId(producto.id);
    handleShow();
    setEdit(true);
  }
  
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
      name:"Editar",
      cell: (row)=>(
        <button className="btn btn-primary" onClick={()=>handleEdit(row)}>Editar</button>
      ),
      button:true,
    }
  ];
  useEffect(()=>{
    darProductos();
    setEdit(false);
    },[]);
  const [productos,setProductos] = useState([]);
  
  const handleChange = (e)=>{
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    });
  };
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
    if (edit) {
      editarProducto();
    }else{
      agregarProducto();
    }
  }

  const agregarProducto= async()=>{
    try {
      const response = await Api.post('/producto/agregar', producto);
      darProductos();
      setProducto({
        nombre: "",
        descripcion:"",
        peso:"",
        volumen:"",
        PrecioUnitario:"",
        PrecioVenta:"",
      });
      handleClose();
    } catch (error) {
      console.error(error);
    }
  }

  const editarProducto= async()=>{
    try {
      const response = await Api.put('/producto/' + productId , producto);
      darProductos();
      setProducto({
        nombre: "",
        descripcion:"",
        peso:"",
        volumen:"",
        PrecioUnitario:"",
        PrecioVenta:"",
      });
      handleClose();
      setProductId(null);
    } catch (error) {
      console.error(error);
    }
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);

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
                  {/* <Form
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
                    
                  </Form> */}
                  <Form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="" className="form-label">Nombre</label>
                      <input className="form-control" type="text" name="nombre" value={producto.nombre} onChange={handleChange} required/>
                    </div>
                    <div>
                      <label htmlFor="" className="form-label">Descripcion</label>
                      <input className="form-control" type="text" name="descripcion" value={producto.descripcion} onChange={handleChange} required/>
                    </div>
                    <div>
                      <label htmlFor="" className="form-label">Peso</label>
                      <input className="form-control" type="text" name="peso" value={producto.peso} onChange={handleChange} required/>
                    </div>
                    <div>
                      <label htmlFor="" className="form-label">Volumen</label>
                      <input className="form-control" type="text" name="volumen" value={producto.volumen} onChange={handleChange} required/>
                    </div>
                    <div>
                      <label htmlFor="" className="form-label">Precio Unitario</label>
                      <input className="form-control" type="text" name="PrecioUnitario" value={producto.PrecioUnitario} onChange={handleChange} required/>
                    </div>
                    <div>
                      <label htmlFor="" className="form-label">Precio Venta</label>
                      <input className="form-control" type="text" name="PrecioVenta" value={producto.PrecioVenta} onChange={handleChange} required/>
                    </div>
                    <div>
                      <button type="submit" className="btn btn-success">Guardar</button>
                    </div>
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
