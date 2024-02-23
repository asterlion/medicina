import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';

const CustomModal = ({ show, onHide }) => {
    const [formData, setFormData] = useState({
        phone: '',
        full_name: '',
        doctorId: '',
        message: '',
    });

    const [doctors, setDoctors] = useState([]);
    const [doctor, setDoctor] = useState();

    useEffect(() => {
        const apiUrl = 'http://localhost:8082/api/v1/public/doctors';
        axios.get(apiUrl).then((resp) => {
            const data = resp.data;
            setDoctors(data);
        }).catch(err => {
            console.error(err);
        });
    }, []);

    useEffect(() => {
        if (doctor) {
            setFormData(prevState => ({
                ...prevState,
                doctorId: doctor
            }));
        }
    }, [doctor]);

    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateFormData = () => {
        if (!formData.phone || !formData.full_name) {
            setError('Phone and Full Name are required.');
            return false;
        }
        return true;
    };

    const sendDataToServer = async () => {
        if (!validateFormData()) return;

        setIsLoading(true);
        setError('');

        try {
            const apiUrl = 'http://localhost:8082/api/v1/appointmentRequests';
            const response = await axios.post(apiUrl, formData, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            setIsSuccess(true);
        } catch (error) {
            console.error("There was an error!", error);
            setError(`An error occurred while sending data: ${error.response ? error.response.data.message : error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Appointment Request</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form>
                    <Form.Group controlId="formPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Enter phone" name="phone" value={formData.phone || ''} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="formFullName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter full name" name="full_name" value={formData.full_name || ''} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="formDoctor">
                        <Form.Label>Choose Doctor</Form.Label>
                        <Form.Select value={doctor} onChange={(e) => setDoctor(e.target.value)} aria-label="Select doctor">
                            <option value="">Select a doctor...</option>
                            {doctors.map((item) => (
                                <option key={item.id} value={item.id}>{item.lastName}, {item.specialization}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter message (optional)" name="message" value={formData.message || ''} onChange={handleInputChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
                <Button variant="primary" onClick={sendDataToServer} disabled={isLoading}>
                    {isLoading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Send Data'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CustomModal;
