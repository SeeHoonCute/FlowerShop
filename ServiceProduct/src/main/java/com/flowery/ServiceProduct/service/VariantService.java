package com.flowery.ServiceProduct.service;

import com.flowery.ServiceProduct.model.dto.VariantDTO;
import com.flowery.ServiceProduct.model.entity.Variant;

import java.util.List;

public interface VariantService {
    Variant createVariant(VariantDTO dto);
    Variant getVariantId(Long variantId);
    Variant updateVariant(Long variantId, VariantDTO dto);
    void deleteVariant(Long variantId);
    List<VariantDTO> findAll();

    List<VariantDTO> getProductVariants(Long productId);

}
