import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import teethDepart from "../asserts/teethDepart.jpg"
import operationDepart from "../asserts/operationDepart.jpg"
import terapDepart from "../asserts/TerapDepart.jpg"
import laboratory from "../asserts/laboratory.jpg"
import axios from "axios";
import {Link} from "react-router-dom";

function Depart(props) {
    const [departments,setDepartments]=useState([]);
    const img=[teethDepart,operationDepart,terapDepart,laboratory];
    useEffect(() => {
        const apiUrl = 'http://localhost:8082/api/v1/public/category';
        axios.get(apiUrl).then((resp) => {
            const data = resp.data;
            setDepartments(data);
        }).catch(err=>{console.error(err)});
    }, [setDepartments]);


    return (
        <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
            <Row>
                {departments.map((d) => (
                    <Col key={d.id}>
                        <Card style={{width: '18rem', height: '26rem', marginTop: '2px'}}>
                            <Card.Img variant='top' src={img[d.id-1]}/>
                            <Card.Body>
                                <Card.Title>{d.name}</Card.Title>
                                <Card.Text>{d.description}</Card.Text>
                                <Link style={{color: 'green'}} to={`/departDetails/${d.id}`}> <Button variant='primary'>Details</Button> </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Depart;