package com.flowery.order.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "ORDERITEM")
@Getter
@Setter
public class OrderItemEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "orderItemID", nullable = false)
    private Long orderItemID;

    @Column(name ="order_ID")
    private Long orderID;

    @Column(name ="productID")
    private Long productID;

    @Column(name = "quantity")
    private Long quantity;

    @Column(name = "price")
    private Long price;

    @Column(name = "discount")
    private Long discount;

    @Column(name = "subTotal")
    private  Long subTotal;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name ="orderID")
    private OrderEntity orderEntity;
}
