package com.flowery.ServiceProduct.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CartDTO {
    private Long cartId;
    private Long userId;
    private Long variantId;
    private int quatity;
}
