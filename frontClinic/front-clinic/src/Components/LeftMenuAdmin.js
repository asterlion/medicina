import React from 'react';
import {Nav} from "react-bootstrap";

function LeftMenuAdmin(props) {
    return (
        <Nav variant="pils" className="flex-column mt-2">
            <Nav.Item>
                <Nav.Link href="/addDoctor"><h2>Add Doctor</h2></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/addDepart"><h2>Add Depart</h2></Nav.Link>
            </Nav.Item>
{/*            <Nav.Item>
                <Nav.Link href="/addTypeAppointment"><h2>Add Type Appointment</h2></Nav.Link>
            </Nav.Item>*/}
            <Nav.Item>
                <Nav.Link href="/listDoctors"><h2>List Doctors</h2></Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default LeftMenuAdmin;