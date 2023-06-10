package com.flowery.order.service;

import com.flowery.order.dto.OrderItemDTO;

import java.util.List;

public interface OrderItemService{
    public List<OrderItemDTO> getAllOrderItemByOrderID(Long id);

    public OrderItemDTO createOrderItem(OrderItemDTO orderItemDTO, Long id);

    public OrderItemDTO updateOrderItem(OrderItemDTO orderItemDTO, Long id, Long idItem);

    public void deleteOrderItem(Long id, Long idItem);
}
