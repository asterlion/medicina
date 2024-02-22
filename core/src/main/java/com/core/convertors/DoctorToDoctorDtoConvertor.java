package com.core.convertors;

import com.core.dto.DoctorDto;
import com.core.models.Doctor;
import org.springframework.stereotype.Component;

@Component
public class DoctorToDoctorDtoConvertor extends Convertor<Doctor, DoctorDto> {
    @Override
    public DoctorDto convert(Doctor doctor) {
        return super.modelMapper.map(doctor, DoctorDto.class);
    }
}