import React, {useContext, useState} from 'react';
import {Button, Form, Modal, Nav, Navbar} from "react-bootstrap";
import logo from "../health-client-logo.jpg"
import styled from "styled-components";
import axios from "axios";
import {AuthContext} from "../Context/AuthContext";
import {jwtDecode} from "jwt-decode";

const Styles = styled.div`
  a, .navbar-brand, .navbar-nav {
    color: #abd1b8;

    &:hover {
      color: white;
    }
  }
`

function NaviBar(props) {

    const [show, setShow] = useState(false);
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState(localStorage.getItem('auth'))
    const handleClose = () => setShow(false);
    const token = useContext(AuthContext);
    const [username, setUsername] = useState(localStorage.getItem("username"));
    const [role, setRole] = useState(localStorage.getItem("role"));


    const handleShow = () => {
        console.log(token);
        setShow(true);

    };

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8082/auth", {
            username: login,
            password: password
        }).then(function (response) {
            localStorage.setItem("token", response.data.token);
            const decoded = jwtDecode(response.data.token);
            localStorage.setItem('auth', "true");
            localStorage.setItem("username", decoded.sub)
            localStorage.setItem("role", decoded.roles[0]);
            setRole(decoded.roles[0]);
            setUsername(decoded.sub);
            setAuth("true");
            handleClose();
        }).catch(function (error) {
            console.log(error);
            alert("Wrong credential")
        });
    }

    function handleLogOut() {
        setAuth("false");
        localStorage.setItem("token", "");
        localStorage.setItem("auth", "false");
    }

    return (
        <>
            <Styles>
                <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href='/'>
                        <img
                            src={logo}
                            height="30"
                            width="60"
                            className='d-inline-block align-top mx-3'
                            alt="Logo"
                        />
                        Health Clinic
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav>
                        <Nav>
                            {auth === "false"
                                ? <>
                                    <Button variant="primary" className="me-3" onClick={handleShow}>Log In</Button>
                                </>
                                : <>
                                    {role === 'ROLE_ADMIN'
                                        ? <Button variant="success" href='/admin' className="me-3">Admin Panel</Button>
                                        : <></>
                                    }
                                    <Button variant="outline-primary" className="me-3">{username}</Button>
                                    <Button variant="primary" className="me-3" onClick={handleLogOut}>Log out</Button>
                                </>

                            }


                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicText">
                            <Form.Label>Login</Form.Label>
                            <Form.Control type="text" placeholder="Enter login"
                                          onChange={(e) => setLogin(e.target.value)}/>
                            <Form.Text className='text-muted'>We'll never share your login</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="fromBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password"
                                          onChange={(e) => setPassword(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="fromBasicCheckBox">
                            <Form.Check type="checkbox" label="Remember me"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleLogin}>Log in</Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default NaviBar;