package com.clinic.services;

import com.core.dto.ClientDto;

import java.util.List;

public interface ClinicClientService {
    List<ClientDto> getAllClients();
}