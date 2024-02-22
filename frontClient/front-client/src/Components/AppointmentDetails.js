import React, {useEffect, useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import LeftMenu from "./LeftMenu";
import {useParams} from "react-router-dom";
import axios from "axios";
import Table from 'react-bootstrap/Table';

function AppointmentDetails(props) {
    let {id} = useParams();
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const apiUrl = 'http://localhost:8082/api/v1/public/doctor/byAppointments/' + id;
        axios.get(apiUrl).then((resp) => {
            const data = resp.data;
            setDoctors(data);
            console.log(data);
        }).catch(err => {
            console.error(err)
        });
    }, [setDoctors]);
    return (
        <Row>

            <Col sm={2}>
                <LeftMenu/>
            </Col>
            <Col sm={1}></Col>
            <Col sm={7}>
                <h2 style={{color: "blue"}}>List Doctors</h2>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Second Name</th>
                        <th>Last Name</th>
                        <th>Specialization</th>
                        <th>Check out</th>
                    </tr>
                    </thead>
                    <tbody> {doctors.map((d) => (
                        <tr>
                            <td>{d.firstName}</td>
                            <td>{d.secondName}</td>
                            <td>{d.lastName}</td>
                            <td>{d.specialization}</td>
                            <td><Button variant="primary" className="me-3" href={`/scheduleDoctor/${d.id}`}>Schedule</Button></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>


            </Col>
        </Row>
    );
}

export default AppointmentDetails;