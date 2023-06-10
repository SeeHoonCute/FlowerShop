package com.flowery.ServiceProduct.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class VariantDTO {
    private Long variantId;
    private Long productId;
    private Long imageId;
    private String variantName;
    private int price;
    private int quantity;
    private float discount;
}
