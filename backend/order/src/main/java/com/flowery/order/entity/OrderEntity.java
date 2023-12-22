package com.flowery.order.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "ORDERENTITY")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "orderID", nullable = false)
    private Long orderID;

    @Column(name = "customerID")
    private Long customerID;

    @Column(name = "shopID")
    private Long shopID;

    @Column(name = "orderDate")
    @CreationTimestamp
    private Timestamp orderDate;

    @Column(name = "shipDate")
    @CreationTimestamp
    private Date shipDate;

    @Column(name = "orderStatus")
    private String orderStatus;

    @Column(name = "totalAmount")
    private long totalAmount;

    @Column(name = "shippingAddress")
    private String shippingAddress;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "orderEntity")
    private List<OrderItemEntity> orderItemEntityList;

}
