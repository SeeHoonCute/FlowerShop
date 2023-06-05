package com.flowery.ServiceProduct.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class WishlistDTO {
    private Long wishlistId;
    private Long userId;
    private Long variantId;
}
