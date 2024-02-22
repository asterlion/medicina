package com.core.services;

import com.core.dto.TypeAppointmentDto;

import java.util.List;

public interface TypeAppointmentService {
    List<TypeAppointmentDto> typeAppointmentsByDepart(Integer departId);
}