package com.flowery.ServiceProduct.controller;

import com.flowery.ServiceProduct.model.ResponseObject;
import com.flowery.ServiceProduct.model.dto.VariantDTO;
import com.flowery.ServiceProduct.model.entity.Variant;
import com.flowery.ServiceProduct.service.VariantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("variants")
public class VariantController {
    @Autowired
    VariantService variantService;

    @PostMapping
    public ResponseEntity<ResponseObject> createVariant(@RequestBody VariantDTO variantDTO) {
        Variant variant = variantService.createVariant(variantDTO);
        if (variant == null) {
            return new ResponseEntity<>(
                    new ResponseObject("failed", "Failed to create variant", ""),
                    HttpStatus.BAD_REQUEST
            );
        }
        return new ResponseEntity<>(
                new ResponseObject("success", "Variant created successfully", variant),
                HttpStatus.CREATED
        );
    }

    @PutMapping("/{variantId}")
    public ResponseEntity<ResponseObject> updateVariant(@PathVariable Long variantId,
                                                        @RequestBody VariantDTO variantDTO) {
        Variant updateVariant = variantService.updateVariant(variantId, variantDTO);
        return new ResponseEntity<>(
                new ResponseObject("success", "Variant updated successfully", updateVariant),
                HttpStatus.OK
        );
    }

    @DeleteMapping("/{variantId}")
    public ResponseEntity<ResponseObject> deleteVariant(@PathVariable Long variantId) {
        variantService.deleteVariant(variantId);
        return new ResponseEntity<>(
                new ResponseObject("success", "Product deleted successfully", null),
                HttpStatus.NO_CONTENT
        );
    }

    @GetMapping
    public ResponseObject findAll(){
        List<VariantDTO> variantDTOList = variantService.findAll();
        if (!variantDTOList.isEmpty()) {
            return new ResponseObject("success", "All variants retrieved", variantDTOList);
        }
        return new ResponseObject("error", "No variants found", null);
    }

    @GetMapping("/products/{product_id}/variants")
    public ResponseObject getProductVariants(@PathVariable("product_id") Long productId) {
        List<VariantDTO> variantDTOList = variantService.getProductVariants(productId);
        if (!variantDTOList.isEmpty()) {
            return new ResponseObject("success", "Product variants found", variantDTOList);
        }
        return new ResponseObject("error", "No variants found for the product", null);
    }
}
