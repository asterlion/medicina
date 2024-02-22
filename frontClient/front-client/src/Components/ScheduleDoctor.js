import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {Button, Form, Modal} from "react-bootstrap";
import axios from "axios";
import {jwtDecode} from "jwt-decode";


function ScheduleDoctor(props) {
    let {id} = useParams();
    const [show, setShow] = useState(false);
    const [listAppointment, setListAppointment] = useState([]);
    const handleClose = () => setShow(false);
    const techEvents = [
        {
            title: "Event",
            start: "2024-01-30T10:00:00Z",
            end: "2024-01-30T12:00:00Z",
            description: "app"

        }
    ]
    useEffect(() => {
        const apiUrl = 'http://localhost:8080/api/v1/client/appointment/byDoctor/'+ id;;

        axios.get(apiUrl,{headers:{
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }})
            .then((resp) => {
                const data = resp.data;
                setListAppointment(data);
            }).catch(err => {
            console.error(err)
        });
    }, [setListAppointment]);

    const handleDateClick = (e) => {
        setShow(true);
        console.log(e);

    };

    const handleEventClick = (e) => {
        setShow(true);
        console.log(e.event.start);
        console.log(jwtDecode(localStorage.getItem('token')).sub);

        axios.post("http://localhost:8080/api/v1/client/appointment", {
            doctorId: id,
            client:jwtDecode(localStorage.getItem('token')).sub,
            data:e.event.start

        },{headers:{
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }})
            .then(function (response) {
                setShow(response.data)
                handleClose();
            })
            .catch(function (error) {
                console.log(error);
                alert("Wrong credential")
            });

    };



    return (
        <div>
            <Fullcalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={"dayGridMonth"}
                headerToolbar={{
                    start: "today prev,next",
                    center: "title",
                    end: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                height={"90vh"}
                timeZone={'Europe/Minsk'}
                eventClick={handleEventClick}
                events={listAppointment}
                dateClick={handleDateClick}

            />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="primary" >Add</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ScheduleDoctor;