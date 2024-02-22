package com.client.services;

import com.client.dtos.AppointmentClientDto;
import com.client.dtos.MyAppointmentsDto;
import com.core.dto.AppointmentByDoctorDto;

import java.util.List;

public interface AppointmentClientService {
    List<AppointmentByDoctorDto> getAppointmentDoctorList(Long id);

    void addAppointment(AppointmentClientDto appointment);

    List<MyAppointmentsDto> getMyAppointmentList(String userName);
}