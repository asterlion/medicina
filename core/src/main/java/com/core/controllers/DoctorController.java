package com.core.controllers;

import com.core.dto.DoctorDto;
import com.core.services.impl.DoctorServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/public/doctors")
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:3006","http://localhost:3000"})
public class DoctorController {
    private final DoctorServiceImpl doctorService;

    @GetMapping
    public List<DoctorDto> getDoctors(){
        return doctorService.getAll();
    }
}