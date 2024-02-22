import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from "react-router-dom";

function CustomModal({ show, onHide }) {
    const { id } = useParams(); // Используйте id при необходимости для запросов к API
    const [formData, setFormData] = useState({
        phone: '',
        full_name: '',
        doctor_name: '',
        message: '',
        user_id: id // Добавлено user_id в состояние формы
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Убедитесь, что user_id обновляется, если id изменится во время жизненного цикла компонента
    // Это может быть полезно, если компонент используется на странице, где id может изменяться без перезагрузки компонента
    React.useEffect(() => {
        setFormData(formData => ({ ...formData, user_id: id }));
    }, [id]);

    const sendDataToServer = () => {
        const apiUrl = `http://your-api-endpoint.com/api/path`; // Замените на ваш фактический API endpoint
        axios.post(apiUrl, formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}` // Если требуется авторизация
            }
        })
            .then(response => {
                console.log(response.data);
                onHide(); // Закрыть модальное окно при успехе
            })
            .catch(error => {
                console.error("There was an error!", error);
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
