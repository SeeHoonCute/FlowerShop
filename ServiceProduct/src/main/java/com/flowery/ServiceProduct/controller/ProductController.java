package com.flowery.ServiceProduct.controller;


import com.flowery.ServiceProduct.model.ResponseObject;
import com.flowery.ServiceProduct.model.dto.ProductDTO;
import com.flowery.ServiceProduct.model.entity.Product;
import com.flowery.ServiceProduct.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired(required = true) // đối tượng sẽ được tạo ra sau khi app khởi động
    private ProductService productService;


    @GetMapping
    public ResponseObject findAll(){
        List<ProductDTO> productDTOList = productService.findAll();
        if (productDTOList.isEmpty()) {
            return  new ResponseObject("error", "No products found", null);
        }
        return new ResponseObject("success", "All products retrieved", productDTOList);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<ResponseObject> getProductById(@PathVariable Long productId) {
        Product product = productService.getProductById(productId);
        if (product == null) {
            return new ResponseEntity<>(
                    new ResponseObject("failed", "Product does not exist", ""),
                    HttpStatus.NOT_FOUND
            );
        }
        return new ResponseEntity<>(
                new ResponseObject("success", "Product retrieved successfully", product),
                HttpStatus.OK
        );
    }

    @PostMapping
    public ResponseEntity<ResponseObject> createProduct(@RequestBody ProductDTO productDTO) {
        Product createdProduct = productService.createProduct(productDTO);
        if (createdProduct == null) {
            return new ResponseEntity<>(
                    new ResponseObject("failed", "Failed to create product", ""),
                    HttpStatus.BAD_REQUEST
            );
        }
        return new ResponseEntity<>(
                new ResponseObject("success", "Product created successfully", createdProduct),
                HttpStatus.CREATED
        );
    }

    @PutMapping("/{productId}")
    public ResponseEntity<ResponseObject> updateProduct(
            @PathVariable Long productId, @RequestBody ProductDTO productDTO) {

        Product updatedProduct = productService.updateProduct(productId, productDTO);
        return new ResponseEntity<>(
                new ResponseObject("success", "Product updated successfully", updatedProduct),
                HttpStatus.OK
        );
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<ResponseObject> deleteProduct(@PathVariable Long productId) {

        productService.deleteProduct(productId);
        return new ResponseEntity<>(
                new ResponseObject("success", "Product deleted successfully", null),
                HttpStatus.NO_CONTENT
        );
    }

    // GET /api/products?categoryId={category_id}
    @GetMapping("/")
    public ResponseEntity<ResponseObject> getProductByCategoryId(@RequestParam("categoryId") Long CategoryId) {
        List<ProductDTO> productDTOS = productService.getProductsByCategoryID(CategoryId);
        return ResponseEntity.ok(new ResponseObject("success", "Products retrieved successfully", productDTOS));
    }
}
