package com.client.controllers;


import com.client.services.impl.ClientServiceImpl;
import com.core.dto.ClientDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/client")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin("http://localhost:3000")
public class RegistrationController {
    private final ClientServiceImpl clientService;

    @PostMapping("/registration")
    public ResponseEntity<ClientDto> clientRegistration(@RequestBody ClientDto clientDto) {
        ClientDto registration = clientService.registration(clientDto);
        log.info("Have been registered client with login " + registration.getLogin());
        return ResponseEntity.ok(registration);
    }

}