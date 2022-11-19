import axios from "../axios/Axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "./main.css";

function LoginForm() {
  const [, setCookies] = useCookies();
  const navigate = useNavigate();
  const [emailValidate, setEmailValidate] = useState("");
  const [passValidate, setPassValidate] = useState("");
  const [authErrors, setAuthErrors] = useState("");
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function validatorEmail(value) {
    let validator = value.length < 1 ? false : true;
    if (!validator) setEmailValidate("Username bo'sh bo'lmasin");
    else setEmailValidate("");
    return validator;
  }

  function validatorPass(value) {
    let validator = value.length < 6 ? false : true;
    if (!validator) setPassValidate("Parol 6 belgidan kam emas!");
    else setPassValidate("");
    return validator;
  }

  const LoginHandler = (e) => {
    e.preventDefault();

    let isValid =
      validatorEmail(formData.identifier) && validatorPass(formData.password);

    if (isValid)

      axios
        .post("/auth/local", formData)
        .then((res) => {
          const d = new Date();
          d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
          setCookies("userToken", res.data.jwt, {
            path: "/",
            expires: d,
          });
          navigate("/home");
        })
        .catch((e) => {
          e?.response?.status === 400 && setAuthErrors("Login yoki parol xato");
        });
  };

  return (
    <div className="login d-flex align-items-center justify-content-center">
      <Container className="form-cont p-5 d-flex align-items-center justify-content-center shadow">
        <div className="w-100">
          <h1 className="text-center mb-4">Profilga kirish</h1>
          <Form onSubmit={LoginHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email adresingizni kiriting</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formData.identifier}
                name="identifier"
                type="text"
                placeholder="Enter email"
                onBlur={() => validatorEmail(formData.identifier)}
              />
              <Form.Text className="text-danger">{emailValidate}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Parol</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formData.password}
                name="password"
                type="password"
                placeholder="Password"
                onBlur={() => validatorPass(formData.password)}
              />
              <Form.Text className="text-danger">{passValidate}</Form.Text>
            </Form.Group>
            <Button className="peremium-btn" type="submit">
              Kirish
            </Button>
            <Form.Text className="text-danger">{authErrors}</Form.Text>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default LoginForm;
