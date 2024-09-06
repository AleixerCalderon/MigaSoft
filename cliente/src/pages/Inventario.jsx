import DataTable from "react-data-table-component"; //Libreria Datatables
import Header from "../componets/Header";
import Sidebar from "../componets/Sidebar";
import Footer from "../componets/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./responsive.css";
import Icon from "../assets/icon-inventarios.svg";
import IconAdd from "../assets/icon-agregar.svg";


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
		name: 'Peso Gr.',
		selector: row => row.peso,
    sortable: true,
	},
  {
		name: 'Categoría',
		selector: row => row.categoria,
    sortable: true,
	},
  {
		name: 'Diámetro In.',
		selector: row => row.diametro,
    sortable: true,
	},
  {
		name: 'Cantidad',
		selector: row => row.cantidad,
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
    peso: "830",
    categoria: "Ajonjolí",
    diametro: "no aplica",
    cantidad: "100",
    estado: "habilitado",
    editar: ""
  },
  {
    id: 2,
    codigo: "B9685",
    nombre: "Pan Hamburguesa",
    peso: "850",
    categoria: "Ajonjolí",
    diametro: "5",
    cantidad: "2000",
    estado: "habilitado",
    editar: ""
  },
	{
    id: 3,
    codigo: "B9466",
    nombre: "Pan Hamburguesa",
    peso: "850",
    categoria: "Artesanal",
    diametro: "5",
    cantidad: "800",
    estado: "habilitado",
    editar: ""
  },
  {
    id: 4,
    codigo: "B501238",
    nombre: "Pan Hamburguesa Guadalupe",
    peso: "625",
    categoria: "Ajonjolí",
    diametro: "5",
    cantidad: "3000",
    estado: "habilitado",
    editar: ""
  },
  {
    id: 5,
    codigo: "B505354",
    nombre: "Pan Tajado",
    peso: "730",
    categoria: "Tradicional",
    diametro: "no aplica",
    cantidad: "80",
    estado: "habilitado",
    editar: ""
  },
  {
    id: 6,
    codigo: "B9673",
    nombre: "Pan Hamburguesa Brioche",
    peso: "850",
    categoria: "Brillo",
    diametro: "5",
    cantidad: "No Aplica",
    estado: "inhabilitado",
    editar: ""
  },
  {
    id: 7,
    codigo: "B22726",
    nombre: "Pan Perro Cluster",
    peso: "830",
    categoria: "Ajonjolí",
    diametro: "no aplica",
    cantidad: "100",
    estado: "inhabilitado",
    editar: ""
  },
  {
    id: 8,
    codigo: "B22726",
    nombre: "Pan Perro Cluster",
    peso: "830",
    categoria: "Ajonjolí",
    diametro: "no aplica",
    cantidad: "100",
    estado: "inhabilitado",
    editar: ""
  },
  {
    id: 9,
    codigo: "B22726",
    nombre: "Pan Perro Cluster",
    peso: "830",
    categoria: "Ajonjolí",
    diametro: "no aplica",
    cantidad: "100",
    estado: "inhabilitado",
    editar: ""
  },
  {
    id: 10,
    codigo: "B22726",
    nombre: "Pan Perro Cluster",
    peso: "830",
    categoria: "Ajonjolí",
    diametro: "no aplica",
    cantidad: "100",
    estado: "inhabilitado",
    editar: ""
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

          <Col lg={2} md={4} sm={12} xs={12} className="sidebar">
            <Sidebar />
          </Col>

          <Col lg={10} md={8} sm={12} xs={12}>
            <div className="contenido-tablas">
              <div className="header-table">
                  <div className="titulo">
                    <img src={Icon} alt="Icon Inventario" /> <h2>Inventario</h2>
                  </div>
                  <div className="titulo add-item">
                  <h4>Crear productos</h4> <img src={IconAdd} alt="Icon Inventario" />
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
