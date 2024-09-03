import DataTable from "react-data-table-component"; //Libreria Datatables
import Header from "../componets/Header";
import Sidebar from "../componets/Sidebar";
import Footer from "../componets/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./responsive.css";
import Icon from "../assets/icon-inventarios.svg";

const columns = [
	{
		name: 'Id',
		selector: row => row.id,
    sortable: true,
	},
  {
		name: 'Nombre',
		selector: row => row.nombre,
    sortable: true,
	},
  {
		name: 'Apellido',
		selector: row => row.apellido,
    sortable: true,
	},
	{
		name: 'Edad',
		selector: row => row.edad,
    sortable: true,
	},
  {
		name: 'Cantidad',
		selector: row => row.cantidad,
    sortable: true,
	},
];
//Diego
const data = [
  	{
		id: 1,
		nombre: 'Maria',
    apellido: 'Perez',
		edad: '20',
    cantidad: '350'
	},
	{
		id: 2,
		nombre: 'Juan',
    apellido: 'Garcia',
		edad: '42',
    cantidad: '350'
	},
  {
    id:3,
    nombre: 'Ana',
    apellido: 'Lopez',
    edad: '25',
    cantidad: '350'
  },
  {
    id:4,
    nombre: 'Alex',
    apellido: 'Rodriguez',
    edad: '30',
    cantidad: '350'
  },
  {
    id:5,
    nombre: 'Luis',
    apellido: 'Diaz',
    edad: '35',
    cantidad: '350'
  },
  {
    id:6,
    nombre: 'Eva',
    apellido: 'Martinez',
    edad: '40',
    cantidad: '350'
  },
  {
    id:7,
    nombre:'Laura',
    apellido: 'Hernandez',
    edad: '45',
    cantidad: '350'
  },
  {
    id:8,
    nombre: 'Sofia',
    apellido: 'Gutierrez',
    edad: '50',
    cantidad: '350'
  },
]
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

const Inventario = () => {
  return (
    <>
      <Header />
      <Container fluid className="contenedor-p">
        <Row className="content-p">
          <Col lg={3} md={4} sm={12} xs={12} className="sidebar">
            <Sidebar />
          </Col>
          <Col lg={9} md={8} sm={12} xs={12}>
            <div className="contenido-tablas">
              <div className="header-table">
                  <div className="titulo">
                    <img src={Icon} alt="Icon Inventario" /> <h2>Inventario</h2>
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

export default Inventario;
