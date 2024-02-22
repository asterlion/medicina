import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Form, Row, Toast} from "react-bootstrap";
import LeftMenuAdmin from "./LeftMenuAdmin";
import axios from "axios";
import {AuthContext} from "../Context/AuthContext";

function AddDoctorForm(props) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [lastName, setLastName] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [typeAppointment, setTypeAppointment] = useState("");
    const [listTypeAppointment, setListTypeAppointment] = useState([]);
    const token = useContext(AuthContext);
    const [showSuccessToast, setShowSuccessToast] = useState(false); // State for success toast


    useEffect(() => {
        const apiUrl = 'http://localhost:8082/api/v1/public/category/typeAppointmentsNames';

        axios.get(apiUrl).then((resp) => {
            const data = resp.data;
            setListTypeAppointment(data);
        }).catch(err => {
            console.error(err)
        });
    }, [setListTypeAppointment]);

    function handleAddDoctor() {
        const addDoctorUrl = "http://localhost:8082/api/v1/admin/addDoctor";
        console.log(typeAppointment)
        axios.post(addDoctorUrl, {
            login: login,
            password: password,
            firstName: firstName,
            secondName: secondName,
            lastName: lastName,
            specialization: specialization,
            typeAppointment: typeAppointment
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }).then(resp => alert("Successfully"))
            .catch(err => alert("Check your role"))
    }

    return (
        <Row>
            <Col sm={2}>
                <LeftMenuAdmin/>
            </Col>
            <Col sm={1}></Col>
            <Col sm={7}>
                <Form className='my-lg-3'>
                    <Form.Group controlId="fromBasicText1">
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
                    <Form.Group controlId="fromBasicText2">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="First name"
                                      onChange={(e) => setFirstName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="fromBasicText3">
                        <Form.Label>Second name</Form.Label>
                        <Form.Control type="text" placeholder="Second name"
                                      onChange={(e) => setSecondName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="fromBasicText4">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Last name"
                                      onChange={(e) => setLastName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="fromBasicText5">
                        <Form.Label>Specialization</Form.Label>
                        <Form.Control type="text" placeholder="Specialization"
                                      onChange={(e) => setSpecialization(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="fromBasicText7">
                        <Form.Label>Type Appointment</Form.Label>
                        <Form.Select value={typeAppointment} onChange={(e => setTypeAppointment(e.target.value))}>
                            <option></option>
                            {listTypeAppointment.map(item => {
                                return (<option key={item} value={item}>{item}</option>);
                            })}
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" className="me-3 my-lg-3" onClick={handleAddDoctor}>Add Doctor</Button>
                </Form>
                {/* Success Toast */}
                <Toast show={showSuccessToast} onClose={() => setShowSuccessToast(false)} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Success</strong>
                    </Toast.Header>
                    <Toast.Body>Doctor successfully added!</Toast.Body>
                </Toast>
            </Col>
        </Row>
    );
}

export default AddDoctorForm;