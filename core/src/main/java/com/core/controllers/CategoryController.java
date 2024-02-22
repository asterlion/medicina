package com.core.controllers;

import com.core.dto.CategoryDto;
import com.core.dto.DoctorDto;
import com.core.dto.TypeAppointmentDto;
import com.core.services.DoctorService;
import com.core.services.impl.CategoryServiceImpl;
import com.core.services.impl.DoctorServiceImpl;
import com.core.services.impl.TypeAppointmentServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/public/category")
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:3006","http://localhost:3000"})
public class CategoryController {
    private final CategoryServiceImpl categoryService;
    private final DoctorServiceImpl doctorService;
    private final TypeAppointmentServiceImpl typeAppointmentService;
    @GetMapping
    public List<CategoryDto> getAll(){
        List<CategoryDto> allCategories = categoryService.getAllCategories();
        return allCategories;
    }
    @GetMapping("/typeAppointmentsNames")
    public List<String> getAllTypeAppointmentsName(){
        List<String> typeAppointmentsNames=  categoryService.getAllTypeAppointmentsName();
        return typeAppointmentsNames;
    }
    @GetMapping("/departDetails/{departId}")
    public List<TypeAppointmentDto> appointments(@PathVariable Integer departId){
        List<TypeAppointmentDto> appointments=typeAppointmentService.typeAppointmentsByDepart(departId);
        return appointments;
    }
}