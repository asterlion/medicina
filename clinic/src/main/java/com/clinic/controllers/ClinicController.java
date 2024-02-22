package com.clinic.controllers;

import com.clinic.services.ClinicService;
import com.core.models.User;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ClinicController {
    private final ClinicService clinicService;
    @GetMapping("/users")
    public List<User> getAllUsers(){
        return clinicService.getAllUsers();
    }
}
