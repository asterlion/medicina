package com.core.controllers;

import com.core.dto.AppointmentRequestDTO;
import com.core.models.AppointmentRequest;
import com.core.repositories.DoctorRepository;
import com.core.services.AppointmentRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("appointmentRequests")
public class AppointmentRequestController {

    private final AppointmentRequestService appointmentRequestService;
    private final DoctorRepository doctorRepository; //

    @Autowired
    public AppointmentRequestController(AppointmentRequestService appointmentRequestService, DoctorRepository doctorRepository) {
        this.appointmentRequestService = appointmentRequestService;
        this.doctorRepository = doctorRepository;
    }

    @PostMapping
    public ResponseEntity<AppointmentRequest> createAppointmentRequest(@RequestBody AppointmentRequestDTO requestDTO) {
        AppointmentRequest request = new AppointmentRequest();
        request.setPhone(requestDTO.getPhone());
        request.setFullName(requestDTO.getFullName());
        request.setMessage(requestDTO.getMessage());

        // Находим доктора по ID и устанавливаем его в запрос
        doctorRepository.findById(requestDTO.getDoctorId()).ifPresent(request::setDoctor);

        AppointmentRequest savedRequest = appointmentRequestService.saveAppointmentRequest(request);
        return ResponseEntity.ok(savedRequest);
    }
}
