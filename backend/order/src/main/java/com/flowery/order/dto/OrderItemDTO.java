package com.flowery.order.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter

public class OrderItemDTO {
    private Long orderItemID;
    private Long productID;
    private Long orderID;
    private Long quantity;
}
