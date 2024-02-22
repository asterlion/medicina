package com.core.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AppointmentByDoctorDto {
    private String title;
    private LocalDateTime start;
    private LocalDateTime end;
    private String description;
}