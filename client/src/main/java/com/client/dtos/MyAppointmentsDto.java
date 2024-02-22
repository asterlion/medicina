package com.client.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MyAppointmentsDto {
    private String doctorName;
    private String typeAppointment;
    private LocalDateTime time;
    private String status;
}
