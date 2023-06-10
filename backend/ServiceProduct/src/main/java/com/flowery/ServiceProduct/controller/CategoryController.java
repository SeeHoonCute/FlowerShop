package com.flowery.ServiceProduct.controller;

import com.flowery.ServiceProduct.model.ResponseObject;
import com.flowery.ServiceProduct.model.dto.CategoryDTO;
import com.flowery.ServiceProduct.model.dto.VariantDTO;
import com.flowery.ServiceProduct.model.entity.Category;
import com.flowery.ServiceProduct.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {
    @Autowired(required = true)
    private CategoryService categoryService;

    @PostMapping
    public ResponseEntity<ResponseObject> createCategory(@RequestBody CategoryDTO categoryDTO) {
        Category category = categoryService.createCategory(categoryDTO);
        if (category == null) {
            return new ResponseEntity<>(
                    new ResponseObject("failed", "Failed to create category", ""),
                    HttpStatus.BAD_REQUEST
            );
        }
        return new ResponseEntity<>(
                new ResponseObject("success", "Category created successfully", category),
                HttpStatus.CREATED
        );
    }

    @PutMapping("/{categoryId}")
    public  ResponseEntity<ResponseObject> updateCategory(@PathVariable Long categoryId,
                                                          @RequestBody CategoryDTO categoryDTO){
        Category category = categoryService.updateCategory(categoryId, categoryDTO);
        return new ResponseEntity<>(
                new ResponseObject("success", "Category updated successfully", category),
                HttpStatus.OK
        );
    }

    @DeleteMapping("/{categoryId}")
    public ResponseEntity<ResponseObject> deleteCategory(@PathVariable Long categoryId) {
        categoryService.deleteCategory(categoryId);
        return new ResponseEntity<>(
                new ResponseObject("success", "Product deleted successfully", null),
                HttpStatus.NO_CONTENT
        );
    }

    @GetMapping("/{categoryId}")
    public ResponseEntity<ResponseObject> getCategoryById(@PathVariable Long categoryId) {
        Category category = categoryService.getCategoryId(categoryId);
        if (category == null) {
            return new ResponseEntity<>(
                    new ResponseObject("error", "Category not found", null),
                    HttpStatus.NOT_FOUND
            );
        }
        return new ResponseEntity<>(
                new ResponseObject("success", "Category retrieved successfully", category),
                HttpStatus.OK
        );
    }


    @GetMapping
    public ResponseObject findAll(){
        List<CategoryDTO> categoryDTOList = categoryService.findAll();
        if (!categoryDTOList.isEmpty()) {
            return new ResponseObject("success", "All variants retrieved", categoryDTOList);
        }
        return new ResponseObject("error", "No variants found", null);
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<ResponseObject> getCategoriesByProductId(@PathVariable Long productId) {
        List<CategoryDTO> categories = categoryService.getCategoriesByProductId(productId);
        if (categories.isEmpty()) {
            return new ResponseEntity<>(
                    new ResponseObject("error", "No categories found for the product", null),
                    HttpStatus.NOT_FOUND
            );
        }
        return new ResponseEntity<>(
                new ResponseObject("success", "Categories retrieved successfully", categories),
                HttpStatus.OK
        );
    }
}
