package com.core.services.impl;

import com.core.convertors.TypeAppointmentToTypeAppointmentDtoConvertor;
import com.core.dto.TypeAppointmentDto;
import com.core.models.TypeAppointment;
import com.core.repositories.TypeAppointmentRepository;
import com.core.services.TypeAppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class TypeAppointmentServiceImpl implements TypeAppointmentService {
    private final TypeAppointmentRepository typeAppointmentRepository;
    private final TypeAppointmentToTypeAppointmentDtoConvertor typeAppointmentToTypeAppointmentDtoConvertor;

    @Override
    public List<TypeAppointmentDto> typeAppointmentsByDepart(Integer departId) {
        List<TypeAppointment> typeAppointmentsByCategory = typeAppointmentRepository.findAll();
        return typeAppointmentsByCategory
                .stream()
                .filter(typeAppointment -> typeAppointment.getCategory().getId()==departId)
                .map(typeAppointmentToTypeAppointmentDtoConvertor::convert)
                .toList();
    }
}