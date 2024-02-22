import React from 'react';
import {Nav} from "react-bootstrap";

function LeftMenu(props) {
    return (
        <Nav variant="pils" className="flex-column mt-2">
            <Nav.Item>
                <Nav.Link href="/depart"><h2>Departments</h2></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/about"><h2>About Us</h2></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contacts"><h2>Contacts</h2></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/blog"><h2>Blog</h2></Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default LeftMenu;