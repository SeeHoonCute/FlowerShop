package com.flowery.order.dto;

import jakarta.persistence.Column;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class OrderDTO {
    private Long orderID;
    private Long customerID;
    private Long shopID;
    private Timestamp orderDate;
    private Date shipDate;
    private String orderStatus;
    private long totalAmount;
    private String shippingAddress;
}

