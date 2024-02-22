package com.core.services.impl;

import com.core.convertors.DoctorDtoToDoctorConvertor;
import com.core.convertors.DoctorToDoctorDtoConvertor;
import com.core.dto.DoctorDto;
import com.core.enums.UserRole;
import com.core.models.Doctor;
import com.core.models.TypeAppointment;
import com.core.repositories.DoctorRepository;
import com.core.repositories.TypeAppointmentRepository;
import com.core.services.DoctorService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor

public class DoctorServiceImpl implements DoctorService {
    private final DoctorRepository doctorRepository;
    private final TypeAppointmentRepository typeAppointmentRepository;
    private final DoctorDtoToDoctorConvertor doctorDtoToDoctorConvertor;
    private final DoctorToDoctorDtoConvertor doctorToDoctorDtoConvertor;
    private final PasswordEncoder passwordEncoder;


    @Override
    public DoctorDto addDoctor(DoctorDto doctorDto) {
        Optional<TypeAppointment> typeAppointmentByName = typeAppointmentRepository.findTypeAppointmentByName(doctorDto.getTypeAppointment());
        Doctor convert = doctorDtoToDoctorConvertor.convert(doctorDto);
        if (typeAppointmentByName.isPresent()) {
            convert.setTypeAppointment(typeAppointmentByName.get());
        }
        convert.setPassword(passwordEncoder.encode(convert.getPassword()));
        convert.getUserRoles().add(UserRole.ROLE_DOCTOR);
        Doctor save = doctorRepository.save(convert);
        return doctorToDoctorDtoConvertor.convert(save);
    }

    @Override
    public List<DoctorDto> getDoctorsByAppointments(Integer appointmentId) {
        return doctorRepository.findAll()
                .stream()
                .filter(doctor -> doctor.getTypeAppointment().getId() == appointmentId)
                .map(doctorToDoctorDtoConvertor::convert)
                .toList();

    }
//для вывода ФИО доктора в календаре
    @Override
    public DoctorDto getDoctorById(Long doctorId) {
        return doctorRepository.findById(doctorId)
                .map(doctorToDoctorDtoConvertor::convert)
                .orElseThrow(() -> new RuntimeException("Doctor with id " + doctorId + " didn't find"));
    }

    @Override
    public List<DoctorDto> getAll() {
        return doctorRepository.findAll()
                .stream()
                .map(doctorToDoctorDtoConvertor::convert)
                .toList();
    }
}