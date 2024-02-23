import React, { useState } from 'react';
import { Modal, Button, Form, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';

const CustomModal = ({ show, onHide }) => {
    const [formData, setFormData] = useState({
        phone: '',
        full_name: '',
        doctor_name: '',
        message: '',
    });
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const handleInputChange = (event) => {
        const { name, value } = event.target; // Destructure the name and value from the event target
        setFormData(prevState => ({
            ...prevState,
            [name]: value // Dynamically update the right property in your state based on the input name
        }));
    };

    const validateFormData = () => {
        // Простая валидация: проверяем, что обязательные поля не пустые
        if (!formData.phone || !formData.full_name) {
            setError('Phone and Full Name are required.');
            return false;
        }
        return true;
    };

    const sendDataToServer = async () => {
        // Предполагаем, что токен хранится в localStorage
        const token = localStorage.getItem('token');

        if (!token) {
            setError('Authentication token is missing. Please login again.');
            setIsLoading(false);
            return;
        }

        if (!validateFormData()) return; // Проверяем данные перед отправкой

        setIsLoading(true); // Показываем индикатор загрузки
        setError(''); // Очищаем ошибки

        try {
            const apiUrl = 'http://localhost:8082/api/v1/appointmentRequests/';
            const response = await axios.post(apiUrl, formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                },
            });
            console.log(response.data);
            setIsSuccess(true); // Успешное завершение
        } catch (error) {
            console.error("There was an error!", error);
            setError(`An error occurred while sending data: ${error.response ? error.response.data.message : error.message}`);
        } finally {
            setIsLoading(false); // Скрываем индикатор загрузки
        }
    };

// Далее, ваш компонент продолжает работать как обычно, используя обновленную функцию `sendDataToServer`

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

                    <Form.Group controlId="formDoctorName">
                        <Form.Label>Doctor Name</Form.Label>
                        <Form.Control type="text" placeholder="Doctor's name (optional)" name="doctor_name" value={formData.doctor_name || ''} onChange={handleInputChange} />
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
