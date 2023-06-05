package com.flowery.ServiceProduct.service;

import com.flowery.ServiceProduct.model.dto.ProductDTO;
import com.flowery.ServiceProduct.model.entity.Product;
import com.flowery.ServiceProduct.repository.CategoryRepository;
import com.flowery.ServiceProduct.repository.ProductRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImp implements ProductService {
    private final ProductRepository productRepository;

    @Autowired
    public ProductServiceImp(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Product createProduct(ProductDTO dto) {
        Product product = new Product();
        BeanUtils.copyProperties(dto, product);
        return productRepository.save(product);
    }

    @Override
    public List<ProductDTO> findAll() {
        List<Product> products = productRepository.findAll();
        return convertToDTOs(products);
    }

    @Override
    public Product updateProduct(Long productId, ProductDTO productDTO) {
        Product existingProduct = getProductById(productId);
        BeanUtils.copyProperties(productDTO, existingProduct);
        return productRepository.save(existingProduct);
    }

    @Override
    public Product getProductById(Long productId) {
        return productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }

    @Override
    public void deleteProduct(Long productId) {
        Product existingProduct = getProductById(productId);
        productRepository.delete(existingProduct);
    }

    @Override
    public List<ProductDTO> getProductsByCategoryID(Long categoryId) {
        List<Product> products = productRepository.findByCategoryId(categoryId);
        return convertToDTOs(products);
    }

    private List<ProductDTO> convertToDTOs(List<Product> products) {
        return products.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    private ProductDTO convertToDTO(Product product) {
        ProductDTO productDTO = new ProductDTO();
        BeanUtils.copyProperties(product, productDTO);
        return productDTO;
    }
}

