package com.flowery.ServiceProduct.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
public class RatingDTO {
    private Long ratingId;
    private Long userId;
    private Long productId;
    private float ratingValue;
    private String review;
    private String createAt;
}
