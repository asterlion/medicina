package com.core.convertors;

import com.core.dto.ClientDto;
import com.core.models.Client;
import org.springframework.stereotype.Component;

@Component
public class ClientToClientDtoConvertor extends Convertor<Client, ClientDto> {
    @Override
    public ClientDto convert(Client client) {
        return super.modelMapper.map(client, ClientDto.class);
    }
}