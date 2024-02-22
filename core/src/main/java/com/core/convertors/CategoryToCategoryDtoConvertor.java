package com.core.convertors;

import com.core.dto.CategoryDto;
import com.core.dto.TypeAppointmentDto;
import com.core.models.Category;
import com.core.models.TypeAppointment;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class CategoryToCategoryDtoConvertor extends Convertor<Category, CategoryDto> {
    private final TypeAppointmentToTypeAppointmentDtoConvertor typeAppointmentToTypeAppointmentDtoConvertor;

    @Override
    public CategoryDto convert(Category category) {
        CategoryDto categoryDto = super.modelMapper.map(category, CategoryDto.class);
        List<TypeAppointmentDto> typeAppointments = category.getTypeAppointments()
                .stream()
                .map(typeAppointmentToTypeAppointmentDtoConvertor::convert)
                .toList();
        categoryDto.setAppointmentList(typeAppointments);
        return categoryDto;
    }
}