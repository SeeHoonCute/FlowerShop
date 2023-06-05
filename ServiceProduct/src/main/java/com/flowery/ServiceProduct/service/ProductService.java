package com.flowery.ServiceProduct.service;

import com.flowery.ServiceProduct.model.dto.ProductDTO;
import com.flowery.ServiceProduct.model.entity.Product;

import java.util.List;
import java.util.Map;

public interface ProductService {
    Product createProduct(ProductDTO dto);
    Product updateProduct(Long productId, ProductDTO productDTO);
    Product getProductById(Long productId);
    void deleteProduct(Long productId);
    List<ProductDTO> findAll() ;
    List<ProductDTO> getProductsByCategoryID(Long categoryId);

}
