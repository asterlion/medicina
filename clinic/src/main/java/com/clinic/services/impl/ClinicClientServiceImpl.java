package com.clinic.services.impl;

import com.clinic.services.ClinicClientService;
import com.core.convertors.ClientToClientDtoConvertor;
import com.core.dto.ClientDto;
import com.core.repositories.ClientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ClinicClientServiceImpl implements ClinicClientService {
    private final ClientRepository clientRepository;
    private final ClientToClientDtoConvertor clientToClientDtoConvertor;

    @Override
    public List<ClientDto> getAllClients() {
        List<ClientDto> clients = clientRepository.findAll().stream().map(clientToClientDtoConvertor::convert).toList();
        clients.forEach(clientDto -> clientDto.setPassword(null));
        return clients;
    }
}