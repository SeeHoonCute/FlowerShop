package com.flowery.ServiceProduct.model.dto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.io.Serializable;
@Getter
@Setter
@NoArgsConstructor
public class ProductDTO {
    private Long productId;
    private Long shopId;
    private String mainImage;
    private String productName;
    private String productDescription;
    private int quantity;
    private String status;

    private String price;
}
