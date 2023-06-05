package com.flowery.ServiceProduct.service;

import com.flowery.ServiceProduct.model.dto.CategoryDTO;
import com.flowery.ServiceProduct.model.entity.Category;
import com.flowery.ServiceProduct.repository.CategoryRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImp implements CategoryService{
    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category createCategory(CategoryDTO dto) {
        Category category = new Category();
        BeanUtils.copyProperties(dto,category);
        return categoryRepository.save(category);
    }

    @Override
    public Category getCategoryId(Long categoryId) {
        return categoryRepository.findById(categoryId).orElseThrow(() -> new RuntimeException("Category not found"));
    }

    @Override
    public Category updateCategory(Long categoryID, CategoryDTO dto) {
        Category category = getCategoryId(categoryID);
        BeanUtils.copyProperties(dto, category);
        return categoryRepository.save(category);
    }

    @Override
    public void deleteCategory(Long categoryId) {
        Category category = getCategoryId(categoryId);
        categoryRepository.delete(category);
    }

    @Override
    public List<CategoryDTO> findAll() {
        return categoryRepository.findAll().stream()
                .map(category -> {
                    CategoryDTO categoryDTO = new CategoryDTO();
                    categoryDTO.setCategoryId(category.getCategoryId());
                    categoryDTO.setCategoryName(category.getCategoryName());
                    categoryDTO.setCategoryDescription(category.getCategoryDescription());
                    return categoryDTO;
                }).collect(Collectors.toList());
    }

}
