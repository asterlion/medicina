import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

function CustomModal({ show, onHide }) {
    const [formData, setFormData] = useState({
        phone: '',
        full_name: '',
        doctor_name: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const sendDataToServer = () => {
        const token = localStorage.getItem("token");

        if (!token) {
            console.error("Token not found");
            return;
        }

        axios.post("http://localhost:8080/api/v1/your-endpoint", formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log('Data sent successfully', response.data);
                onHide(); // Закрыть модальное окно при успешной отправке
            })
            .catch(error => {
                console.error('Error sending data', error);
            });
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Appointment Request</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Enter phone" name="phone" value={formData.phone} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="formFullName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter full name" name="full_name" value={formData.full_name} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="formDoctorName">
                        <Form.Label>Doctor Name</Form.Label>
                        <Form.Control type="text" placeholder="Doctor's name (optional)" name="doctor_name" value={formData.doctor_name} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter message (optional)" name="message" value={formData.message} onChange={handleInputChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
                <Button variant="primary" onClick={sendDataToServer}>Send Data</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CustomModal;
