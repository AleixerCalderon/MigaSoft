import DataTable from "react-data-table-component"; //Libreria Datatables
import Header from "../componets/Header";
import Sidebar from "../componets/Sidebar";
import Footer from "../componets/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";
import Icon from "../assets/person-fill.svg";

const columns = [
	{
		name: 'Id',
		selector: row => row.id,
    sortable: true,
	},
  {
		name: 'Nombres',
		selector: row => row.nombres,
    sortable: true,
	},
  {
		name: 'Apellidos',
		selector: row => row.apellidos,
    sortable: true,
	},
	{
		name: 'Identificación',
		selector: row => row.identificacion,
    sortable: true,
	},
  {
		name: 'E-Mail',
		selector: row => row.email,
    sortable: true,
	},
  {
		name: 'Estado',
		selector: row => row.estado,
    sortable: true,
	},
  {
		name: 'Roll',
		selector: row => row.roll,
    sortable: true,
	},
  {
		name: 'Fecha de Creación',
		selector: row => row.fecha,
    sortable: true,
	},
  {
		name: 'Edición',
		selector: row => row.edicion,
    sortable: true,
	},
  
];

const data = [

  {
    id: 1,
    nombres: "Patricia",
    apellidos: "Castillo",
    identificacion: "52167732",
    email: "patricia.casti@hotmail.com",
    estado: "Habilitado",
    roll: "Administrador",
    fecha: "01-10-2010",
    edicion: "",
  },
  {
    id: 2,
    nombres: "Juan Antonio",
    apellidos: "Forero Jímenez",
    identificacion: "80528040",
    email: "juanchisfj@hotmail.com",
    estado: "Habilitado",
    roll: "Inventario",
    fecha: "25-12-2010",
    edicion: "",
  },
	{
    id: 3,
    nombres: "Jonathan",
    apellidos: "Guacaneme",
    identificacion: "1068927913",
    email: "javsnthan@gmail.com",
    estado: "Habilitado",
    roll: "Ventas",
    fecha: "11-10-201",
    edicion: "",
  },
  {
    id: 4,
    nombres: "Jaime",
    apellidos: "Tamayo",
    identificacion: "79238698",
    email: "jtamayo0987@gmail.com",
    estado: "Habilitado",
    roll: "Ventas",
    fecha: "25-11-2010",
    edicion: "",
  },
  {
    id: 5,
    nombres: "Yudy Paola",
    apellidos: "Jimenez Castro",
    identificacion: "1069722200",
    email: "yudypaolajimenezcastro@gmail.com",
    estado: "Habilitado",
    roll: "Ventas",
    fecha: "01-03-2015",
    edicion: "",
  },
  {
    id: 6,
    nombres: "Carlos Andres",
    apellidos: "Ramirez Prada",
    identificacion: "80730194",
    email: "contactomestizza@gmail.com",
    estado: "Habilitado",
    roll: "Ventas",
    fecha: "25-07-2019",
    edicion: "",
  },
  {
    id: 7,
    nombres: "Jose Antonio",
    apellidos: "Beltran Carvajal",
    identificacion: "705755",
    email: "josebeltran93@hotmail.com",
    estado: "Inhabilitado",
    roll: "No Aplica",
    fecha: "25-11-2010",
    edicion: "",
  },
  {
    id: 8,
    nombres: "Oscar",
    apellidos: "Acevedo Mancera",
    identificacion: "1073517552",
    email: "bkstreet1887@gmail.com",
    estado: "Inhabilitado",
    roll: "No Aplica",
    fecha: "30-08-2010",
    edicion: "",
  },
  {
    id: 9,
    nombres: "Sebastian",
    apellidos: "Gamboa",
    identificacion: "1016087292",
    email: "sebas.gamboa.19@gmail.com",
    estado: "Inhabilitado",
    roll: "No Aplica",
    fecha: "18-12-2010",
    edicion: "",
  },
  {
    id: 10,
    nombres: "Jhosep",
    apellidos: "Camacho",
    identificacion: "139505021",
    email: "jhosepcamacho@gmail.com",
    estado: "Inhabilitado",
    roll: "No Aplica",
    fecha: "13-06-2023",
    edicion: "",
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





const Usuarios = () => {
  return (
    <>
      <Header />

      <Container fluid className="contenedor-p">

        <Row className="content-p">

          <Col lg={2} md={3} sm={3} xs={12} className="sidebar">
            <Sidebar />
          </Col>

          <Col lg={10} md={9} sm={9} xs={12}>
          <h1>Pantalla Usuarios</h1>
          <div className="contenido-tablas">
              <div className="header-table">
                  <div className="titulo">
                    <img src={Icon} alt="Icon Inventario" /> <h2>Usuarios</h2>
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

export default Usuarios;
