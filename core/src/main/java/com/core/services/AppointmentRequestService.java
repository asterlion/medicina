package com.core.services;

import com.core.models.AppointmentRequest;
import com.core.repositories.AppointmentRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppointmentRequestService {

    private final AppointmentRequestRepository repository;

    @Autowired
    public AppointmentRequestService(AppointmentRequestRepository repository) {
        this.repository = repository;
    }

    public AppointmentRequest saveAppointmentRequest(AppointmentRequest request) {
        // Здесь может быть дополнительная логика перед сохранением
        return repository.save(request);
    }
}