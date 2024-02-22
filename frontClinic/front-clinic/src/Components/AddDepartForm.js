import React, {useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import LeftMenuAdmin from "./LeftMenuAdmin";
import axios from "axios";
function AddDepartForm(props) {
    const [name,setName]=useState();
    const [description,setDescription]=useState();
    const [file, setFile] = useState();

    function handleAddDepart(e) {
        e.preventDefault()
        console.log(file)
        const url = 'http://localhost:8082/api/v1/admin/addDepart';
        axios.post(url, {
            name: name,
            description: description,
            file:file
        }, {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }).then(resp => console.log(resp))
            .catch(err=>alert("Check your role"))
    }


    return (
        <Row>
            <Col sm={2}>
                <LeftMenuAdmin/>
            </Col>
            <Col sm={8}>
                <Form className='my-lg-3'>
                    <Form.Group controlId="fromBasicText1">
                        <Form.Label>Login</Form.Label>
                        <Form.Control type="text" placeholder="Enter name department"
                                      onChange={(e) => setName(e.target.value)}/>
                        <Form.Text className='text-muted'>We'll never share your login</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="fromBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter description"
                                      onChange={(e) => setDescription(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="fromBasicText2">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="file" placeholder="Image"
                                      onChange={(e) =>setFile(e.target.files[0])}
                        />
                    </Form.Group>
                    <Button variant="primary" className="me-3 my-lg-3" onClick={handleAddDepart}>Add Department</Button>
                </Form>
            </Col>
        </Row>
    );
}

export default AddDepartForm;