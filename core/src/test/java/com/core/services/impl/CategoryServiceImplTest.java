package com.core.services.impl;

import com.core.convertors.CategoryToCategoryDtoConvertor;
import com.core.convertors.TypeAppointmentToTypeAppointmentDtoConvertor;
import com.core.models.Category;
import com.core.models.TypeAppointment;
import com.core.repositories.CategoryRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@ExtendWith(MockitoExtension.class)
class CategoryServiceImplTest {

    @Mock
    private CategoryRepository repository;

    @Test
    void getAllCategories() {
        List<Category> categories=List.of(new Category(),new Category());
        Mockito.when(repository.findAll()).thenReturn(categories);
        TypeAppointmentToTypeAppointmentDtoConvertor typeAppointmentToTypeAppointmentDtoConvertor=new TypeAppointmentToTypeAppointmentDtoConvertor();
        CategoryToCategoryDtoConvertor convertor=new CategoryToCategoryDtoConvertor(typeAppointmentToTypeAppointmentDtoConvertor);
        CategoryServiceImpl categoryService=new CategoryServiceImpl(repository,convertor);
        assertEquals(2,categoryService.getAllCategories().size());
    }

    @Test
    void getAllTypeAppointmentsName() {
        List<Category> categories=List.of(new Category(1,"first", null,List.of(new TypeAppointment(1,"typeFirst",null,null,null,null),new TypeAppointment()),null),new Category());
        Mockito.when(repository.findAll()).thenReturn(categories);
        TypeAppointmentToTypeAppointmentDtoConvertor typeAppointmentToTypeAppointmentDtoConvertor=new TypeAppointmentToTypeAppointmentDtoConvertor();
        CategoryToCategoryDtoConvertor convertor=new CategoryToCategoryDtoConvertor(typeAppointmentToTypeAppointmentDtoConvertor);
        CategoryServiceImpl categoryService=new CategoryServiceImpl(repository,convertor);
        String typeName = categoryService.getAllTypeAppointmentsName().get(0);
        assertEquals("typeFirst",typeName);
    }
}