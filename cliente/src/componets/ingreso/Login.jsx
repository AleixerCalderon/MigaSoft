import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./login.css";
import Formulario from './Form';
import logo from "../../assets/logo-migasoft.png";

const Login = ()=>{
    return(
        <Container fluid className="ingreso">
            <Row>
                <Col></Col>
                <Col> 
                    <div className="logo">
                        <img src={logo} alt="MigaSoft" />
                    </div>
                    <Formulario />
                    <div className='footer'>© Dev By Migasoft 2024</div>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default Login;