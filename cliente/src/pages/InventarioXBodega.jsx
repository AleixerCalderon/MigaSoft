import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Api from "../AxiosConfig";
import Header from "../componets/Header";
import Sidebar from "../componets/Sidebar";
import Footer from "../componets/Footer";
import Alert from "react-bootstrap/Alert";
import Icon from "../assets/icon-inventarios.svg";

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
            fontSize: "1em", // Altura mínima de las filas
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
            paddingLeft: "8px",
            paddingRight: "8px",
            borderStyle: "solid",
            borderColor: "#E5E5E5",
            borderWidth: "1px",
        },
    },
};

const InventariosXBodega = () => {
    const [bodegas, setBodegas] = useState([]); // Lista de bodegas
    const [inventarios, setInventarios] = useState([]); // Inventario de la bodega seleccionada
    const [bodegaSeleccionada, setBodegaSeleccionada] = useState(null);
    const [showAlert, setShowAlert] = useState(false);

    // Columnas de la tabla de inventarios
    const columns = [
        {
            name: "Id Lote",
            selector: (row) => row.idLote,
            sortable: true,
        },
        {
            name: "Nombre Producto",
            selector: (row) => row.Lote.Producto.nombre,
            sortable: true,
        }
        ,
        {
            name: "Descripciín Producto",
            selector: (row) => row.Lote.Producto.descripcion,
            sortable: true,
        },
        {
            name: "Precio Unitario",
            selector: (row) => row.Lote.Producto.PrecioUnitario,
            sortable: true,
        },
        {
            name: "Precio Venta",
            selector: (row) => row.Lote.Producto.PrecioVenta,
            sortable: true,
        },
        {
            name: "Codigo Lote",
            selector: (row) => row.Lote.CodigoLote,
            sortable: true,
        },
        {
            name: "Codigo Barras",
            selector: (row) => row.Lote.CodigoBarras,
            sortable: true,
        },
        {
            name: "Cantidad",
            selector: (row) => row.Cantidad,
            sortable: true,
        },

        ,
        {
            name: "Fecha Entrada",
            selector: (row) => row.Lote.FechaEntrada,
            sortable: true,
        },
        ,
        {
            name: "Fecha Vencimiento",
            selector: (row) => row.Lote.FechaVencimiento,
            sortable: true,
        },
        {
            name: "Días hasta vencimiento",
            cell: (row) => {
                const fechaVencimiento = new Date(row.Lote.FechaVencimiento);
                const fechaActual = new Date();
                const diferenciaTiempo = fechaVencimiento - fechaActual;
                const diasRestantes = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));

                let color = ''; //Alertas de días
                if (diasRestantes > 4) {
                    color = 'green'; // Verde  
                } else if (diasRestantes <= 3 && diasRestantes >= 2) {
                    color = 'yellow'; // Amarillo  
                } else if (diasRestantes < 2) {
                    color = 'red'; // Rojo 
                }
                return (
                    <span style={{ color: color }}>
                        {
                            diasRestantes >= 0 ? `${diasRestantes} días` : `Vencido hace ${Math.abs(diasRestantes)} días`
                        }
                    </span>
                );
                
            }, sortable: true,
        },

    ];

    useEffect(() => {
        darBodegas();
    }, []);

    // Función para obtener las bodegas desde la API
    const darBodegas = async () => {
        try {
            const response = await Api.get("/bodegas");
            setBodegas(response.data);
        } catch (error) {
            console.error("Error al obtener bodegas:", error);
        }
    };

    // Función para obtener el inventario de una bodega
    const darInventario = async (idBodega) => {
        try {
            const response = await Api.get(`/Inventario/${idBodega}`);
            setInventarios(response.data);
        } catch (error) {
            console.error("Error al obtener inventario:", error);
        }
    };

    // Función que se ejecuta al seleccionar una bodega
    const handleSelectBodega = (e) => {
        const idBodega = e.target.value;
        const nombreBodega = e.target.options[e.target.selectedIndex].text;
        setBodegaSeleccionada(nombreBodega);
        darInventario(idBodega);
    };

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
                            </div>

                            {/* Selección de Bodega */}
                            <Form.Group controlId="formBodega">
                                <Form.Label>Seleccione una bodega</Form.Label>
                                <Form.Control as="select" onChange={handleSelectBodega}>
                                    <option value="">Seleccione una bodega...</option>
                                    {bodegas.map((bodega) => (
                                        <option key={bodega.id} value={bodega.id}>
                                            {bodega.nombre}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>

                            {/* Mostrar tabla de inventario solo si hay una bodega seleccionada */}
                            {bodegaSeleccionada && (
                                <>

                                    <h3>Inventario de la Bodega {bodegaSeleccionada}</h3>
                                    <DataTable
                                        columns={columns}
                                        data={inventarios}
                                        pagination
                                        paginationComponentOptions={paginationComponentOptions}
                                        customStyles={customStyles}
                                    />
                                </>
                            )}
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        {showAlert && (
                            <Alert key="success" variant="success" onClose={() => setShowAlert(false)}>
                                La consulta se ha realizado exitosamente.
                            </Alert>
                        )}
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    );
};

export default InventariosXBodega;