import React, {useEffect, useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import LeftMenu from "./LeftMenu";
import axios from "axios";
import Table from "react-bootstrap/Table";


function ClientAppointment(props) {
    const [listAppointment, setListAppointment] = useState([]);

    useEffect(() => {
        const apiUrl = 'http://localhost:8080/api/v1/client/appointment/myAppointments';
        ;

        axios.get(apiUrl, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        })
            .then((resp) => {
                const data = resp.data;
                setListAppointment(data);
            }).catch(err => {
            console.error(err)
        });
    }, [setListAppointment]);

    return (
        <Row>
            <Col sm={2}>
                <LeftMenu/>
            </Col>
            <Col sm={1} className="bg-light"></Col>
            <Col sm={8}>
                <h2 style={{color: "blue"}}>MyAppointments</h2>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Doctor</th>
                        <th>Appointment</th>
                        <th>Time</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody> {listAppointment.map((d) => (
                        <tr>
                            <td>{d.doctorName}</td>
                            <td>{d.typeAppointment}</td>
                            <td>{d.time}</td>
                            <td>{d.status}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <Col sm={1} className="bg-light"></Col>
            </Col>
        </Row>
    );
}

export default ClientAppointment;