package com.core.controllers;

import com.core.dto.DoctorDto;
import com.core.services.impl.DoctorServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/public/doctor")
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:3006", "http://localhost:3000"})
public class DoctorPublicController {
    private final DoctorServiceImpl doctorService;

    @GetMapping("/byAppointments/{appointmentId}")
    public List<DoctorDto> doctorsByAppointment(@PathVariable Integer appointmentId) {
        return doctorService.getDoctorsByAppointments(appointmentId);
    }
    @GetMapping("/{id}")
    public DoctorDto doctorById(@PathVariable Long id) {
        return doctorService.getDoctorById(id);
    }
}