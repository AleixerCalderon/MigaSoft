import { useEffect, useState } from "react";
import Header from "../componets/Header";
import Dashboard from "../componets/Dashboard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../componets/Footer";
import IconUser from "../assets/icon-usuario-v2.svg";
import IconInventario from "../assets/icon-inventario-v2.svg";
import IconBodega from "../assets/icon-bodega-v2.svg";
import IconAnalitica from "../assets/icon-analitca-v2.svg";
import IconlistUsers from "../assets/icon-listUsers.svg";

const HomePage = ()=>{
    const [usuario, setUsuario]=useState(null);
    const userId = 2;
    const roles = ["admin", "bodeguero","vendedor","secretaria"];
    const getRole =(rol)=>{
        switch (rol) {
            case "admin":
                return(IconUser);
            case "bodeguero":
                return(IconInventario);
            case "vendedor":
                return(IconlistUsers);
                
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
    return(
        <>
            <Header/>
            <Container fluid className="dashboard">
                <Row>
                    <Col xs={12}>
                        <h1>Bienvenido</h1>
                    </Col>
                </Row>
                <Row>
                        {roles.map(
                            (rol)=>(
                            <Col className="dash-menu">
                                <div className="dash-menu-item">
                                    <a href="#">
                                        <img src={getRole(rol)} alt={rol} />
                                        <h4>{rol}</h4>
                                    </a>
                                </div>  
                            </Col>
                        )
                        )}
                </Row>
                <Row>
                    <Col>
                        <div className="reporte-item">
                            <img src={IconlistUsers} alt="" />
                            <p>
                                Usuarios creados
                                <span>130</span>
                            </p>
                        </div>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}

export default HomePage;