import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../componets/Header";
<<<<<<< HEAD
import burgerImg1 from "../assets/burger.png";
import burgerImg2 from "../assets/burger1.png";
import burgerImg3 from "../assets/burger2.png";
=======
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
>>>>>>> 719768c6047d61245622927e07a4f072771814e0
import Footer from "../componets/Footer";
import IconUser from "../assets/icon-usuario-v2.svg";
import IconInventario from "../assets/icon-inventario-v2.svg";
import IconBodega from "../assets/icon-bodega-v2.svg";
import IconAnalitica from "../assets/icon-analitca-v2.svg";
import IconlistUsers from "../assets/icon-listUsers.svg";
import IconlistOrden from "../assets/icon-listOrdenes.svg";
import IconlistProducts from "../assets/icon-totalProducts.svg";

const HomePage = ()=>{
    const [usuario, setUsuario]=useState(null);
    const userId = 2;
    const menu = ["Inventario", "Usuarios","Bodega","Reportes"];
    const getMenu =(rol)=>{
        switch (rol) {
            case "Inventario":
                return(IconInventario);
            case "Usuarios":
                return(IconUser);
            case "Bodega":
                return(IconBodega);
            case "Reportes":
                return(IconAnalitica);
            default:
                return(null);
        }
    }
    useEffect(()=>{
        const fetchData = async ()=>{
            const userToken = localStorage.getItem('token');
            try {
                const response = await fetch(`http://localhost:3001/users/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userToken}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Error en el consumo del api');
                }
                const data = await response.json();
                setUsuario(data);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchData();
    },[]);
    const route="/"
    return(
        <>
<<<<<<< HEAD
        <Header />
        {usuario ? <pre>{JSON.stringify(usuario, null, 1)}</pre> : <p>Cargando...</p>}
        <h2>Bienvenido a Pan Diario </h2>
        <h1>Una Franquisia Bimbo</h1>
        
        <div className="main-container justify-content-center">
            <p>
            Servicio al cliente y cultura empresarial inigualables,
            ambiente de trabajo excepcional para personas talentosas
            </p>
          <div className="content">
            <p>
              Aquí puedes encontrar información relevante sobre nuestros servicios y productos. 
              Nos esforzamos por ofrecer la mejor calidad y atención a nuestros clientes.
            </p>
          </div>
          <div className="image-container">
            <div className="img">
            <img className="panburger" src={burgerImg1} alt="pan hamburguer" />
            </div>
            <div className="img">
            <img className="panburger" src={burgerImg2} alt="pan hamburguer" />
            </div>
            <div className="img">
            <img className="panburger" src={burgerImg3} alt="pan hamburguer" />
            </div>
          </div>
        </div>
        <Footer/>
=======
            <Header/>
            <Container fluid className="dashboard">
                <Row>
                    <Col xs={12}>
                        <h1>Bienvenido</h1>
                    </Col>
                </Row>
                <Row>
                        {menu.map(
                            (menu)=>(
                            <Col className="dash-menu">
                                <div className="dash-menu-item">
                                    <a href={menu}>
                                        <img src={getMenu(menu)} alt={menu} />
                                        <h4>{menu}</h4>
                                    </a>
                                </div>  
                            </Col>
                        )
                        )}
                </Row>
                <Row className="reporte">
                    <Col>
                        <div className="reporte-item">
                            <img src={IconlistUsers} alt="" />
                            <p>
                                Usuarios creados
                                <span>130</span>
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="reporte-item">
                            <img src={IconlistProducts} alt="" />
                            <p>
                                Total productos
                                <span>640</span>
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="reporte-item">
                            <img src={IconlistOrden} alt="" />
                            <p>
                                Ordenes creadas
                                <span>1680</span>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
>>>>>>> 719768c6047d61245622927e07a4f072771814e0
        </>
    );
}

export default HomePage;