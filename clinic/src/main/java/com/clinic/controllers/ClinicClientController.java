package com.clinic.controllers;

import com.clinic.services.impl.ClinicClientServiceImpl;
import com.core.dto.ClientDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/clinic/clients")
@RequiredArgsConstructor
public class ClinicClientController {
    private final ClinicClientServiceImpl clinicClientService;

    @GetMapping
    public ResponseEntity<List<ClientDto>> getAllClients() {
        return new ResponseEntity<>(clinicClientService.getAllClients(), HttpStatus.OK);
    }
}