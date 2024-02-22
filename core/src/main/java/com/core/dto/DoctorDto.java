package com.core.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class DoctorDto {
    private Long id;
    private String login;
    private String password;
    private String firstName;
    private String secondName;
    private String lastName;
    private String specialization;
    private String typeAppointment;
    private Boolean active;
}