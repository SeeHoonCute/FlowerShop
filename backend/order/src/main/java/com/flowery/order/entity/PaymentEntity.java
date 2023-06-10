package com.flowery.order.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;

@Entity
@Table(name = "PAYMENT")
@Getter
@Setter
public class PaymentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "paymentID", nullable = false)
    private Long paymentID;

    @OneToOne(targetEntity = OrderEntity.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "orderID", referencedColumnName = "orderID")
    private OrderEntity order;

    @Column(name = "paymentMethod")
    private String paymentMethod;

    @Column(name = "paymentDate")
    @CreationTimestamp
    private Timestamp paymentDate;

    @Column(name = "amount")
    private Long amount;

    @Column(name = "paymentStatus")
    private String paymentStatus;
}
