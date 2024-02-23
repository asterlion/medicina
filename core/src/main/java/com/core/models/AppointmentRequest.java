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

    @ManyToOne
    private Doctor doctor;

    @Column
    private String message;

    @Column(name = "request_time")
    private Timestamp requestTime;

    public void setId(Long id) {
        this.id = id;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setRequestTime(Timestamp requestTime) {
        this.requestTime = requestTime;
    }

    // Геттеры
    public Long getId() {
        return id;
    }

    public String getPhone() {
        return phone;
    }

    public String getFullName() {
        return fullName;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public Timestamp getRequestTime() {
        return requestTime;
    }

    // Getters and Setters
}

