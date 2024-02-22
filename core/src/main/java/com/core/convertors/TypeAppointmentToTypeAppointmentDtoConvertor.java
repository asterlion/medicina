package com.core.convertors;

import com.core.dto.TypeAppointmentDto;
import com.core.models.TypeAppointment;
import org.springframework.stereotype.Component;

@Component
public class TypeAppointmentToTypeAppointmentDtoConvertor extends Convertor<TypeAppointment, TypeAppointmentDto> {
    @Override
    public TypeAppointmentDto convert(TypeAppointment typeAppointment) {
        return super.modelMapper.map(typeAppointment, TypeAppointmentDto.class);
    }
}