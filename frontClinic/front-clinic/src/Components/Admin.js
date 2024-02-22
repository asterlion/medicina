import React from 'react';
import {Col, Row} from "react-bootstrap";
import LeftMenuAdmin from "./LeftMenuAdmin";

function Admin(props) {
    return (
        <Row>
            <Col sm={2}>
                <LeftMenuAdmin/>
            </Col>
            <Col sm={8}>

            </Col>
        </Row>

    );
}

export default Admin;