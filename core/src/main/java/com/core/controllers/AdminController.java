package com.core.controllers;

import com.core.dto.CategoryDto;
import com.core.dto.DoctorDto;
import com.core.services.impl.DoctorServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

@RestController
@RequestMapping("/api/v1/admin")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ROLE_ADMIN')")
@CrossOrigin("http://localhost:3006")
@Slf4j
public class AdminController {
    private final DoctorServiceImpl doctorService;

    @PostMapping("/addDoctor")
    public ResponseEntity<DoctorDto> doctorRegistration(@RequestBody DoctorDto doctorDto) {
        DoctorDto dto = doctorService.addDoctor(doctorDto);
        log.info("Have been registered doctor with login " + dto.getLogin());
        return ResponseEntity.ok(doctorDto);
    }

    @PostMapping("/addDepart")
    public ResponseEntity<CategoryDto> addDepart(CategoryDto categoryDto, MultipartFile file) {
//        DoctorDto dto = doctorService.addDoctor(doctorDto);
//        log.info("Have been registered doctor with login " + dto.getLogin());
        return null;
    }
}