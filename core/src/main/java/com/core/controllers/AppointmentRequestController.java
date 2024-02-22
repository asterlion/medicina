package com.core.controllers;

import com.core.models.AppointmentRequest;
import com.core.services.AppointmentRequestService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/appointmentRequests") // Добавлено указание версии API
@RequiredArgsConstructor // Генерирует конструктор для final полей (для инъекции зависимости)
@CrossOrigin(origins = {"http://localhost:3006","http://localhost:3000"}) // Если необходимо поддержать CORS
public class AppointmentRequestController {

    private final AppointmentRequestService service; // Lombok @RequiredArgsConstructor заменит явный конструктор

    @PostMapping
    public AppointmentRequest createAppointmentRequest(@RequestBody AppointmentRequest request) {
        return service.saveAppointmentRequest(request);
    }
}
