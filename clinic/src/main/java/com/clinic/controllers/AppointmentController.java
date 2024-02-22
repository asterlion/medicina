package com.clinic.controllers;

import com.clinic.dto.AppointmentDto;
import com.clinic.services.impl.AppointmentClinicServiceImpl;
import com.core.dto.AppointmentByDoctorDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/clinic/appointment")
@CrossOrigin("http://localhost:3006")
@RequiredArgsConstructor
public class AppointmentController {
    private final AppointmentClinicServiceImpl appointmentClinicService;

    @PostMapping
    public List<AppointmentByDoctorDto> setAppointment(@RequestBody AppointmentDto appointment){
        appointmentClinicService.addAppointment(appointment);
        return appointmentClinicService.getAppointmentDoctorList(appointment.getDoctorId());

    }
    @GetMapping("/byDoctor/{id}")
    public List<AppointmentByDoctorDto> getAppointmentByDoctor(@PathVariable Long id){
        return appointmentClinicService.getAppointmentDoctorList(id);
    }

}