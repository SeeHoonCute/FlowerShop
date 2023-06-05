package com.flowery.ServiceProduct.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CartDTO {
    private Long cartId;
    private String userId;
    private String variantId;
    private int quatity;
}
