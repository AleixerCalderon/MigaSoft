import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./login.css";
// import Formulario from "./Form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./form.css";
import logo from "../../assets/logo-migasoft.png";

const Login = () => {
  // Declaramos los estado para manejar la variable user y password
  const [usuario, setUsername] = useState("");
  const [hashClave, setPassword] = useState("");
  const [error, setError] = useState(null);

  //Usar un Handle, consumo api login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      //Consumo de metodo login
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usuario, hashClave }),
      });
      if (!response.ok) {
        
        throw new Error("Error de sesión");
      }
      const data = await response.json();
      //Guardamos el token en el loCalStore del Navegador
      localStorage.setItem("token", data.token);
      //Redireccionamos a la pagina principal
      window.location.href = "/home";
    } catch (error) {
        setError(error.message);
    }
  };

  return (
    <Container fluid className="ingreso">
      <Row>
        <Col sm={2} xs={1}></Col>
        <Col sm={8} xs={10}>
          <div className="logo">
            <img src={logo} alt="MigaSoft" />
          </div>
          <div className="content-form">
            <Form className="form-login" onSubmit={handleLogin}>
              <div className="text-center mb-4 form-title">
                <h3>Formulario de Ingreso</h3>
              </div>
              <Form.Group className="mb-4">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="text" onChange={(e)=>setUsername(e.target.value)} value={usuario} />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)} value={hashClave}/>
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordar datos" />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="success" size="lg" type="submit">
                  Ingresar
                </Button>
              </div>
              {error && <p>{error}</p>}
              <div className="text-center mt-4">¿Olvidaste tu contraseña?</div>
            </Form>
          </div>
          <div className="footer">© Dev By Migasoft 2024</div>
        </Col>
        <Col sm={2} xs={1}></Col>
      </Row>
    </Container>
  );
};

export default Login;
