package com.flowery.order.service;

import com.flowery.order.dto.OrderDTO;
import com.flowery.order.dto.OrderItemDTO;
import com.flowery.order.entity.OrderEntity;

import java.util.List;

public interface OrderService {
    public List<OrderDTO> getAllOrders();

    public OrderDTO createOrder(OrderDTO orderDTO);

    public OrderDTO getOrderByID(Long id);

    public OrderDTO updateOrder(OrderDTO orderDTO, Long id);

    public void deleteOrder(Long id);
}