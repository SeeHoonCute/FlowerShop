package com.flowery.order.dto;

import lombok.*;

import java.sql.Timestamp;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PaymentDTO {
    private Long paymentID;
    private String paymentMethod;
    private Timestamp paymentDate;
    private Long amount;
    private String paymentStatus;
}
