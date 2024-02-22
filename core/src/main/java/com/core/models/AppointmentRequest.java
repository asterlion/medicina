package com.core.models;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "appointment_requests")
public class AppointmentRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 255)
    private String phone;

    @Column(name = "full_name", nullable = false, length = 255)
    private String fullName;

    @Column(name = "doctor_name")
    private String doctorName;

    @Column
    private String message;

    @Column(name = "request_time")
    private Timestamp requestTime;

    // Getters and Setters
}

