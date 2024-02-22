package com.clinic.services;

import com.clinic.dto.AppointmentDto;
import com.core.dto.AppointmentByDoctorDto;

import java.util.List;

public interface AppointmentClinicService {
    void addAppointment(AppointmentDto appointment);

    List<AppointmentByDoctorDto> getAppointmentDoctorList(Long id);
}