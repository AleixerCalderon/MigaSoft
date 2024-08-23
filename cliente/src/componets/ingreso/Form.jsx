import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./form.css";

const Formulario = () => {
  return (
    <>
      <Form className='form-login'>
        <div className="text-center mb-4 form-title"><h3>Formulario de Ingreso</h3></div>
        <Form.Group className="mb-4">
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="email" placeholder="Correo o Usuario" />
          <Form.Text className="text-muted">
            Ingresa tu correo o nombre de usuario
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingresa la contraseña" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Recordar datos" />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            Ingresar
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Formulario;
