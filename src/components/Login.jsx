import axios from 'axios';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const submit =(data)=>{
        console.log(data)
        axios.post("https://e-commerce-api-v2.academlo.tech/api/v1/users/login", data)
        .then(res => {
            localStorage.setItem("token", res.data.token)
            navigate("/")
        })
        .catch(error => {
            alert("Incorrect User or Password")
        })
    }

    return (
        <div className='login-container'>
            <div className='login-card'>
                <h3>Welcome! Enter your email and password to continue</h3>
                <div className='test'>
                    <h3>Test data</h3>
                    <p><i className='bx bx-envelope'></i>john@gmail.com</p>
                    <p><i className='bx bx-lock-alt'></i>john1234</p>
                </div>
                <Form onSubmit={handleSubmit(submit)}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        {...register("email")}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        {...register("password")}
                        />
                    </Form.Group>
                    <button className='submit' type='submit'>Login</button>
                </Form>
                <p>Don't have an account? <a href="">Sign up</a></p>
            </div>
        </div>
    );
};

export default Login;