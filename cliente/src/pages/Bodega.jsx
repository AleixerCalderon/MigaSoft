import DataTable from "react-data-table-component";
import Header from "../componets/Header";
import Sidebar from "../componets/Sidebar";
import Footer from "../componets/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";
import Icon from "../assets/icon-bodega-v2.svg";
import IconAdd from "../assets/icon-agregar.svg";

const columns = [
	{
		name: 'Id',
		selector: row => row.id,
    sortable: true,
	},
  {
		name: 'Bodega',
		selector: row => row.bodega,
    sortable: true,
	},
  {
		name: 'Nombre',
		selector: row => row.nombre,
    sortable: true,
	},
  {
		name: 'Roll',
		selector: row => row.roll,
    sortable: true,
	},
  {
		name: 'Tipo de Bodega',
		selector: row => row.tipo,
    sortable: true,
	},
  {
		name: 'Editar',
		selector: row => row.editar,
    sortable: true,
	},

];

const data = [
  {
    id: 1,
    bodega: "General",
    nombre: "Patricia Castillo",
    roll: "Administrador",
    tipo: "Gerencial",
    editar: ""
  },
  {
    id: 2,
    bodega: "Transito",
    nombre: "Jose Antonio Forero Jímenez",
    roll: "Inventario",
    tipo: "Operativo",
    editar: ""
  },
  {
    id: 3,
    bodega: "Movil WYH356",
    nombre: "Jonathan Guacaneme",
    roll: "Ventas",
    tipo: "Operativo",
    editar: ""
  },
  {
    id: 4,
    bodega: "Movil UTD556",
    nombre: "Jaime Tamayo",
    roll: "Ventas",
    tipo: "Operativo",
    editar: ""
  },
  {
    id: 5,
    bodega: "Movil WLC159",
    nombre: "Yudy Paola Jímenez Castro",
    roll: "Ventas",
    tipo: "Operativo",
    editar: ""
  },
  {
    id: 6,
    bodega: "Movil TQL431",
    nombre: "Carlos Andres Ramirez Prada",
    roll: "Ventas",
    tipo: "Operativo",
    editar: ""
  },
];

const paginationComponentOptions = {
	rowsPerPageText: 'Filas por página',
	rangeSeparatorText: 'de',
	selectAllRowsItem: true,
	selectAllRowsItemText: 'Todos',
};

const customStyles = {
	rows: {
		style: {
			minHeight: '60px',
      fontSize:"1em" // override the row height
		},
	},
	headCells: {
		style: {
			fontSize: '1.3em',
      fontWeight: 'bold',
      backgroundColor: '#4F4F4F',
      color:'#ffffff',
		},
	},
	cells: {
		style: {
			paddingLeft: '8px', // override the cell padding for data cells
			paddingRight: '8px',
      borderStyle:"solid",
      borderColor:"#E5E5E5",
      borderWidth:"1px",
		},
	},
};

const Bodega = () => {
  return (
    <>
      <Header />
      <Container fluid className="contenedor-p">

        <Row className="content-p">

          <Col lg={2} md={3} sm={3} xs={12} className="sidebar">
            <Sidebar />
          </Col>

          <Col lg={10} md={9} sm={9} xs={12}>
            <div className="contenido-tablas">
              <div className="header-table">
              <div className="titulo">
                  <img src={Icon} alt="Icon Productos" /> <h2>Bodegas</h2>
                </div>
                <div className="titulo add-item">
                  <h4>Crear bodega</h4>{" "}
                  <img src={IconAdd} alt="Icon agregar productos" />
                </div>
              </div>
              <DataTable columns={columns} data={data} showGridlines selectableRows  pagination paginationComponentOptions={paginationComponentOptions} customStyles={customStyles}/>
            </div>
          </Col>

        </Row>



      </Container>
      <Footer />
    </>
  );
};

export default Bodega;
