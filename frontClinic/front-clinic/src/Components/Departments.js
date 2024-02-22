import React from 'react';
import Depart from "./Depart";
import {Col, Row} from "react-bootstrap";
import LeftMenu from "./LeftMenu";

function Departments(props) {
    return (
        <Row>
            <Col sm={2}>
                <LeftMenu/>
            </Col>
            <Col sm={8}>
                <Depart/>
            </Col>
        </Row>

    );
}

export default Departments;