package com.core.services;

import com.core.dto.CategoryDto;

import java.util.List;

public interface CategoryService {
    List<CategoryDto> getAllCategories();

    List<String> getAllTypeAppointmentsName();
}