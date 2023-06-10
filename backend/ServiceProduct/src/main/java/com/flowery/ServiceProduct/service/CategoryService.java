package com.flowery.ServiceProduct.service;

import com.flowery.ServiceProduct.model.dto.CategoryDTO;
import com.flowery.ServiceProduct.model.entity.Category;

import java.util.List;

public interface CategoryService {

    Category createCategory(CategoryDTO dto);
    Category getCategoryId(Long categoryId);

    Category updateCategory(Long categoryID, CategoryDTO dto);

    void deleteCategory(Long categoryId);
    List<CategoryDTO> findAll() ;

    List<CategoryDTO> getCategoriesByProductId(Long productId);
}
