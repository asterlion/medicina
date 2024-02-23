package com.core.dto;

public class AppointmentRequestDTO {
    private String phone;
    private String fullName;
    private Long doctorId; // Идентификатор доктора для связи
    private String message;

    public AppointmentRequestDTO(String phone, String fullName, Long doctorId, String message) {
        this.phone = phone;
        this.fullName = fullName;
        this.doctorId = doctorId;
        this.message = message;
    }

    // Пустой конструктор, если потребуется для фреймворков
    public AppointmentRequestDTO() {
    }

    // Геттеры
    public String getPhone() {
        return phone;
    }

    public String getFullName() {
        return fullName;
    }

    public Long getDoctorId() {
        return doctorId;
    }

    public String getMessage() {
        return message;
    }

    // Сеттеры
    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setDoctorId(Long doctorId) {
        this.doctorId = doctorId;
    }

    public void setMessage(String message) {
        this.message = message;
    }

}
