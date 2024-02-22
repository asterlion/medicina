package com.client.services.impl;

import com.core.convertors.ClientDtoToClientConvertor;
import com.core.convertors.ClientToClientDtoConvertor;
import com.core.dto.ClientDto;
import com.core.repositories.ClientRepository;
import com.client.services.ClientService;
import com.core.enums.UserRole;
import com.core.models.Client;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class ClientServiceImpl implements ClientService {
    private final ClientRepository clientRepository;
    private final ClientDtoToClientConvertor clientDtoToClientConvertor;
    private final ClientToClientDtoConvertor clientToClientDtoConvertor;
    private final PasswordEncoder passwordEncoder;

    public ClientDto registration(ClientDto clientDto) {
        Client convert = clientDtoToClientConvertor.convert(clientDto);
        Set<UserRole> userRoles = new HashSet<>();
        userRoles.add(UserRole.ROLE_CLIENT);
        convert.setUserRoles(userRoles);
        convert.setActive(true);
        convert.setPassword(passwordEncoder.encode(convert.getPassword()));
        Client save = clientRepository.save(convert);
        save.setPassword(null);
        return clientToClientDtoConvertor.convert(save);
    }
}