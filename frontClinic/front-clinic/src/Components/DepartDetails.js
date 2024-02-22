import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import LeftMenu from "./LeftMenu";
import axios from "axios";

function DepartDetails(props) {
    let {id} = useParams();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const apiUrl = 'http://localhost:8082/api/v1/public/category/departDetails/' + id;
        axios.get(apiUrl).then((resp) => {
            const data = resp.data;
            setAppointments(data);
        }).catch(err => {
            console.error(err)
        });
    }, [setAppointments]);
    return (
        <Row>
            <Col sm={2}>
                <LeftMenu/>
            </Col>
            <Col sm={8}>
                <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
                    <Row>
                        {appointments.map((d) => (
                            <Col key={d.id}>
                                <Card style={{width: '18rem', height: '26rem', marginTop: '2px'}}>
                                    <Card.Body>
                                        <Card.Title>{d.name}</Card.Title>
                                        <Card.Text>{d.description}</Card.Text>
                                        <Link style={{color: 'green'}} to={`/appointmentDetails/${d.id}`}> <Button variant='primary'>Details</Button> </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>

            </Col>
        </Row>

    );
}

export default DepartDetails;