import DataTable from "react-data-table-component";
import Header from "../componets/Header";
import Sidebar from "../componets/Sidebar";
import Footer from "../componets/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";
import Icon from "../assets/icon-analitca.svg";

const columns = [
	{
		name: 'Id',
		selector: row => row.id,
    sortable: true,
	},
  {
		name: 'Código',
		selector: row => row.codigo,
    sortable: true,
	},
  {
		name: 'Nombre',
		selector: row => row.nombre,
    sortable: true,
	},
  {
		name: 'Inventario En Puerta',
		selector: row => row.inventario,
    sortable: true,
	},

  {
		name: 'Stock de Seguridad',
		selector: row => row.stock,
    sortable: true,
	},
  {
		name: 'Unidades Requeridas',
		selector: row => row.unidades,
    sortable: true,
	},
  {
		name: 'Estado',
		selector: row => row.estado,
    sortable: true,
	},
];

const data = [
  {
    id: 1,
    codigo: "B22726",
    nombre: "Pan Perro Cluster",
    inventario: 0,
    stock: 5,
    unidades: 30,
    estado: ""
  },
  {
    id: 2,
    codigo: "B9685",
    nombre: "Pan Hamburguesa",
    inventario: 0,
    stock: 12,
    unidades: 86,
    estado: ""
  },
  {
    id: 3,
    codigo: "B9466",
    nombre: "Pan Hamburguesa Artesanal",
    inventario: 0,
    stock: 6,
    unidades: 52,
    estado: ""
  },
  {
    id: 4,
    codigo: "B501238",
    nombre: "Pan Hamburguesa Guadalupe",
    inventario: 0,
    stock: 30,
    unidades: 160,
    estado: ""
  },
  {
    id: 5,
    codigo: "B505354",
    nombre: "Pan Tajado",
    inventario: 0,
    stock: 0,
    unidades: 14,
    estado: ""
  },
  {
    id: 6,
    codigo: "B9673",
    nombre: "Pan Hamburguesa Brioche",
    inventario: 0,
    stock: 0,
    unidades: 0,
    estado: ""
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

const Reportes = () => {
  return (
    <>
      <Header />
      <Container fluid className="contenedor-p">

        <Row className="content-p">

          <Col lg={2} md={3} sm={3} xs={12} className="sidebar">
            <Sidebar />
          </Col>

          <Col lg={10} md={9} sm={9} xs={12} className="container">

            <div className="contenido-tablas position-relative">

              <div className="header-table col position-absolute top-0 start-0">

                <div className="titulo">
                  <img src={Icon} alt="Icon Reportes" />
                </div>

                <div className="subtitulo">
                  <h2>Reportes</h2>
                  <p>Movil WYH356</p>
                </div>

              </div>

            </div>

            <div className="">

              <div className="">
              
                <DataTable columns={columns} data={data} showGridlines selectableRows  pagination paginationComponentOptions={paginationComponentOptions} customStyles={customStyles}/>

              </div>

            </div>

          </Col>

        </Row>

      </Container>
      <Footer />
    </>
  );
};

export default Reportes;
