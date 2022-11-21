import axios from 'axios';
import React, { useState, useRef } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useCookies } from 'react-cookie';

function MyProfile() {
    const [formData, setFormData] = useState({
        username: "",
        fullName: "",
        password: ""
    });

    const [validated, setValidated] = useState(false);
    const [cookie, setCookie] = useCookies();
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }



    function handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            if (validated) {
                let data = {}
                if (formData.password.length !== 0) data.password = formData.password;
                if (formData.username.length !== 0) data.username = formData.username;
                if (formData.fullName.length !== 0) data.fullName = formData.fullName;

                axios.put("users/" + cookie.id, data, {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY4ODU2MzYzLCJleHAiOjE2NzE0NDgzNjN9.v11LD-yvy7dW4jd-9avrDMBaT8HBfXblRfvjz3kvJ6M",
                    },
                }).then(res => console.log(res.data))
            }
        }
        setValidated(true);

        event.preventDefault();





    }



    return (
        <div className='row justify-content-center'>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className='col-lg-6 col'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Username</Form.Label>
                    <Form.Control name='username' onChange={handleChange} value={formData.username} type="text" placeholder="admin" />
                    <Form.Control.Feedback type="invalid">Maydon bo'sh bo'lmasligi kerak</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>To'liq ismi</Form.Label>
                    <Form.Control name='fullName' onChange={handleChange} value={formData.fullName} type="text" placeholder="Falanchayev Fustancha Fustancha o'g'li" />
                    <Form.Control.Feedback type="invalid">Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Yangi parol</Form.Label>
                    <Form.Control required name='password' onChange={handleChange} value={formData.password} type="password" placeholder="Parol" />
                    <Form.Control.Feedback type="invalid">Parol bo'sh bo'lmasin</Form.Control.Feedback>
                </Form.Group>
                <div className='d-flex justify-content-end'><Button type='submit' className='success-btn me-2'>O'zgartirish</Button></div>
            </Form>
        </div>
    )
}

export default MyProfile