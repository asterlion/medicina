package com.core.convertors;

import com.core.dto.ClientDto;
import com.core.models.Client;
import org.springframework.stereotype.Component;

@Component
public class ClientDtoToClientConvertor extends Convertor<ClientDto, Client> {

    @Override
    public Client convert(ClientDto dto) {
        return super.modelMapper.map(dto, Client.class);
    }
}