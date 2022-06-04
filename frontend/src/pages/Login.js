import React, { useState } from 'react'
import { Form, Row, Container, Button, Col } from "react-bootstrap"
import { Link } from 'react-router-dom';
import "../styles/Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e) {
        e.preventDefault();
        console.log(e);
    }
    return (
        <Container>
            <Row>
                <Col md={5} className="login__bg"></Col>
                <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
                    <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" required placeholder="Enter email" onChange={event => setEmail(event.target.value)} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required placeholder="Password" onChange={event => setPassword(event.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        <div className="pv-4">
                            <p className="text-center">
                                Don't have an account ?  <Link to="/signin">Sign in</Link>
                            </p>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
}

export default Login