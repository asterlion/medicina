package com.core.services.impl;

import com.core.convertors.CategoryToCategoryDtoConvertor;
import com.core.dto.CategoryDto;
import com.core.dto.TypeAppointmentDto;
import com.core.repositories.CategoryRepository;
import com.core.services.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;
    private final CategoryToCategoryDtoConvertor categoryToCategoryDtoConvertor;

    @Override
    public List<CategoryDto> getAllCategories() {
        return categoryRepository.findAll().stream().map(categoryToCategoryDtoConvertor::convert).collect(Collectors.toList());
    }

    @Override
    public List<String> getAllTypeAppointmentsName() {
        return getAllCategories().stream()
                .map(CategoryDto::getAppointmentList)
                .flatMap(Collection::stream)
                .map(TypeAppointmentDto::getName)
                .toList();
    }
}