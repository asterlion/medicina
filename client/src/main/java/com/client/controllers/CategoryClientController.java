package com.client.controllers;

import com.core.dto.CategoryDto;
import com.core.services.impl.CategoryServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/client/category")
@RequiredArgsConstructor
public class CategoryClientController {
    private final CategoryServiceImpl categoryService;
    @GetMapping
    public ResponseEntity<List<CategoryDto>>  getAll(){
        return ResponseEntity.ok(categoryService.getAllCategories())   ;
    }
}