package com.client.controllers;

import com.client.dtos.AppointmentClientDto;
import com.client.dtos.MyAppointmentsDto;
import com.client.sevices.impl.AppointmentClientServiceImpl;
import com.core.dto.AppointmentByDoctorDto;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/v1/client/appointment")
@CrossOrigin("http://localhost:3000")
@RequiredArgsConstructor
public class AppointmentClientController {
    private final AppointmentClientServiceImpl appointmentClientService;

    @GetMapping("/byDoctor/{id}")
    public List<AppointmentByDoctorDto> getAppointmentByDoctor(@PathVariable Long id){
        return appointmentClientService.getAppointmentDoctorList(id);
    }
    @PostMapping
    public List<AppointmentByDoctorDto> setAppointment(@RequestBody AppointmentClientDto appointment){
        appointmentClientService.addAppointment(appointment);
        return appointmentClientService.getAppointmentDoctorList(appointment.getDoctorId());
    }
    @GetMapping("/myAppointments")
    public List<MyAppointmentsDto> getMyAppointments(Principal principal){
        String userName = (String) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        return appointmentClientService.getMyAppointmentList(userName);
    }
}