import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./main.css";
function LoginForm() {
  return (
    <div className="login d-flex align-items-center justify-content-center">
      <Container className="form-cont p-5 d-flex align-items-center justify-content-center shadow">
        <div className="w-100">
          <h1 className="text-center mb-4">Profilga kirish</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email adresingizni kiriting</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Parol</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button className="peremium-btn" type="submit">
              Kirish
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default LoginForm;
