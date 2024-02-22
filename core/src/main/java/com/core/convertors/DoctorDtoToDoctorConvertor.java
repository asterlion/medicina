package com.core.convertors;

import com.core.dto.DoctorDto;
import com.core.models.Doctor;
import org.springframework.stereotype.Component;

@Component
public class DoctorDtoToDoctorConvertor extends Convertor<DoctorDto, Doctor> {
    @Override
    public Doctor convert(DoctorDto doctorDto) {
        return super.modelMapper.map(doctorDto, Doctor.class);
    }
}