package com.flowery.ServiceProduct.model.entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

import java.util.UUID;

@Entity
@Getter
@Setter
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    private Long shopId;
    private Long categoryId;
    private Long mainImageId;
    private String productName;
    private String productDescription;
    private int quantity;
    private String status;

//    public Product() {
//        this.productId = generateProductId();
//    }
//    private String generateProductId() {
//        return UUID.randomUUID().toString();
//    }

}